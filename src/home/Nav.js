import { default as NavBarHome } from "../ui-components/NavBarHome";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { signOut } from "aws-amplify/auth";
import { getUrl } from "aws-amplify/storage";

import React from "react";

async function getProfilePic(key, setProfilePic) {
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

export const useNavigateAction = (options) => {
  const navigate = useNavigate();
  const { type, url } = options;

  const navigateAction = React.useCallback(() => {
    switch (type) {
      case "url":
        navigate(url);
        break;
      case "reload":
        window.location.reload();
        break;
      // Handle other cases as needed
      default:
        console.warn(
          'Please provide a valid navigate type. Available types are "url" and "reload".'
        );
    }
  }, [navigate, type, url]);

  return navigateAction;
};

function Nav(props) {
  const [username, setUsername] = useState("");
  const [profilePic, setProfilePic] = useState("./profile.png");

  useEffect(() => {
    if (props.user) {
      setUsername(props.user.userProfile.username);
      const key = props.user.userProfile.picture;
      getProfilePic(key, setProfilePic);
    }
  }, [props.user, setProfilePic]);

  const navigateListing = useNavigateAction({ type: "url", url: "/listings" });
  const navigateHome = useNavigateAction({ type: "url", url: "/home" });
  const navigateLogin = useNavigateAction({ type: "url", url: "/login" });
  const navigateProfile = useNavigateAction({ type: "url", url: "/profile" });
  const navigateAddListing = useNavigateAction({
    type: "url",
    url: "/listings-add",
  });

  const navOverrides = {
    NavBarHome: {
      backgroundColor: "white",
      width: "100%",
      height: "60px",
      position: "fixed",
      top: "0",
      left: "0",
      padding: "10px 10px ",
      marginBottom: "10px",
      style: { zIndex: "100" },
    },
    Listings: {
      onClick: () => {
        navigateListing();
      },
      className: "hoverable-text",
    },

    Market: {
      onClick: () => {
        navigateListing();
      },
      className: "hoverable-text",
    },

    image38464215: {
      onClick: () => {
        navigateHome();
      },
      src: "./logo.png",
      alt: "ANNEY logo",
      style: {
        border: "1px solid silver",
        borderRadius: "50%",
        objectFit: "cover ",
      },
      className: "image-hover-zoom",
    },
    actions: {
      display: props.isSignedIn ? "None" : "block",
    },

    Button: {
      onClick: () => {
        navigateLogin();
      },
      children: "Log in",
    },
    Welcome: {
      children: props.isSignedIn ? "Welcome " + username : "Welcome Guest!",
      display: { base: "None", large: "block" },
    },

    MyIcon: {
      display: props.isSignedIn ? { base: "None", medium: "block" } : "None",
    },

    image38464221: {
      display: props.isSignedIn ? "block" : "None",
      src: profilePic,
      alt: "ProfilePicture",
      className: "image-hover-zoom",
    },

    menu: {
      menuAlign: "end",
    },

    signOut: {
      onClick: () => {
        signOut();
        alert("You have been signed out!");
      },
    },

    profile: {
      onClick: () => {
        navigateProfile();
      },
    },

    addListing: {
      onClick: () => {
        navigateAddListing();
      },
    },
  };

  return (
    <>
      <NavBarHome overrides={navOverrides} />
    </>
  );
}

export default Nav;
