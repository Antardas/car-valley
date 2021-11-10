import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import { purple, red, blue, grey } from '@mui/material/colors';
import redCar from '../../../images/red-car.png';
import blob from '../../../images/bg.svg';
const Banner = () => {
    const bgStyle = {
        backgroundImage: `url(${blob})`,
        backgroundSize: '35rem',
        backgroundPosition: 'right',
        marginTop: '2rem',
        backgroundRepeat: 'no-repeat',
    }
    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: purple[500],
        '&:hover': {
            backgroundColor: purple[700],
        },
    }));
    return (
        <Box id='home' sx={{ flexGrow: 1, textAlign: 'left' }} style={bgStyle}>
            <Container sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={5} sx={{mt: '5rem'}}>
                        <Typography sx={{ color: blue[500], lineHeight: '3rem'}} variant='h6' component='h6'>
                            Welcome to Car Plant
                        </Typography>
                        <Typography sx={{fontWeight: 600, lineHeight: '3rem'}} variant='h4' component='h4'>
                            Rent's The Best Quality
                            <br />
                            Car's With Us
                        </Typography>
                        <Typography sx={{color: grey[500], lineHeight: '20px'}} variant='body2'>
                            Find Car Service In Usa. Unlimited Access. 100% Secure. Always Facts. Privacy Friendly. The Best Resources. Results & Answers. Types: Best Results, Explore Now, New Sources, Best in Search.
                        </Typography>
                        <Box>
                            <Button sx={{mt: 5}} variant='contained'>Buy Your Car</Button>
                        </Box>

                    </Grid>
                    <Grid item xs={12} md={7}>
                      <img style={{ width: '100%' }} src={redCar} alt="car" />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Banner;