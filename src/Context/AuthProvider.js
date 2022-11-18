import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth';
import app from '../Firebase/Firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,CurrentUser =>{
setUser(CurrentUser)
        })
        return ()=> unSubscribe();
    },[])

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    //update user
    const updateUser = (userInfo) =>{
        return updateProfile(user,userInfo);
    }

    //sign out
    const logOut = ()=>{
        return signOut(auth);
    }
    const authInfo = {
        createUser,
        signIn,
        user,
        updateUser,
        logOut
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;