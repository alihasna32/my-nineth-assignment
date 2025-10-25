import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { auth } from '../Firebase/Firebase.init';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)
  const signInWithGoogle = (provider) => {
    setLoading(true)
    return signInWithPopup(auth, provider);
  };

  const signupWithEmailAndPass = ( email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const updateUser= (name, photo) => {
    return updateProfile(auth.currentUser, {displayName:name,photoURL:photo})
  }

  const signinWithAndPass = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signOutUser = () => {
    setLoading(true)
    return signOut(auth)
  }

  const passwordReset = (email) => {
    setLoading(true)
    return sendPasswordResetEmail(auth, email)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    setUser,
    signInWithGoogle,
    signupWithEmailAndPass,
    signinWithAndPass,
    signOutUser,
    loading,
    setLoading,
    updateUser,
    passwordReset
  };
  return (
    <AuthContext value={authInfo}>
        {children}
    </AuthContext>
  )
};

export default AuthProvider;
