import { Box, Container, Divider, Grid, Paper, Rating, Skeleton, Typography } from '@mui/material';
import React from 'react';
import { MyButton } from '../../Styles/Styles';
import product2 from '../../images/8-8-450x450.jpg';
import Product from './Product/Product';
import useProducts from '../../hooks/useProducts';
import { useLocation } from 'react-router-dom';

const Products = () => {

    const [products, setProducts, productLoading] = useProducts();



    const location = useLocation();
    let selectedProducts = [];
    if (location.pathname === '/' || location.pathname === '/home') {
        selectedProducts = products.slice(0, 8);
    } else {
        selectedProducts = products;
    }


    return (
        <Box className='py-20'>
            <Container>
                <Typography variant='h4' color='primary'>Amazing Watches</Typography>
                <Grid container spacing={4} className='pt-10'>

                    {productLoading ?
                        [...Array(4).keys()].map(key => (
                            <Grid key={key} item xs={12} sm={6} md={4} lg={3}>
                                <Paper elevation={3} className='bg-[#242424] text-white pb-2'>
                                    <Skeleton animation='wave' variant='rectangular' width='100%' height={265} />
                                    <Skeleton animation='wave' width='30%' sx={{ mx: 'auto', mt: 2 }} />
                                    <Skeleton animation='wave' width='80%' sx={{ mx: 'auto', mt: 1 }} />
                                    <Skeleton animation='wave' width='40%' sx={{ mx: 'auto', my: 1 }} />
                                    <Skeleton animation='wave' width='60%' sx={{ mx: 'auto', mb: 1 }} />
                                    <Skeleton animation='wave' width='100%' height='2px' sx={{ mx: 'auto' }} />
                                    <Skeleton animation='wave' width='60%' height='74px' sx={{ mx: 'auto' }} />
                                </Paper>
                            </Grid>
                        ))
                        :


                        selectedProducts.map(product => <Product key={product._id} product={product}></Product>)
                    }



                </Grid>
            </Container>
        </Box>
    );
};

export default Products;