import { Alert, Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const MakeAdmin = () => {

    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const handleOnBlur = (e) => {
        setEmail(e.target.value);
        console.log(email);
    }
    const handleSubmit = (e) => {
        console.log({ email });
        const user = { email };

        fetch('https://murmuring-crag-52755.herokuapp.com/users/makeAdmin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
                    vanishAlert();
                } else {
                    setSuccess(false);
                    vanishAlert();
                }
            }).catch(err => console.log(err))
        e.preventDefault();
    }
    const vanishAlert = () => {
        setTimeout(() => {
            setSuccess(false);
        }, 3000);
    }


    return (
        <div>
            <Box style={{ position: 'absolute', width: '320px', margin: '0 auto', right: 0, left: 0, marginTop: '1rem', zIndex: '1' }}>
                {
                    success && <Alert severity="success">Add Admin Successfully</Alert>

                }
            </Box>
            <form style={{ zIndex: '-1', marginTop: '5rem' }} onSubmit={handleSubmit}>
                <TextField style={{ width: '500px' }} onBlur={handleOnBlur} required name='email' type='email' id="outlined-basic" label="email" variant="outlined" />
                <br />
                <Button sx={{ mt: 2 }} variant="contained" color="primary" type='submit'>Add</Button>
            </form>
        </div>
    );
};

export default MakeAdmin;