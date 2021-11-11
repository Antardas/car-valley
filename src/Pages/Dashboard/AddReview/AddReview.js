import { Button, Container, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';


const AddReview = () => {
    const [value, setValue] = useState(2.5);
    const [reviewData, setReviewData] = useState({});
    const handleOnBlur = (e) => {
        setReviewData({ ...reviewData, [e.target.name]: e.target.value, rating: value });
        console.log(reviewData);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <Typography variant='h3' component='h3'>
                    Add Your Review
                </Typography>
                <TextField name='heading' onBlur={handleOnBlur} style={{ width: '80%', marginTop: '1rem' }} id="outlined-basic" label="heading" variant="outlined" />
                <br />
                <TextField name='description' onBlur={handleOnBlur} style={{ width: '80%', marginTop: '1rem', height: '5rem' }} id="outlined-basic" type='text' label="description" variant="outlined" />
                <br />

                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    precision={0.5}
                />
                <br />
                <Button type='submit' variant='contained' color='primary' style={{ marginTop: '1rem' }}>Submit Your Review</Button>
</form>

        </Container>
    );
};

export default AddReview;