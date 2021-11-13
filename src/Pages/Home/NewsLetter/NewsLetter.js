import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { grey, blue } from '@mui/material/colors';

const NewsLetter = () => {
    return (
        <Box sx={{ py: 5, bgcolor: blue[50] }}>
            <Typography color={grey[400]} variant='h6' component='h6'>
                Suscribe to our
            </Typography>
            <Typography color={grey[800]} variant='h6' component='h6'>
                Newsletter
            </Typography>
            <Typography color={grey[400]} variant='h6' component='h6'>
                To Update with all the latest trends and products
            </Typography>

            <TextField sx={{mt: 5, width: '20rem'}} id="outlined-basic" type='email' label="Your Email" variant="outlined" />
            <br />
            <Button sx={{mt: 5}} variant='contained'>Join</Button>

        </Box>
    );
};

export default NewsLetter;