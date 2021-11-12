import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/firebase/firebase.initialize";
initializeAuthentication();

const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [authError, setAuthError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);




    // sing in google auth
    const singInGoogle = (redirect_url, history) => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user);
                saveUser(user.email, user.displayName, 'PUT');
                history.replace(redirect_url);
            }).catch((error) => {
                setAuthError(error.message);
            }).then(() => setIsLoading(false));
    }

    // Register with email & password
    const registerWithEmail = (email, password, name, redirect_url, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const photourl = 'https://smcatalog.ru/upload/resize_cache/iblock/44c/60_60_1/44c96c6e612e94e45489acce024c8d76.png'
                const newUser = {
                    email,
                    displayName: name,
                    photoURL: photourl
                }
                setUser(newUser);
                saveUser(email, name, 'POST');
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                    setAuthError(error.message);
                });
                setAuthError('');
                history.replace(redirect_url)
            }).catch((error) => {
                setAuthError(error.message);
            }).then(() => setIsLoading(false));
    }

    // Sign In With Email & Password
    const logInWithEmail = (email, password, redirect_url, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                setAuthError('')
                history.replace(redirect_url)
            }).catch((error) => {
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

    // Save user to db
    const saveUser = (email, displayName, method) => {
        setIsLoading(true);
        const user = { email, displayName }
        setIsLoading(true);
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(res => res.json())
            .then(data => {
                if (data.isAdmin === true) {
                    setAdmin(true);
                }
            }).catch(err => console.log(err))
        .finally(() => setIsLoading(false))

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

    // Checking Logedin user admin or user
    useEffect(() => {
        const url = `http://localhost:5000/users/${user?.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setAdmin(data))

    }, [user?.email])

    return {
        user,
        singInGoogle,
        registerWithEmail,
        logInWithEmail,
        isLoading,
        logOut,
        authError,
        setAuthError,
        admin
    }
}
export default useFirebase;