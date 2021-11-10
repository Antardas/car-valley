import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';

const Service = (props) => {
    console.log(props);
    return (
        <Box style={{ display: 'flex', justifyContent: 'center' }}>
            <Card sx={{ maxWidth: 305 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://cdn.al-ain.com/images/2019/5/10/147-034017-ferrari-hybrid-supercar-confirmed_700x400.png"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        title Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Description Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" variant='contained' sx={{ mx: 'auto' }}>Buy Now</Button>
                </CardActions>
            </Card>
</Box>
    );
};

export default Service;