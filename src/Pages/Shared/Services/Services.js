import { Button, Container } from '@mui/material';
import React from 'react';
import Service from '../Service/Service';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
const Services = () => {
    return (
        <Container sx={{ py: '5rem' }}>
            <h3>All services</h3>
            <Grid sx={{ mx: 'auto' }} container spacing={2}>
                <Grid item xs={12} sx={{ mx: 'auto' }} sm={6} md={6} lg={4}>
                    <Service></Service>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                    <Service></Service>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                    <Service></Service>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                    <Service></Service>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                    <Service></Service>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                <Service>{{isAllService: true} }</Service>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Services;