import Nav from "./home/Nav";
import Footer from "./home/Footer";

import "./App.css";

import { Route, Routes } from "react-router-dom";
import { lazy, Suspense, useState, useEffect } from "react";

import "@aws-amplify/ui-react/styles.css"; // Import Amplify styles
import { Loader } from "@aws-amplify/ui-react";
import { getCurrentUser } from "aws-amplify/auth";
import { Hub } from "aws-amplify/utils";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import { generateClient } from "@aws-amplify/api";
import { createProfile, createUser } from "./graphql/mutations";
import { listUsers } from "./graphql/queries";

// Lazy loading components
const HomePage = lazy(() => import('./home/HomePage'));
const ListingPage = lazy(() => import('./listing/ListingPage'));
const Login = lazy(() => import('./auth/Login'));
const EditProfilePage = lazy(() => import('./profile/EditProfilePage'));
const HouseDetail = lazy(() => import('./listing/HouseDetail'));
const AddListingPage = lazy(() => import('./listing/AddListingPage'));


const client = generateClient();

async function checkUserSignedIn() {
  try {
    const user = await getCurrentUser();
    // User is signed in
    return { signedIn: true, user: user };
  } catch (error) {
    // User is not signed in
    return { signedIn: false, user: null };
  }
}

async function checkExistingUser() {
  const allUsers = await client.graphql({
    query: listUsers,
  });

  return allUsers.data.listUsers;
}

async function createNewUser(profile) {
  const newUser = await client.graphql({
    query: createUser,
    variables: {
      input: {
        userUserProfileId: profile.id,
      },
    },
  });

  return newUser.data.createUser;
}

async function createNewProfile(name) {
  const newProfile = await client.graphql({
    query: createProfile,
    variables: {
      input: {
        username: name,
        picture: "./profile.png",
        schoolname: "",
        email: "",
      },
    },
  });

  return newProfile.data.createProfile;
}

async function initUser(username, setUser) {
  try {
    const users = await checkExistingUser();

    if (users.items.length > 0) {
      setUser(users.items[0]);
      console.log("Used last user");
      return; // Return early if user exists
    }

    // If no existing user, proceed to create a new profile and user
    const profile = await createNewProfile(username);
    const user = await createNewUser(profile);
    setUser(user);
    console.log("Initialized user");
  } catch (error) {
    // Handle errors generally
    console.error("Error in initializing user:", error.message || error);
  }
}

function App() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [user, setUser] = useState(null);

  useEffect(() => {
    checkUserSignedIn()
      .then((result) => {
        setIsUserSignedIn(result.signedIn);
        setIsLoading(false);

        if (result.signedIn) {
          initUser(result.user.username, setUser);
        }
      })
      .catch((error) => {
        console.error("Failed to fetch user attributes:", error);
      });
  }, []);

  useEffect(() => {
    const listener = ({ payload }) => {
      switch (payload.event) {
        case "signedIn":
          console.log("user have been signedIn successfully.");
          setIsUserSignedIn(true);
          break;
        case "signedOut":
          console.log("user have been signedOut successfully.");
          setIsUserSignedIn(false);
          break;
        default:
          break;
      }
    };

    Hub.listen("auth", listener);
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <Suspense fallback={<Loader />}>
      <Nav isSignedIn={isUserSignedIn} user={user} />

      <Routes>
        <Route
          path="/"
          element={<HomePage isSignedIn={isUserSignedIn} user={user}/>}
        ></Route>
        <Route
          path="/home"
          exact={true}
          element={<HomePage isSignedIn={isUserSignedIn} user={user}/>}
        ></Route>
        <Route
          path="/listings"
          element={<ListingPage isSignedIn={isUserSignedIn} user={user}/>}
        ></Route>
        <Route
          path="/login"
          element={<Login isSignedIn={isUserSignedIn} user={user}/>}
        ></Route>
        <Route
          path="/listings-details"
          element={<HouseDetail isSignedIn={isUserSignedIn} user={user}/>}
        ></Route>
        <Route
          path="/listings-add"
          element={<AddListingPage isSignedIn={isUserSignedIn} user={user}/>}
        ></Route>
        <Route
          path="/profile"
          element={<EditProfilePage isSignedIn={isUserSignedIn} user={user} />}
        ></Route>
      </Routes>

      <Footer />
    </Suspense>
  );
}

export default App;
