import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../Firebase/Firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,CurrentUser =>{
setUser(CurrentUser);
setLoading(false)
        })
        return ()=> unSubscribe();
    },[])

    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }
    //update user
    const updateUser = (userInfo) =>{
        setLoading(true)
        return updateProfile(user,userInfo);
    }
    //sign in with pop up
    const loginIWithpopUp = (provider) =>{
        setLoading(true)
        return signInWithPopup(auth,provider);
    }
    //password reset 

    const resetPassword = (email) =>{
        setLoading(true);
        return sendPasswordResetEmail(auth,email);
    }

    //sign out
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth);
    }
    const authInfo = {
        createUser,
        signIn,
        user,
        updateUser,
        loading,
        loginIWithpopUp,
        resetPassword,
        logOut
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;