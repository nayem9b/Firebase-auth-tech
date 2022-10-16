import app from "../Firebase/firebase.config";
import getAuth, { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createContext, useState } from "react";

export const AuthContext = createContext();

const auth = getAuth(app);
const Context = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const authInfo = {
    signInWithGoogle,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default Context;
