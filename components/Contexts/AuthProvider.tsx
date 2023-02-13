import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase.config";

interface OnAuthStateProps {
  [key: string]: any;
}
const defaultOnAuthStateProps: OnAuthStateProps = {
  user: undefined,
};

export const AuthContext = createContext({
  createUser: (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  },
  signInUser: (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  },
  user: defaultOnAuthStateProps,
  signOutUser: () => {
    return signOut(auth);
  },
  manageUser: (userInfo: { displayName: string }) => {},
  loading: true,
  setLoading: (value: boolean) => {},
  resetPassword: (email: string) => {
    return sendPasswordResetEmail(auth, email);
  },
});

const auth = getAuth(app);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  const createUser = (email: string, password: string) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email: string, password: string) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const manageUser = (userInfo: { displayName: string }) => {
    if (auth.currentUser) {
      return updateProfile(auth.currentUser, userInfo);
    }
  };

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  const resetPassword = (email: string) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };
  useEffect(() => {
    const unsbscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsbscribe();
  }, []);

  const authInfo = {
    createUser,
    signInUser,
    user,
    signOutUser,
    manageUser,
    loading,
    setLoading,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
