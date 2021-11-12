import { Alert, Button, Container, TextField } from '@mui/material';
import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import useAuth from '../../../Hooks/useAuth';


const AddReview = () => {
    const { user } = useAuth();
    const [value, setValue] = useState(2.5);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [reviewData, setReviewData] = useState({
        user: user.displayName
    });

    // vanish alert after 3 seconds
    const vanishAlert = () => {
        setTimeout(() => {
            setSuccess(false);
            setError(false);
        }, 3000);
    }
    const handleOnBlur = (e) => {
        setReviewData({ ...reviewData, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        // add review to database
        const newReview = { ...reviewData, rating: value };
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess(true);
                }else{
                    setError(true);
                }
                vanishAlert();
            })
        e.preventDefault();
    }
    // alert style
    const alertStyle = {
        position: 'absolute',
        width: '320px',
        margin: '0 auto',
        right: 0,
        left: 0,
        marginTop: '2rem'
    }

    return (
        <Container>
            {/* show alert if review added succesfully */}
            {
                success ? <Alert style={alertStyle} severity="success">This is a success alert — check it out!</Alert> : null
            }
            {
                error ? <Alert style={alertStyle} severity="error">This is a success alert — check it out!</Alert> : null
            }
            <form onSubmit={handleSubmit}>
                <Typography variant='h3' component='h3'>
                    Add Your Review
                </Typography>
                <TextField required name='reviewTitle' onBlur={handleOnBlur} style={{ width: '80%', marginTop: '1rem' }} id="outlined-basic" label="Review Title" variant="outlined" />
                <br />
                <TextField required name='review' onBlur={handleOnBlur} style={{ width: '80%', marginTop: '1rem', height: '5rem' }} id="outlined-basic" type='text' label="Write Review" variant="outlined" />
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