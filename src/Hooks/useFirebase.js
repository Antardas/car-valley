import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/firebase/firebase.initialize";
import { useHistory } from "react-router-dom";
initializeAuthentication();

const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [authError, setAuthError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const history = useHistory();
    console.log('calling Firbase', user);
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
    const registerWithEmail = (email, password, name) => {
        console.log(name, email, password, 'fero register');
        setIsLoading(true)
        createUserWithEmailAndPassword (auth, email, password)
            .then(result => {
                const user = result.user;
                const photourl = 'https://smcatalog.ru/upload/resize_cache/iblock/44c/60_60_1/44c96c6e612e94e45489acce024c8d76.png'
                const newUser = {
                    email,
                    displayName: name,
                    photoURL: photourl
                }
                setUser(newUser);
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });
                setAuthError('');
                history.push('/home')
            }).catch((error) => {
                console.log('found error')
                setAuthError(error.message);
            }).then(() => setIsLoading(false));
    }

    // Sign In With Email & Password
    const logInWithEmail = (email, password, redirect_url, history) => {
        setIsLoading(true);
        console.log('logInWithEmail', email,password);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                setAuthError('')
                history.replace(redirect_url)
            }).catch((error) => {
                console.log(error)
                setAuthError(error.message);
            }).then(() => setIsLoading(false));
    }

    // Logout user
    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
            setAuthError(error.message);
        }).then(() => setIsLoading(false));
    }


    // Observed User Auth
    useEffect(() => {
        setIsLoading(true)
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });

        return () => unSubscribe;
    }, [])

    return {
        user,
        singInGoogle,
        registerWithEmail,
        logInWithEmail,
        isLoading,
        logOut,
        authError
    }
}
export default useFirebase;