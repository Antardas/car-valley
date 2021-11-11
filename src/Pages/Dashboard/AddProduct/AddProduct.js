import { Grid3x3Outlined } from '@mui/icons-material';
import { Button, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const AddProduct = () => {
    const [singnUPData, setSignUpData] = useState({});
    const [success, setSuccess] = useState(true);
    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...singnUPData };
        newLoginData[field] = value;
        setSignUpData(newLoginData);
    }
    const handleSubmit = (e) => {
        console.log(singnUPData)

        console.log('calling handleSubmit')
        e.preventDefault();
    }
    // Add Product
    

    return (
        <Box>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid xs={12} md={6}>
                        <TextField style={{ width: '80%', marginTop: '1rem' }} id="title" onBlur={handleOnBlur} name="title" label="Product Title" placeholder="Product Title" variant="outlined" />
                        <TextField style={{ width: '80%', marginTop: '1rem' }} id="desctiption" onBlur={handleOnBlur} name='description' label="Product Description" Placeholder="Product Description" variant="outlined" />
                    </Grid>
                    <Grid xs={12} md={6}>
                        <TextField style={{ width: '80%', marginTop: '1rem' }} id="desctiption" onBlur={handleOnBlur} name='price' label="Price" Placeholder="Price" variant="outlined" />
                        <TextField style={{ width: '80%', marginTop: '1rem' }} id="imgUrl" onBlur={handleOnBlur} type='url' name='img' label="Img Url" placeholder="Img Url" variant="outlined" />
                    </Grid>
                    <Grid xs={12} md={6}>
                <TextField style={{ width: '80%', marginTop: '1rem' }} id="model" onBlur={handleOnBlur} label="Product Model" Placeholder="Model" variant="outlined" />

                    </Grid>
                </Grid>


                <br />
                <Button variant="outlined" type="submit">Submit</Button>
            </form>

        </Box>
    );
};

export default AddProduct;