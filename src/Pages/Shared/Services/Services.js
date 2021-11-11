import { Button, CircularProgress, Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
const Services = () => {

    const [porducts, setProducts] = useState([]);
    console.log(porducts);
    // get all Products
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <Container sx={{ py: '5rem' }}>
            <Grid sx={{ mx: 'auto' }} container spacing={2}>
                {
                    porducts[0] ? porducts.map((product, index) => <Service product={product} key={index}></Service>) : <CircularProgress sx={{mx: 'auto'}}/>
                }
            </Grid>
        </Container>
    );
};

export default Services;