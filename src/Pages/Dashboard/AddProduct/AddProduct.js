import { Alert, Button, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const AddProduct = () => {
    
    const [addProductData, setAddProductData] = useState({});
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...addProductData };
        newLoginData[field] = value;
        setAddProductData(newLoginData);
    }
    // vanish alert after 3 seconds
    const vanishAlert = () => {
        setTimeout(() => {
            setSuccess(false);
            setError(false);
        }, 3000);
    }

    const handleSubmit = (e) => {

        // Add Product
        fetch('http://localhost:5000/product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addProductData)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    vanishAlert()
                    // loop in object to get all keys
                    for (let key in addProductData) {
                        addProductData[key] = '';
                    }
                    setSuccess(true);
                } else {
                    vanishAlert();
                    setError(true);
                }
            })

        console.log('calling handleSubmit')
        e.preventDefault();
    }

    return (
        <Box>
            {
                success ? <Alert sx={{mb: '2rem'}} severity="success">This is a success alert — check it out!</Alert> : null
            }
            {
                error ? <Alert sx={{mb: '2rem'}} severity="error">This is a success alert — check it out!</Alert> : null
            }
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <TextField style={{ width: '80%', marginTop: '1rem' }} id="title" onBlur={handleOnBlur} name="title" label="Product Title" placeholder="Product Title" variant="outlined" />
                        <TextField style={{ width: '80%', marginTop: '1rem' }} id="desctiption" onBlur={handleOnBlur} name='description' label="Product Description" placeholder="Product Description" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField style={{ width: '80%', marginTop: '1rem' }} id="desctiption" onBlur={handleOnBlur} name='price' label="Price" placeholder="Price" variant="outlined" />
                        <TextField style={{ width: '80%', marginTop: '1rem' }} id="imgUrl" onBlur={handleOnBlur} type='url' name='img' label="Img Url" placeholder="Img Url" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                <TextField style={{ width: '80%', marginTop: '1rem' }} id="model" name="model" onBlur={handleOnBlur} label="Product Model" placeholder="Model" variant="outlined" />

                    </Grid>
                </Grid>


                <br />
                <Button variant="outlined" type="submit">Submit</Button>
            </form>

        </Box>
    );
};

export default AddProduct;