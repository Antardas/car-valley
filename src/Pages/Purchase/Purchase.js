import { Box } from '@mui/system';
import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Button, CircularProgress, Container, TextField, Typography } from '@mui/material';
import Alert from '@mui/material/Alert';
import { blue, grey } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
const Purchase = () => {
    const [singnUPData, setSignUpData] = useState({});
    const [success, setSuccess] = useState(true);
    const { user, isLoading } = useAuth();
    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...singnUPData };
        newLoginData[field] = value;
        setSignUpData(newLoginData);
    }
    const handleSubmit = (e) => {
        console.log(singnUPData)

        console.log('calling handleSubmit')

        e.preventDefault();
    }
    if (isLoading) { return <CircularProgress/>}


    return (
        <Box >
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Container>
                        <Box style={{ display: 'block', marginTop: '5rem' }}>
                            
                        </Box>
                    </Container>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box style={{ display: 'block', minHeight: '100vh', backgroundColor: grey[900], padding: '2rem 3rem' }}>
                        <Typography color="white" sx={{ py: '5rem' }} style={{ textAlign: 'left', }} variant="h3" component='h3'>
                            Welcome
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
                                id="houseno"
                                label="Your House / Building no"
                                variant="standard"
                                type="text"
                                name="house"
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
                                label="City"
                                variant="standard"
                                type="text"
                                name="city"
                                required
                                onBlur={handleOnBlur}
                                className='textfield'
                                InputProps={{ className: 'textfield' }}
                                InputLabelProps={{ className: 'textfield__label' }}
                            />
                            <br />
                            <Button sx={{ my: '2rem' }} type='submit' variant="contained">Purchase Now</Button>
                        </form>
                       
                    </Box>
                </Grid>
            </Grid>

        </Box>
    );
};

export default Purchase;