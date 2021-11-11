import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Service = ({ product }) => {
    console.log(product);
    const { img, title, description, _id } = product;
    return (
        <Grid item xs={12} sx={{ mx: 'auto' }} sm={6} md={4} lg={3}>
        <Box style={{ display: 'flex', justifyContent: 'center' }}>
            <Card sx={{ maxWidth: 305 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description.split(' ').slice(0, 10).join(' ') + '...' }
                    </Typography>
                </CardContent>
                <CardActions>
                        <Link style={{display: 'inline-block', margin: '0 auto'}} to={`/purchase/${_id}`}><Button size="small" variant='contained' sx={{ mx: 'auto' }}>Buy Now</Button></Link>
                </CardActions>
            </Card>
            </Box>
        </Grid>
    );
};

export default Service;