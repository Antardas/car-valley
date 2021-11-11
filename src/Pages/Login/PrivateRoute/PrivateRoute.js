import { CircularProgress } from '@mui/material';
import React from 'react';
import { Route, Redirect, } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';


const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    console.log(isLoading);
    if (isLoading === true) {
        return <CircularProgress />
    }
    console.log('check ',user, isLoading);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user?.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;
