import { Box } from '@mui/system';
import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { Button, CircularProgress, Container, TextField, Typography } from '@mui/material';
import Alert from '@mui/material/Alert';
import { blue, grey, red } from '@mui/material/colors';
import { Link, useParams } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Navigation from '../Shared/Navigation/Navigation';
const Purchase = () => {
    const { user, isLoading } = useAuth();
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const { title, price, model, img, description, _id } = product;
    const productId = _id;
    const productName = title;
    const initialValue = {
        name: user.displayName,
        email: user.email,
        house: "",
        phone: "",
        city: "",
    }
    const [purchaseData, setPurchaseData] = useState(initialValue);
    const [success, setSuccess] = useState(true);
    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
         setPurchaseData({ ...purchaseData, productId, productName, price, [field]: value, status: "pending" });
/*         newPurchaseData[field] = value;
        setPurchaseData(newPurchaseData);
 */        console.log(purchaseData);
    }
    const handleSubmit = (e) => {
        const newData = { ...purchaseData };
        console.log(newData);
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newData)
        }).then(res => res.json())
            .then(data => console.log(data));

        e.preventDefault();
    }

    // get single product via id
    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [id]);


    if (isLoading) { return <CircularProgress /> }

    return (
        <Box >
            <Navigation/>
            <Grid container spacing={2}>

                {/* // purchase page Product detail */}

                <Grid item xs={12} md={6}>
                    {_id ? (<Container>
                        <Box style={{ display: 'block', marginTop: '1rem' }}>
                            <img style={{ width: 'auto', borderRadius: 10, height: '10rem' }} src={img} alt="" />
                        </Box>
                        <Box>
                            <Typography variant="h5" style={{ marginTop: '0.3rem' }}>
                                {title}
                            </Typography>
                            <Typography style={{ textAlign: 'justify', color: grey[600] }} variant="body2" component='p'>
                                {description}
                            </Typography>
                            <Typography style={{ textAlign: 'justify', color: grey[600] }} variant="h6" component='p'>
                                Model : <span style={{ color: red[600] }}>{model}</span>
                            </Typography>
                            <h3 style={{ color: red[400], textAlign: 'right', border: `1px solid ${red[400]}`, display: 'inline-block', padding: '0.3rem 3rem', borderRadius: '5rem', background: red[50] }} >BDT: {price}</h3>
                        </Box>
                    </Container>) : <CircularProgress />}
                </Grid>

                {/* // purchase page form */}

                <Grid item xs={12} md={6}>
                    <Box style={{ display: 'block', minHeight: '100vh', backgroundColor: grey[900], padding: '1rem 3rem' }}>
                        <Typography color="white" sx={{ py: '2rem' }} style={{ textAlign: 'left', }} variant="h3" component='h3'>
                            Welcome
                        </Typography>

                        {/* form here */}

                        <form onSubmit={handleSubmit} sx={{ mt: '5rem', display: 'block' }}>
                            <TextField
                                sx={{ width: '80%', my: '2rem' }}
                                id="name"
                                label="Your Name"
                                variant="standard"
                                type="text"
                                name="name"
                                defaultValue={user?.displayName}
                                required
                                onBlur={handleOnBlur}
                                className='textfield'
                                InputProps={{ className: 'textfield' }}
                                InputLabelProps={{ className: 'textfield__label' }}
                            />
                            <br />

                            <TextField
                                sx={{ width: '80%' }}
                                id="email"
                                label="Your Email"
                                variant="standard"
                                type="email"
                                name="email"
                                defaultValue={user?.email}
                                required
                                onBlur={handleOnBlur}
                                className='textfield'
                                InputProps={{ className: 'textfield' }}
                                InputLabelProps={{ className: 'textfield__label' }}
                            />
                            <br />
                            <TextField
                                sx={{ width: '80%' }}
                                id="phone"
                                label="Your Phone"
                                variant="standard"
                                type="tel"
                                name="phone"
                                required
                                onBlur={handleOnBlur}
                                className='textfield'
                                InputProps={{ className: 'textfield' }}
                                InputLabelProps={{ className: 'textfield__label' }}
                            />
                            <br />
                            <TextField
                                sx={{ width: '80%', mt: '2rem' }}
                                id="houseno"
                                label="Your House / Building no"
                                variant="standard"
                                type="text"
                                name="house"
                                required
                                onBlur={handleOnBlur}
                                className='textfield'
                                InputProps={{ className: 'textfield' }}
                                InputLabelProps={{ className: 'textfield__label' }}
                            />
                            <br />
                            <TextField
                                sx={{ width: '80%', my: '2rem' }}
                                id="passwore2"
                                label="City"
                                variant="standard"
                                type="text"
                                name="city"
                                required
                                onBlur={handleOnBlur}
                                className='textfield'
                                InputProps={{ className: 'textfield' }}
                                InputLabelProps={{ className: 'textfield__label' }}
                            />
                            <br />
                            <Button sx={{ my: '2rem' }} type='submit' variant="contained">Purchase Now</Button>
                        </form>
                    </Box>
                </Grid>
            </Grid>

        </Box>
    );
};

export default Purchase;