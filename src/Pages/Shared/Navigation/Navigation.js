import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../../images/120x60logo.png'
import { Link } from 'react-router-dom'
import useAuth from '../../../Hooks/useAuth';
const Navigation = () => {
    const { singInGoogle, user, logOut } = useAuth();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <img src={logo} alt="" />
                    </Typography>
                    <Typography variant="button" sx={{mx: '1rem'}} color='white' component="div">
                        <Link to="/allProducts" style={{
                            color: 'white'
                        }}>Explore</Link>
                    </Typography>
                    {
                        user?.email ? <Button onClick={logOut} color="inherit">Logout</Button> : <Typography variant="button" color='white' component="div">
                            <Link to="/login" style={{
                                color: 'white'
                            }}>Login</Link>
                        </Typography>
                    }

                </Toolbar>
            </AppBar>
        </Box >
    );
};

export default Navigation;