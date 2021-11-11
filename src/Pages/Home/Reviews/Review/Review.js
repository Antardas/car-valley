import { Grid, Typography } from '@mui/material';
import React from 'react';
import Rating from '@mui/material/Rating';
const Review = () => {
    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <img style={{ borderRadius: '50%', width: "3rem" }} alt='user' src='https://cdn-icons-png.flaticon.com/512/149/149071.png' />
            <Typography variant='body1' component='h6'>
                Title
            </Typography>
            <Typography variant='body2' component='h6'>
                Description Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
            </Typography>
            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
        </Grid>
    );
};

export default Review;