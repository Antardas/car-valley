import { Box } from '@mui/system';
import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Button, Container, TextField, Typography } from '@mui/material';
import Alert from '@mui/material/Alert';
import { blue, grey } from '@mui/material/colors';
import googleSVG from '../../../images/google.svg'
import loginSVG from '../../../images/login.svg'
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
const Register = () => {
    const { singInGoogle, registerWithEmail } = useAuth();
    const location = useLocation();
    const redirect_url = location.state?.from || '/home'
    const history = useHistory();
    console.log(location);
    const [singnUPData, setSignUpData] = useState({});
    const [success, setSuccess] = useState(true);
    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...singnUPData };
        newLoginData[field] = value;
        setSignUpData(newLoginData);
    }
    const vanishAlert = () => {
        setTimeout(() => {
            setSuccess(true);
        }, 3000);
    }
    const handleSubmit = (e) => {
        console.log(singnUPData)

        console.log('calling handleSubmit')
        if (singnUPData.password !== singnUPData.password2) {
            vanishAlert()
            setSuccess(false);
            e.preventDefault();
            return
        }
        registerWithEmail(singnUPData.email, singnUPData.password, singnUPData.name, redirect_url, history);
        e.preventDefault();
    }


    return (
        <Box >
            <Grid container spacing={2}>
                <Box style={{ position: 'absolute', width: '320px', margin: '0 auto', right: 0, left: 0, marginTop: '2rem' }}>
                    {
                        !success && <Alert severity="error">Password Doesn't Match</Alert>

                    }
                </Box>
                <Grid item xs={12} md={6}>
                    <Container>
                        <Box style={{ display: 'block', marginTop: '5rem' }}>
                            <img style={{ width: '100%' }} src={loginSVG} alt="" />
                        </Box>
                    </Container>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box style={{ display: 'block', minHeight: '100vh', backgroundColor: grey[900], padding: '2rem 3rem' }}>
                        <Typography color="white" sx={{ pt: '3rem' }} style={{ textAlign: 'left', }} variant="h3" component='h3'>
                            Let's Get Started
                        </Typography>
                        <Typography color={grey[400]} sx={{ textAlign: 'left', pt: '2rem' }} variant="body2" component='p'>
                            Login Your Existing Account
                        </Typography>
                        <form onSubmit={handleSubmit} sx={{ mt: '5rem', display: 'block' }}>
                            <TextField
                                sx={{ width: '80%', my: '2rem' }}
                                id="name"
                                label="Your Name"
                                variant="standard"
                                type="text"
                                name="name"
                                required
                                onBlur={handleOnBlur}
                                className='textfield'
                                InputProps={{ className: 'textfield' }}
                                InputLabelProps={{ className: 'textfield__label' }}
                            />
                            <br />
                            <TextField
                                sx={{ width: '80%' }}
                                id="email"
                                label="Your Email"
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
                                sx={{ width: '80%', mt: '2rem' }}
                                id="passwore"
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
                            <TextField
                                sx={{ width: '80%', my: '2rem' }}
                                id="passwore2"
                                label="Re-Type Password"
                                variant="standard"
                                type="password"
                                name="password2"
                                required
                                onBlur={handleOnBlur}
                                className='textfield'
                                InputProps={{ className: 'textfield' }}
                                InputLabelProps={{ className: 'textfield__label' }}
                            />
                            <br />
                            <Button sx={{ my: '2rem' }} type='submit' variant="contained">Register</Button>
                        </form>
                        <Button onClick={() => singInGoogle(redirect_url, history)}> <img style={{ width: '30px' }} src={googleSVG} alt="" /></Button>
                        <Typography color='white'>Already Hava An Account? <Link to={{ pathname: '/login', state: { from: redirect_url } }}><Button>Login</Button></Link> </Typography>
                    </Box>
                </Grid>
            </Grid>

        </Box>
    );
};

export default Register;