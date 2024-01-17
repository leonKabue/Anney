import { default as EditProfile } from "../ui-components/EditProfile";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";


function EditProfilePage(props) {
    let navigate = useNavigate();

    useEffect(() => {
        if (!props.isSignedIn) {
            navigate('/login');
        }
    }, [props.isSignedIn])
    
    const profileOverrides = {
        EditProfile : {
            width: {base:"100%", medium: "640px"},
            height: "auto",
            overflow: "auto",
            wrap: "wrap",
            shrink: "1",
            grow: "1",
            border: '0.5px solid #000',
            borderRadius: '15px',
            style: {position: 'static',
                    zIndex: '1'
                },
            marginLeft: {medium:"auto"},
            marginRight: {medium:"auto"},
            marginBottom: "50px",
            marginTop: "65px",
            backgroundImage:{base:"linear-gradient(90deg, rgba(125,214,232,1), rgba(255,255,255,1))"},
        },

        Content: {
            gap: "20px",
            shrink: "1",
            grow: "1",
            padding: "15px 5px 15px 5px",
        },

        EditProfile29766913: {
            direction: {base: "column", medium: "row"},
        },

        MyIcon: {
            onClick: () => {
                navigate("/home")
            },
            className: "image-hover-zoom"
        },

        Profile: {
            direction: {base: "column", medium: "row"},
        },

        image: {
            src: "./profile.png",
            alt: "profile picture"
        },

        UploadNewImage: {
            className: "hoverable-text"
        },

        TextField29766923: {
            label: "School",
            placeholder: "University of Pennsylvania, Philadelphia, PA",
        },

        TextField29766924: {
            placeholder: "john.doe@anneyhousing.com",
            label: "Email"
        }
    }

    return (
        <EditProfile overrides={profileOverrides}/>
    )
}

export default EditProfilePage;