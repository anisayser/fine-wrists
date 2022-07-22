import { Avatar, Backdrop, Badge, Box, Button, ButtonGroup, CircularProgress, ClickAwayListener, Container, Grid, Icon, IconButton, ListItemIcon, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import MailIcon from '@mui/icons-material/Mail';
import Logout from '@mui/icons-material/Logout';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React, { useContext, useEffect, useState } from 'react';
import iconPhone from '../../../images/icon_phone.png';
import logo from '../../../images/logo (1).png';
import cartImg from '../../../images/8-8-450x450.jpg';
import useCartOfUser from '../../../hooks/useCartOfUser';
import { MyButton } from '../../../Styles/Styles';
import CartCalculation from '../../Cart/CartCalculation/CartCalculation';
import { Link } from 'react-router-dom';
import CartDetails from '../../Cart/CartDetails/CartDetails';
import { CartContext, ProductContext } from '../../../App';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebaseInit';
import useProducts from '../../../hooks/useProducts';


const MiddleHeader = () => {
    const [user] = useAuthState(auth);

    const [userCart, setUserCart] = useCartOfUser();
    const [cartValue, setCartValue] = useContext(CartContext);


    // console.log(userCart.length, 'cart length');

    /* let setLocalCartValue = [];
    userCart.map(uc => setLocalCartValue.push(uc.cartProduct));
    console.log(userCart.length, setLocalCartValue);
    // setCartValue(setLocalCartValue); */



    // const [cartValue, setCartValue] = useContext(CartContext);
    // const [products, setProducts] = useContext(ProductContext);
    // const [products, setProducts] = useState([]);


    // useEffect(() => {
    //     console.log('product effect')
    //     // setTimeout(() => {
    //     fetch('http://localhost:5000/products')
    //         .then(res => res.json())
    //         .then(data => setProducts(data))

    //     console.log('product effect2222')
    //     // }, 1800);

    // }, [])



    //PUSHING THE VALUE FROM DB TO THE CART WHEN PAGE RELOAD
    useEffect(() => {
        let setLocalCartValue = [];
        userCart.map(uc => setLocalCartValue.push(uc.cartProduct));
        // console.log(setLocalCartValue, 'local cart value');
        setCartValue(setLocalCartValue)
    }, [setCartValue, userCart]);



    // console.log(cartValue, 'This context cart VAlue')



    //00593967203768




    // console.log(cartValue);
    // const [deleteLoading, setDeleteLoading] = useState(false);
    // const [userCart, setUserCart] = useCartOfUser();

    /*     const [userCart, setUserCart] = useState([]);
        useEffect(() => {
            console.log('This is useEffect')
            // setCartLoading(true);
            const uri = `http://localhost:5000/usercart/${user?.email}`;
            fetch(uri)
                .then(res => res.json())
                .then(data => { setUserCart(data); console.log(data, 'the data') })
                .finally(() => {
    
                    setTimeout(() => {
    
                        console.log(userCart, 'user CArt')
                    }, 2000);
    
                })
    
        }, [products]) */

    // console.log(userCart, 'useEffect user cart');






    //CARTS FROM DB
    // let setLocalCartValue = [];
    // for (const cartPro of userCart) {
    //     setLocalCartValue.push(cartPro.cartProduct)
    //     // setCartValue(setLocalCartValue);
    // }
    // const setNLocalV = [...setLocalCartValue];
    // // setCartValue(setNLocalV);
    // console.log(setNLocalV)





    //Click away dropdown controllers
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen((prev) => !prev);
    };

    const handleClickAway = () => {
        setOpen(false);
    };
    //Click away dropdown controllers



    // const handleCartDelete = id => {
    //     setDeleteLoading(true);
    //     fetch(`http://localhost:5000/usercart/${id}`, {
    //         method: 'DELETE',
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             // console.log(data);
    //             if (data.deletedCount > 0) {

    //                 setDeleteLoading(false);
    //             }
    //         })
    //         .finally(() => {
    //         })
    // }



    const styles = {
        position: 'absolute',
        top: 32,
        right: 0,
        // left: 0,
        zIndex: 9999,
        // border: '1px solid',
        p: 1,
        bgcolor: '#2f2f2f',
        width: '380px',
    };


    return (
        <Box className='py-4 border-b border-[#2f2f2f]'>
            <Container>
                <Grid container spacing={2}>

                    <Grid item xs={12} sm={4}>
                        <Box className='flex space-x-3 items-center'>
                            <Box>
                                <img src={iconPhone} alt="" />
                            </Box>
                            <Box className='text-left'>
                                <Typography variant='subtitle' color='primary'>Call us <br /> Free Support: (012) 800 456 789</Typography>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        {/* SITE LOGO */}
                        <Box>
                            <img src={logo} className='mx-auto' alt="" />
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={4} className='flex items-center justify-end'>

                        <ClickAwayListener onClickAway={handleClickAway}>
                            <Box sx={{ position: 'relative' }}>
                                <IconButton
                                    onClick={handleClick}
                                    size="small"

                                    aria-controls={open ? 'account-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                >
                                    {/* <Badge badgeContent={userCart?.length} color="primary">
                                        <ShoppingCartIcon className='text-white' />
                                    </Badge> */}
                                    <Badge badgeContent={cartValue?.length} color="primary">
                                        <ShoppingCartIcon className='text-white' />
                                    </Badge>
                                </IconButton>

                                {open ? (
                                    <Box sx={styles} className='space-y-2'>
                                        <Box className='max-h-60 overflow-y-scroll space-y-2'>
                                            {
                                                cartValue?.map(cart => <CartDetails key={cart?.productId} cart={cart} userCart={userCart} setUserCart={setUserCart}></CartDetails>)
                                            }
                                        </Box>
                                        {/* <Box>
                                            <Box className='flex justify-between border-b border-[#242424]' color='muted.main'>
                                                <Typography variant='subtitle1' className='text-md'>Sub Total : </Typography>
                                                <Typography variant='subtitle1' className='text-md' color='primary'>$5465</Typography>
                                            </Box>
                                            <Box className='flex justify-between border-b border-[#242424]' color='muted.main'>
                                                <Typography variant='subtitle1' className='text-md'>Vat (10%) : </Typography>
                                                <Typography variant='subtitle1' className='text-md' color='primary'>$100</Typography>
                                            </Box>
                                            <Box className='flex justify-between border-b border-[#242424]' color='muted.main'>
                                                <Typography variant='subtitle1' className='text-md'>Total : </Typography>
                                                <Typography variant='subtitle1' className='text-md' color='primary'>$5565</Typography>
                                            </Box>
                                        </Box> */}

                                        <CartCalculation cart={cartValue} userCart={userCart}></CartCalculation>

                                        <Box className='flex flex-col space-y-2'>
                                            <Link to='/viewcart'>
                                                <MyButton>View Cart</MyButton>
                                            </Link>
                                            <MyButton>Checkout</MyButton>
                                        </Box>

                                    </Box>
                                ) : null}
                            </Box>
                        </ClickAwayListener>

                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
};

export default MiddleHeader;