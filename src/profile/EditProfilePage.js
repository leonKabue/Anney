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
            wrap: "wrap",
            shrink: "1",
            grow: "1",
            transform: {medium:'translate(60%, 0%)'},
            border: '1px solid #ccc',
            marginTop: "70px",
            style: {position: 'static',
                    zIndex: '1'
                },
        },

        Content: {
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
            src: "./img/profile.png",
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

    return <EditProfile overrides={profileOverrides}/>;
}

export default EditProfilePage;