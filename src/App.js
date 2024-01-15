import Nav from "./home/Nav";
import HomePage from "./home/HomePage";
import ListingPage from "./listing/ListingPage";
import Footer from "./home/Footer";
import Login from "./auth/Login";
import EditProfilePage from "./profile/EditProfilePage";

import "./App.css";

import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

import "@aws-amplify/ui-react/styles.css"; // Import Amplify styles
import { Loader } from '@aws-amplify/ui-react';
import {getCurrentUser} from 'aws-amplify/auth';
import { Hub } from "aws-amplify/utils";

async function checkUserSignedIn() {
  try {
      const user = await getCurrentUser();
      // User is signed in
      return true;
  } catch (error) {
      // User is not signed in
      return false;
  }
}

function App() {
  const [isUserSignedIn, setIsUserSignedIn]  = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkUserSignedIn()
        .then(signedIn => {
            setIsUserSignedIn(signedIn);
            setIsLoading(false);
        })
        .catch(error => {
            console.error("Failed to fetch user attributes:", error);
        });
}, []);

  Hub.listen("auth", ({ payload }) => {
    switch (payload.event) {
      case "signedIn":
        console.log("user have been signedIn successfully.");
        setIsUserSignedIn(true)
        break;
      case "signedOut":
        console.log("user have been signedOut successfully.");
        setIsUserSignedIn(false)
        break;
    }
  });

  if (isLoading) {
    return <Loader />
  }
  return (
    <>
      <Nav isSignedIn={isUserSignedIn}/>

      <Routes >
        <Route
          path="/"
          element={<HomePage isSignedIn={isUserSignedIn} />}
        ></Route>
        <Route
          path="/home"
          exact={true}
          element={<HomePage isSignedIn={isUserSignedIn} />}
        ></Route>
        <Route
          path="/listings"
          element={<ListingPage isSignedIn={isUserSignedIn} />}
        ></Route>
        <Route
          path="/login"
          element={<Login isSignedIn={isUserSignedIn} />}
        ></Route>
        <Route
          path="/profile"
          element={<EditProfilePage isSignedIn={isUserSignedIn} />}
        ></Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
