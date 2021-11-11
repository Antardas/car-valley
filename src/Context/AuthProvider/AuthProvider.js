import React, { createContext } from 'react';
import useFirebase from '../../Hooks/useFirebase';
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const allContext = useFirebase();
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

/* 
1. react syntax
2. createContext
3. change div to AuthContext.provider
4. get all thing from useFirebasee
 */
