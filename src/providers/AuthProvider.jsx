import React from "react";
import AuthContext from "../context/AuthContext";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.init";

const AuthProvider = ({ children }) => {
  // register function
  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in function 
  const signInUser =(email,password) =>{
    return signInWithEmailAndPassword(auth, email,password)
  };

  // all auth releted info
  const authInfo = {
    registerUser,
    signInUser, 
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
