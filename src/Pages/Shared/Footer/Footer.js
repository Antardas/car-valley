import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import logo from '../../../images/120x50logo.jpg'
import { grey } from '@mui/material/colors';

const Footer = () => {
    return (
        <div sx={{mt: '2rem'}} style={{ backgroundColor: grey[900] }}>
            <Container sx={{pt: '5rem'}}>
                <Grid container spacing={0} sx={{ textAlign: 'left' }}>
                    <Grid item xs={12} sm={12} md={4}>
                        <Box>
                            <img src={logo} alt="" />
                            <Typography sx={{ textAlign: 'justify' }} color={grey[400]} variant='body2' component='p'>
                                It is a long establishment fact that a reader will be the distracted by the readable content of a page.
                            </Typography>
                        </Box>
                        <Box>
                            <Typography color={grey[50]} variant='h6'>
                                Address:
                            </Typography>
                            <Typography sx={{ textAlign: 'justify' }} color={grey[400]} variant='body2' component='p'>
                                45 Grand Central Terminal New York
                                NY 1245, United State USA
                            </Typography>
                        </Box>
                        <Box>
                            <Typography color={grey[50]} variant='h6'>
                                Email:
                            </Typography>
                            <Typography sx={{ textAlign: 'justify' }} color={grey[400]} variant='body2' component='p'>
                                Support@demosite.com
                            </Typography>
                        </Box>
                        <Box>
                            <Typography color={grey[50]} variant='h6'>
                                Phone:
                            </Typography>
                            <Typography href="tel:+123 4567 8910" sx={{ textAlign: 'justify' }} color={grey[400]} variant='body2'>
                                +123 4567 8910
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid color={grey[400]} item xs={12} sm={6} md={8} className='footer-li'>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4}>
                                <Typography variant="h6" color={grey[50]}>Quick Links</Typography>
                                <ul>
                                    <li>Support</li>
                                    <li>Helpline</li>
                                    <li>Affilates</li>
                                    <li>Live Support</li>
                                    <li>Customer Care</li>
                                    <li>FAQs</li>
                                </ul>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Typography variant="h6" color={grey[50]}>Informations</Typography>
                                <ul>
                                    <li>About Us</li>
                                    <li>Customer Services</li>
                                    <li>Privacy and Policy</li>
                                    <li>Order & Returns</li>
                                    <li>Shipping Policy</li>
                                    <li>Our Sitemap</li>
                                </ul>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Typography variant="h6" color={grey[50]}>My Account</Typography>
                                <ul>
                                    <li>Balance</li>
                                    <li>Checkout</li>
                                    <li>Cards</li>
                                    <li>Track Order</li>
                                    <li>Terms</li>
                                    <li>Site Policy</li>
                                </ul>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Typography sx={{pb: '1rem'}} color={grey[50]} variant="h5" component='h5'>
                    © Car-Valley - 2021 | All Right Reserved
                </Typography>
            </Container>
        </div>
    );
};

export default Footer;