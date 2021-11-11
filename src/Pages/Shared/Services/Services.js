import { Button, Container } from '@mui/material';
import React from 'react';
import Service from '../Service/Service';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
const Services = () => {
    const fakeData = [
        {
            title: ' title Lizard',
            description: 'Description Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
            img: 'https://cdn.al-ain.com/images/2019/5/10/147-034017-ferrari-hybrid-supercar-confirmed_700x400.png'
        },
        {
            title: ' title Lizard',
            description: 'Description Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
            img: 'https://cdn.al-ain.com/images/2019/5/10/147-034017-ferrari-hybrid-supercar-confirmed_700x400.png'
        },
        {
            title: ' title Lizard',
            description: 'Description Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
            img: 'https://cdn.al-ain.com/images/2019/5/10/147-034017-ferrari-hybrid-supercar-confirmed_700x400.png'
        },
        {
            title: ' title Lizard',
            description: 'Description Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
            img: 'https://cdn.al-ain.com/images/2019/5/10/147-034017-ferrari-hybrid-supercar-confirmed_700x400.png'
        },
        {
            title: ' title Lizard',
            description: 'Description Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
            img: 'https://cdn.al-ain.com/images/2019/5/10/147-034017-ferrari-hybrid-supercar-confirmed_700x400.png'
        },
        {
            title: ' title Lizard',
            description: 'Description Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
            img: 'https://cdn.al-ain.com/images/2019/5/10/147-034017-ferrari-hybrid-supercar-confirmed_700x400.png'
        },
        {
            title: ' title Lizard',
            description: 'Description Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
            img: 'https://cdn.al-ain.com/images/2019/5/10/147-034017-ferrari-hybrid-supercar-confirmed_700x400.png'
        },
        {
            title: ' title Lizard',
            description: 'Description Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
            img: 'https://cdn.al-ain.com/images/2019/5/10/147-034017-ferrari-hybrid-supercar-confirmed_700x400.png'
        },

    ];
    return (
        <Container sx={{ py: '5rem' }}>
            <h3>All services</h3>
            <Grid sx={{ mx: 'auto' }} container spacing={2}>
                {
                    fakeData.map((product, index) => <Service product={product} key={index}></Service>)
                }
            </Grid>
        </Container>
    );
};

export default Services;