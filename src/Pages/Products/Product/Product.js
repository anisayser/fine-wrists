import { Alert, Box, CircularProgress, Divider, Grid, Paper, Rating, Snackbar, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import { MyButton } from '../../../Styles/Styles';
import product from '../../../images/1-1-600x600.jpg';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebaseInit';
import { Link, useNavigate } from 'react-router-dom';
import useCartOfUser from '../../../hooks/useCartOfUser';
import { CartContext } from '../../../App';


const Product = ({ product }) => {
    const [cartValue, setCartValue] = useContext(CartContext);

    const [user] = useAuthState(auth);
    const [userCart, setUserCart] = useCartOfUser();
    const [cartLoading2, setCartLoading2] = useState(false);

    const [open, setOpen] = useState(false);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const { title, brand, price, rating, img, _id } = product;
    const navigate = useNavigate();


    const handleAddToCart = () => {
        setCartLoading2(true);
        if (!user?.email) {
            return navigate('/login', { replace: true })
        }


        const randomId = Math.abs(Math.random() * 1000000);
        // console.log(randomId);

        product.email = user.email;
        product.productId = randomId.toString();

        const newCart = [...cartValue, product];
        // console.log('New Cart Bro', newCart);


        setCartValue(newCart);
        // console.log('the new cart value', newCart);


        // product['email'] = user.email;

        // const cartManualId = product._id;
        // delete product['_id'];
        // console.log(product);

        // const cartProduct = { ...product };
        const cartProduct = { productId: randomId.toString(), email: user.email, cartProduct: product };
        fetch('https://pacific-sea-83230.herokuapp.com/addtocart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cartProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {

                }
            })
            .finally(() => {
                setCartLoading2(false);
                setOpen(true);
            })

    }



    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" color='primary' sx={{ width: '100%' }}>
                    Product Added to Cart!
                </Alert>
            </Snackbar>
            <Paper elevation={3} className='bg-[#242424] text-white pb-3'>
                <Box>
                    <img src={img} className='w-full' alt="" />
                </Box>
                <Box className='space-y-3'>
                    <Typography variant='subtitle2' color='muted' mt={2}>{brand}</Typography>
                    <Link to={`/product/${_id}`}><Typography variant='h5'>{title}</Typography></Link>
                    <Typography variant='h5' className='font-bold' color='primary'>${price}</Typography>
                    <Rating name="product-rating" size='small' value={parseFloat(rating)} precision={0.5} readOnly />
                    <Divider color='#2f2f2f' />
                    <MyButton onClick={() => handleAddToCart()}>{!cartLoading2 ? 'Add to Cart' : <CircularProgress size={20} />}</MyButton>
                </Box>
            </Paper>
        </Grid>
    );
};

export default Product;