import { Box } from '@mui/system';
import React from 'react';
import Grid from '@mui/material/Grid';
const Login = () => {
    const handleSubmit = () => {

    }
    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    
                </Grid>
                <Grid item xs={6}>
                    <Box>
                        <form onsubmit={handleSubmit}>

                        </form>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Login;