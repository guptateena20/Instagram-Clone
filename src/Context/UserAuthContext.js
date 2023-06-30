import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { auth, storage } from "../firebase";
import {ref, uploadBytes} from 'firebase/storage'

const userAuthContext = createContext();

export const UserAuthContextProvider = ({ children }) => {
    const [user, setUser] = useState("")
    const [modal, setModal] = useState(false)

    const signUp = (email, password, username) => {
        return createUserWithEmailAndPassword(auth, email, password, username);
    }

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    const googleSignIn = () => {
        const googleAuthProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleAuthProvider)
    }

    const create = (data) => {
        const {title, image} = data;
        if(image === null) return;
        const upload = ref(storage, `images/${image.name}`)
        uploadBytes(upload, image).then(() => {
            console.log("Image Uploaded")
        })
        // upload.on("state_changed", (snapshot) => {
        //     let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        //     console.log(progress);
        // }, (error) => {
        //     console.log(error)
        // }, () => {
        //     //complete function //
        // })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser);
        })
    }, [])

    return (
        <userAuthContext.Provider value={{ user, signUp, logIn, logOut, googleSignIn, modal, setModal, create }}>
            {children}
        </userAuthContext.Provider>
    )
}

export const useUserAuth = () => {
    return useContext(userAuthContext)
}