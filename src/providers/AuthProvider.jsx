import React from "react";
import AuthContext from "../context/AuthContext";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase.init";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  // register function
  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in function 
  const signInUser =(email,password) =>{
    return signInWithEmailAndPassword(auth, email,password)
  };

  // google sign in 
  const googleSignIn =()=> {
    return signInWithPopup(auth, googleProvider);
  };



  // all auth releted info
  const authInfo = {
    registerUser,
    signInUser, 
    googleSignIn
  };



  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
