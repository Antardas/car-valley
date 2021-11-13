import { Alert, Button, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

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
        fetch('https://murmuring-crag-52755.herokuapp.com/product', {
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

                        setAddProductData(addProductData[key] = '');
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
    const alertStyle = {
        position: 'absolute',
        width: '320px',
        margin: '0 auto',
        right: 0,
        left: 0,
        marginTop: '2rem'
    }

    return (
        <Box>
            {/* show alert if product added succesfully */}
            {
                success ? <Alert style={alertStyle} severity="success">This is a success alert — check it out!</Alert> : null
            }
            {
                error ? <Alert style={alertStyle} severity="error">This is a success alert — check it out!</Alert> : null
            }
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <TextField defaultValue={addProductData.name} style={{ width: '80%', marginTop: '1rem' }} id="title" onBlur={handleOnBlur} name="title" label="Product Title" placeholder="Product Title" variant="outlined" />
                        <TextField defaultValue={addProductData.description} style={{ width: '80%', marginTop: '1rem' }} id="desctiption" onBlur={handleOnBlur} name='description' label="Product Description" placeholder="Product Description" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField defaultValue={addProductData.price} style={{ width: '80%', marginTop: '1rem' }} id="desctiption" onBlur={handleOnBlur} name='price' label="Price" placeholder="Price" variant="outlined" />
                        <TextField defaultValue={addProductData.img} style={{ width: '80%', marginTop: '1rem' }} id="imgUrl" onBlur={handleOnBlur} type='url' name='img' label="Img Url" placeholder="Img Url" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField defaultValue={addProductData.model} style={{ width: '80%', marginTop: '1rem' }} id="model" name="model" onBlur={handleOnBlur} label="Product Model" placeholder="Model" variant="outlined" />

                    </Grid>
                </Grid>


                <br />
                <Button variant="outlined" type="submit">Submit</Button>
            </form>

        </Box>
    );
};

export default AddProduct;