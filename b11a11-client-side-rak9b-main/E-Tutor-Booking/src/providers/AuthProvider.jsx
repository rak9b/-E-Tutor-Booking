/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = async () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // onAuthStateChange
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("User is Login Email", currentUser?.email);
      // jwt authentication
      if (currentUser?.email) {
        const user = { email: currentUser.email };
        axios
          .post(`${import.meta.env.VITE_API_URL}/jwt`, user, {
            withCredentials: true,
          })
          .then((response) => {
            console.log("LogIn User Token : ", response.data);
            setLoading(false);
          });
      } else {
        axios
          .post(
            `${import.meta.env.VITE_API_URL}/logout`,
            {},
            { withCredentials: true }
          )
          .then((response) => {
            console.log("You are Logout : ", response.data);
            setLoading(false);
          });
      }
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     setUser(currentUser);
  //     console.log("state captured", currentUser);
  //     // jwt authentication
  //     if (currentUser?.email) {
  //       const user = { email: currentUser.email };
  //       axios
  //         .post(`${import.meta.env.VITE_API_URL}/jwt`, user, {
  //           withCredentials: true,
  //         })
  //         .then((response) => {
  //           console.log("LogIn User Token : ", response.data);
  //           setLoading(false);
  //         });
  //     } else {
  //       axios
  //         .post(
  //           `${import.meta.env.VITE_API_URL}/logout`,
  //           {},
  //           { withCredentials: true }
  //         )
  //         .then((response) => {
  //           console.log("You are Logout : ", response.data);
  //           setLoading(false);
  //         });
  //     }
  //   });

  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    signIn,
    signInWithGoogle,
    logOut,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
