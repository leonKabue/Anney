
import { default as NavBarHome } from "../ui-components/NavBarHome"
import { useNavigateAction } from "../ui-components/utils.js"
import { useState, useEffect } from 'react';
import { getCurrentUser, signOut } from 'aws-amplify/auth';

import React from 'react';

async function handleGetUserName() {
  try {
    const user = await getCurrentUser();
    return user.username;
  } catch (error) {
    return "";
  }
}

function Nav(props) {

    const [username, setUsername] = useState('');

    useEffect(() => {
        handleGetUserName()
            .then(fetchedUsername => {
                setUsername(fetchedUsername);
            })
            .catch(error => {
                console.error("Failed to fetch user attributes:", error);
            });
    }, [props.isSignedIn]);

    const navigateListing = useNavigateAction({ type: "url", url: "/listings" });
    const navigateHome = useNavigateAction({ type: "url", url: "/home" });
    const navigateLogin = useNavigateAction({ type: "url", url: "/login" });
    const navigateProfile = useNavigateAction({ type: "url", url: "/profile" });

    const navOverrides = {
        NavBarHome: {
            backgroundColor: "white",
            width: "100%",
            height: "60px",
            position: "fixed",
            top: "0",
            left: "0",
            padding: "10px 20px ",
            marginBottom: "10px",
            style: {zIndex: "100"},
        },
        Listings : {
            onClick: () => {
                navigateListing()
            },
            className: "hoverable-text"
        },
        image38464215:  {
            onClick: () => {
                navigateHome()
            },
            src: "./img/logo.png",
            alt: "ANNEY logo",
            style: {outline: "1px solid silver"},
            className: "image-hover-zoom"
        },
        actions: {
            display: props.isSignedIn ? "None" : "block",
        },

        Button: {
            onClick: () => {
                navigateLogin()
            },
            children: "Log in",
        },
        Welcome: {
            children: props.isSignedIn ? "Welcome " +  username
            : "Welcome Guest!",
            display: {base: "None", large: "block"} ,

        },

        MyIcon : {
            display: props.isSignedIn ? "block" : "None",
        },

        image38464221 : {
            display: props.isSignedIn ? "block" : "None",
            src: "./img/profile.png",
            alt: "ProfilePicture",
            className: "image-hover-zoom"
        },

        menu : { 
            menuAlign: "end",
        },

        signOut : { 
            onClick: () => {
                signOut()
                alert("You have been signed out!")
            },
        },

        profile : {
            onClick: () => {
                if (props.isSignedIn) { navigateProfile()}
            }
        }

    }

    return (
        <>
        <NavBarHome overrides={navOverrides} />
        </>
    )
}

export default Nav;