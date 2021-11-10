import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    return (
        <div>
            <Container>

                <Typography variant="h4" component='h4'>
                    Latest Review
                </Typography>
                <Typography variant="h2" component='h4'>
                    Whar they are saying
                </Typography>

                <Grid>

                </Grid>
                <Grid container spacing={2}>
                    <Review></Review>
                    <Review></Review>
                    <Review></Review>
                    <Review></Review>
                    <Review></Review>
                </Grid>
            </Container>
        </div>
    );
};

export default Reviews;