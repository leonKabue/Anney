import { default as EditProfile } from "../ui-components/EditProfile";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

import { uploadData, getUrl, remove } from "aws-amplify/storage";
import { generateClient } from "@aws-amplify/api";
import { updateProfile } from "../graphql/mutations";

const client = generateClient();

async function updateUserProfile(newProfile) {
  try {
    const result = await client.graphql({
      query: updateProfile,
      variables: { input: newProfile },
    });
    return result.data.updateProfile;
  } catch (error) {
    console.error("Could not update profile: ", error);
  }
}

async function uploadProfilePic(file, profile) {
  try {
    const result = await uploadData({
      key: `profile-${profile.id}-${file.name}`,
      data: file,
      options: {
        contentType: file.type,
      },
    }).result;
    return result;
  } catch (error) {
    console.error("Could not upload profile pic: ", error);
  }
}

async function getProfilePic(key, setProfilePic) {
  console.log(key)
  if (!key || key === "./profile.png") {
    setProfilePic("./profile.png");
    return;
  } else {
    try {
      const picURL = await getUrl({ key: key });
      setProfilePic(picURL.url);
    } catch (error) {
      console.error("Could not get profile pic", error);
      setProfilePic("./profile.png");
    }
  }
}

async function removeLastPic(key) {
    if (!key || key === "./profile.png") {
        return;
    } else {
        try {
            await remove({key: key})
                .then ((key) => {
                    console.log("Succesfully removed: ", key);
                })
        } catch (error) {
            console.error("Could not remove last pic: ", error);
        }
    }
}

function EditProfilePage(props) {
  const [profile, setProfile] = useState(null);

  const [newEmail, setNewEmail] = useState("");
  const [newSchool, setNewSchool] = useState("");
  const [newUsername, setNewUserName] = useState("");
  const [newPicture, setNewPicture] = useState("");
  const [stateChanged, setStateChanged] = useState(false);

  const acceptedFileTypes = ["image/png", "image/jpeg"];
  const hiddenInput = useRef(null);

  const [profilePic, setProfilePic] = useState("./profile.png");

  const checkStateChanged = () => {
    console.log("Checking state change", profile);
    console.log("New pic", newPicture)
    if ((newUsername.trim() !== "" && newUsername !== profile.username) ||
    (newEmail.trim() !== "" && newEmail !== profile.email) ||
    (newSchool.trim() !== "" && newSchool !== profile.school) ||
    (newPicture.trim() !== "" && newPicture !== profile.picture)) {
      setStateChanged(true);
      console.log("Confirmed state changed")
    }
  }

  let navigate = useNavigate();

  useEffect(() => {
    if (!props.isSignedIn) {
      navigate("/login");
    }
  }, [props.isSignedIn]);

  useEffect(() => {
    if (props.user) {
      setProfile(props.user.userProfile);
    }
  }, [props.user]);

  useEffect(() => {
    if (profile) {
      getProfilePic(profile.picture, setProfilePic);
      checkStateChanged()
    }
  }, [profile, setProfile]);

  useEffect(() => {
    getProfilePic(newPicture, setProfilePic);
    checkStateChanged();
  }, [newPicture, setNewPicture]);


  const profileOverrides = {
    EditProfile: {
      width: { base: "100%", medium: "640px" },
      height: "auto",
      overflow: "auto",
      minHeight: "calc(100vh - 60px)",
      wrap: "wrap",
      shrink: "1",
      grow: "1",
      border: "0.5px solid #000",
      borderRadius: "15px",
      style: { position: "static", zIndex: "1" },
      marginLeft: { medium: "auto" },
      marginRight: { medium: "auto" },
      marginBottom: { base: "10px", medium: "50px" },
      marginTop: "65px",
      backgroundImage: {
        base: "linear-gradient(90deg, rgba(125,214,232,1), rgba(255,255,255,1))",
      },
    },

    Content: {
      gap: "20px",
      shrink: "1",
      grow: "1",
      padding: "15px 5px 15px 5px",
    },

    EditProfileFlex: {
      direction: { base: "column", medium: "row" },
    },

    MyIcon: {
      onClick: () => {
        navigate("/home");
      },
      className: "image-hover-zoom",
    },

    Profile: {
      direction: { base: "column", medium: "column" },
    },

    image: {
      src: profilePic,
      alt: "profile picture",
      overflow: "hidden",
    },

    UploadImage: {
      className: "hoverable-text",
      onClick: () => {
        hiddenInput.current.click();
      },
    },

    UploadImageInput: {
      ref: hiddenInput,
      onChange: (event) => {
        const files = event.target.files;

        if (files && files.length === 1 && profile) {
          uploadProfilePic(files[0], profile).then((result) => {
            setNewPicture(result.key)
            getProfilePic(newPicture, setProfilePic)
            checkStateChanged()
          });
        }
      },
      multiple: false,
      accept: acceptedFileTypes.join(","),
    },

    DeleteImage: {
        className: "hoverable-text",
        onClick: () => {
            setNewPicture("./profile.png")
            getProfilePic(newPicture, setProfilePic)
            checkStateChanged();
        }
    },

    SchoolTextField: {
      descriptiveText: profile ? profile.schoolname : "Add Your School",
      onChange: (e) => {
        setNewSchool(e.currentTarget.value);
        checkStateChanged();
      },

    },

    EmailTextField: {
      descriptiveText: profile ? profile.email : "Add Your Email",
      onChange: (e) => {
        setNewEmail(e.currentTarget.value);
        checkStateChanged();
      },
    },

    UsernameTextField: {
      descriptiveText: profile ? profile.username : "Add Your Username",
      onChange: (e) => {
        setNewUserName(e.currentTarget.value);
        checkStateChanged();
      },
    },

    SaveButton: {
      isDisabled: !stateChanged,
      onClick: () => {
        if (stateChanged) {
          const newProfile = {
            id: profile.id,
            username: newUsername.trim() !== "" ? newUsername : profile.username,
            schoolname: newSchool.trim() !== "" ? newSchool : profile.schoolname,
            email: newEmail.trim() !== "" ? newEmail : profile.email,
            picture: newPicture.trim() !== "" ? newPicture : profile.picture,
          };
          if (newPicture !== "" && newPicture !== profile.picture) {
            removeLastPic(profile.picture);
          }
          updateUserProfile(newProfile).then((result) => {
            setNewEmail("");
            setNewPicture("");
            setNewSchool("");
            setNewUserName("");
            setProfile(result);
            window.location.reload();
          });
        }
      },
    },
  };

  return <EditProfile overrides={profileOverrides} />;
}

export default EditProfilePage;
