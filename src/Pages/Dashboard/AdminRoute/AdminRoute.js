import { CircularProgress } from '@mui/material';
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";
import useAuth from '../../../Hooks/useAuth';
const AdminRoute = ({ children, ...rest }) => {
    const { user, admin } = useAuth();
    console.log(user, admin);
    if(user?.email && !admin){return <CircularProgress/>}
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user?.email && admin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/dashboard",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;