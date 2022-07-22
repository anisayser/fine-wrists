import { Alert, Box, CircularProgress, Container, Divider, Grid, Rating, Snackbar, styled, Tab, Tabs, TextField, Typography } from '@mui/material';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import React, { useContext, useEffect, useState } from 'react';
import InfoHeader from '../../AllHeader/InfoHeader/InfoHeader';
import MenuHeader from '../../AllHeader/MenuHeader/MenuHeader';
import MiddleHeader from '../../AllHeader/MiddleHeader/MiddleHeader';
import Footer from '../../Footer/Footer';
import Slider from "react-slick";

import img from '../../../images/1-1-1200x1200 -.jpg';
import imgSm from '../../../images/1-1-450x450.jpg';
import img2 from '../../../images/8-8-450x450.jpg';
import './ProductDetails.css';
import InnerImageZoom from 'react-inner-image-zoom';
import { MyButton } from '../../../Styles/Styles';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebaseInit';
import { CartContext } from '../../../App';



const ProductDetails = () => {
    const { id } = useParams();
    const [user] = useAuthState(auth);
    const [cartLoading, setCartLoading] = useState(false);
    const navigate = useNavigate();

    const [selectedProduct, setSelectedProduct] = useState({});
    useEffect(() => {
        fetch(`https://pacific-sea-83230.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => setSelectedProduct(data))
    }, [])

    // SNACKBAR
    const [open, setOpen] = React.useState(false);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    // SNACKBAR



    const [cartValue, setCartValue] = useContext(CartContext);
    const [cartLoading2, setCartLoading2] = useState(false);


    const handleAddToCart = () => {
        setCartLoading2(true);
        if (!user?.email) {
            return navigate('/login', { replace: true })
        }


        const randomId = Math.abs(Math.random() * 1000000);
        // console.log(randomId);

        selectedProduct.email = user.email;
        selectedProduct.productId = randomId.toString();

        const newCart = [...cartValue, selectedProduct];
        // console.log('New Cart Bro', newCart);


        setCartValue(newCart);
        // console.log('the new cart value', newCart);


        // selectedProduct['email'] = user.email;

        // const cartManualId = selectedProduct._id;
        // delete selectedProduct['_id'];
        // console.log(selectedProduct);

        // const cartProduct = { ...selectedProduct };
        const cartProduct = { productId: randomId.toString(), email: user.email, cartProduct: selectedProduct };
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





    /*     const handleAddToCart = () => {
            setCartLoading(true);
            if (!user?.email) {
                return navigate('/login', { replace: true })
            }
    
            const cartProduct = { email: user.email, cartProduct: selectedProduct };
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
                    setCartLoading(false);
                    setOpen(true);
                })
        } */




    // MUI TAB CONTROLLER STARTS
    const [value, setValue] = useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    // MUI TAB CONTROLLER ENDS


    // SLICK SLIDER SETTINGS STARTS
    const settings = {
        customPaging: function () {
            return (
                <a>
                    <img src={selectedProduct.img} alt='' />
                </a>
            );
        },
        dots: true,
        arrows: false,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    // SLICK SLIDER SETTINGS ENDS


    //QUANTITY NUMBER INPUT STARTS
    const QtyTextField = styled(TextField)({
        '& .MuiFilledInput-root': {
            border: '1px solid #e2e2e1',
            overflow: 'hidden',
            borderRadius: 4,

        },

        '& input:valid + fieldset': {
            borderColor: 'primary',
            borderWidth: 2,
            color: '#2f2f2f'
        },
        '& input:invalid + fieldset': {
            borderColor: '#fff',
            borderWidth: 2,
            color: '#2f2f2f'
        },
    });
    //QUANTITY NUMBER INPUT ENDS



    return (
        <Box>
            <InfoHeader></InfoHeader>
            <MiddleHeader></MiddleHeader>
            <MenuHeader></MenuHeader>
            {/* HEADER ENDS */}

            <Box className='py-32'>
                <Container>
                    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success" color='primary' sx={{ width: '100%' }}>
                            Product Added to Cart!
                        </Alert>
                    </Snackbar>
                    <Grid container spacing={4}>

                        {/* PRODUCT IMAGE WITH ZOOM EFFECT -------------*/}
                        <Grid item xs={12} md={6}>
                            <Slider {...settings}>
                                <Box className='zoom-img'>
                                    <InnerImageZoom
                                        src={selectedProduct.img || ''}
                                        zoomSrc={selectedProduct.img || ''}
                                        zoomType="hover"
                                        zoomPreload={true}
                                        hideHint={true}
                                    />
                                </Box>
                                <Box>
                                    <InnerImageZoom
                                        src={selectedProduct.img || ''}
                                        zoomSrc={selectedProduct.img || ''}
                                        zoomType="hover"
                                        zoomPreload={true}
                                        hideHint={true}
                                    />
                                </Box>
                                <Box>
                                    <InnerImageZoom
                                        src={selectedProduct.img || ''}
                                        zoomSrc={selectedProduct.img || ''}
                                        zoomType="hover"
                                        zoomPreload={true}
                                        hideHint={true}
                                    />
                                </Box>
                                <Box>
                                    <InnerImageZoom
                                        src={selectedProduct.img || ''}
                                        zoomSrc={selectedProduct.img || ''}
                                        zoomType="hover"
                                        zoomPreload={true}
                                        hideHint={true}
                                    />
                                </Box>
                            </Slider>
                        </Grid>

                        {/* PRODUCT INFORMATION -------------- */}
                        <Grid item xs={12} md={6} lg={6}>
                            <Box className='text-left space-y-5' color='muted.main'>
                                <Typography variant='h4'>{selectedProduct.title}</Typography>
                                <Box className='space-y-5'>
                                    <Box className='flex space-x-5'>
                                        <Rating name="single-product-rating" size='small' value={parseFloat(selectedProduct?.rating) || 0} precision={0.5} readOnly />
                                        <Typography variant='subtitle2'>1 Reviews</Typography>
                                        <Typography variant='subtitle2'>Write a Review</Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant='subtitle1'>Brand : {selectedProduct.brand}</Typography>
                                        <Typography variant='subtitle1'>Category : {selectedProduct.category}</Typography>
                                        <Typography variant='subtitle1'>Availability : In Stock</Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant='h5' color='primary'> ${selectedProduct.price}</Typography>
                                    </Box>
                                </Box>

                                <Divider color='#2f2f2f' />

                                <Box className='flex space-x-3 items-center'>
                                    <Typography variant='h6' color='muted.main'>Qty : </Typography>
                                    <QtyTextField type='number' id="outlined-basic" label="Qty" defaultValue={1} variant="outlined" className='w-24' />
                                    <MyButton onClick={() => handleAddToCart(selectedProduct._id)}>{!cartLoading2 ? 'Add to Cart' : <CircularProgress size={20} />}</MyButton>
                                </Box>
                            </Box>
                        </Grid>

                        {/* PRODUCT DESCRIPTION TAB --------------*/}
                        <Grid item xs={12}>
                            <Box sx={{ width: '100%', bgcolor: '#212121' }} className='mt-36'>
                                <TabContext value={value}>
                                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                        <TabList onChange={handleChange} className='text-white' aria-label="lab API tabs example" centered>
                                            <Tab className='text-white' label="Description" value="1" />
                                            <Tab className='text-white' label="Aditional Information" value="2" />
                                            <Tab className='text-white' label="Reviews" value="3" />
                                        </TabList>
                                    </Box>
                                    <Box className='text-left' color='muted.main'>
                                        <TabPanel value="1">{selectedProduct.description}</TabPanel>
                                        <TabPanel value="2">Item Two</TabPanel>
                                        <TabPanel value="3">Item Three</TabPanel>
                                    </Box>
                                </TabContext>
                            </Box>
                        </Grid>

                    </Grid>
                </Container>
            </Box>

            {/* FOOTER STARTS */}
            <Footer />
        </Box>
    );
};

export default ProductDetails;