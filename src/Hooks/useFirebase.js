import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/firebase/firebase.initialize";
initializeAuthentication();

const useFirebase = () => {
    const auth = getAuth();

    const [user, setUser] = useState({});
    const [authError, setAuthError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    // sing in google auth
    const singInGoogle = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user);
            }).catch((error) => {
                setAuthError(error.message);
            }).then(() => setIsLoading(false));
    }

    // Register with email & password
    const registerWithEmail = (email, password) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
            }).catch((error) => {
                setAuthError(error.message);
            }).then(() => setIsLoading(false));
    }

    // Sign In With Email & Password
    const logInWithEmail = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
            }).catch((error) => {
                setAuthError(error.message);
            }).then(() => setIsLoading(false));
    }

    // Logout user
    const logOut = () => {
        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
            setAuthError(error.message);
        }).then(() => setIsLoading(false));
    }


    // Observed User Auth
    useEffect(() => {
        setIsLoading(true);
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
        });
        setIsLoading(false);

        return () => unSubscribe;
    }, [])

    return {
        user,
        singInGoogle,
        registerWithEmail,
        logInWithEmail,
        isLoading,
        logOut
    }
}
export default useFirebase;