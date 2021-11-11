import { Box } from '@mui/system';
import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Alert, Button, Container, TextField, Typography } from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import googleSVG from '../../../images/google.svg'
import loginSVG from '../../../images/login.svg'
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
const Login = () => {
    const { singInGoogle, logInWithEmail, authError, setAuthError } = useAuth();
    const history = useHistory();
    const location = useLocation()
    const [loginData, setLoginData] = useState({});
    console.log(location);
    const redirect_url = location?.state?.from || '/home'
    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleSubmit = (e) => {
        logInWithEmail(loginData.email, loginData.password, redirect_url, history);
        e.preventDefault();
    }
    const vanishAlert = () => {
        setTimeout(() => {
            setAuthError('');

        }, 3000);
    }
    authError && vanishAlert();

    return (
        <Box >

            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Box style={{ display: 'block', marginTop: '5rem' }}>
                        <img style={{ width: '100%' }} src={loginSVG} alt="" />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>

                    <Box style={{ position: 'absolute', width: '320px', margin: '0 auto', right: 0, left: 0, marginTop: '2rem' }}>
                        {
                            authError ? <Alert sx={{ mb: '2rem' }} severity="error">{authError}</Alert> : null
                        }
                    </Box>
                    <Box style={{ display: 'block', height: '100vh', backgroundColor: grey[900], padding: '0 3rem'}}>
                        <Typography color="white" sx={{ pt: '5rem', pb: '2rem' }} style={{ textAlign: 'left', }} variant="h3" component='h3'>
                            Welcome Back
                        </Typography>
                        <Typography color={grey[400]} style={{ textAlign: 'left', }} variant="body2" component='p'>
                           Login Your Existing Account
                        </Typography>
                        <form onSubmit={handleSubmit} sx={{ mt: '5rem', display: 'block' }}>
                            <TextField
                                sx={{ width: '80%' }}
                                id="email"
                                label="Email"
                                variant="standard"
                                type="email"
                                name="email"
                                required
                                onBlur={handleOnBlur}
                                className='textfield'
                                InputProps={{ className: 'textfield' }}
                                InputLabelProps={{ className: 'textfield__label' }}
                            />
                            <br />
                            <TextField
                                sx={{ width: '80%', mt: '3rem' }}
                                id="filled-basic"
                                label="Password"
                                variant="standard"
                                type="password"
                                name="password"
                                required
                                onBlur={handleOnBlur}
                                className='textfield'
                                InputProps={{ className: 'textfield' }}
                                InputLabelProps={{ className: 'textfield__label' }}
                            />
                            <br />
                            <Button sx={{ my: '2rem' }} type='submit' variant="contained">Login</Button>
                        </form>
                        <Button onClick={() => singInGoogle(redirect_url, history)}> <img style={{ width: '30px' }} src={googleSVG} alt="" /></Button>
                        <Typography color='white'>Don't Hava An Account? <Link to={{ pathname: '/register', state: { from: redirect_url } }}><Button>Sign Up</Button></Link> </Typography>
                    </Box>
                </Grid>
            </Grid>

        </Box>
    );
};

export default Login;