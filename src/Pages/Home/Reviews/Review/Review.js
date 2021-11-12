import { Grid } from '@mui/material';
import React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const Review = ({ reviews }) => {
    const { review, rating, reviewTitle, user } = reviews;
    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>

            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <img style={{ borderRadius: '50%', width: "3rem" }} alt='user' src='https://cdn-icons-png.flaticon.com/512/149/149071.png' />
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                       {user}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {reviewTitle}
                    </Typography>
                    <Typography style={{textAlign: 'left'}} variant="body2">
                        {review}
                    </Typography>
                    <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />

                </CardContent>
            </Card>
        </Grid>
    );
};

export default Review;