import { Box, Container, Divider, Grid, Icon, Rating, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import product from '../../images/8-8-450x450.jpg';
import payment from '../../images/payment.png';

const Footer = () => {
    return (
        <Box className='pt-20 border-t border-[#2f2f2f]'>
            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={4} className='text-left'>
                        <Typography variant='h5' className='text-white pb-6'>About Fine Wrists</Typography>
                        <Box className='space-y-2'>
                            <Typography variant='subtitle1' color='muted.main'>Address: 123 Main Street, Anytown, CA 12345 - USA.</Typography>
                            <Typography variant='subtitle1' color='muted.main'>Phone: (012) 800 456 789</Typography>
                            <Typography variant='subtitle1' color='muted.main'>Fax: (012) 800 456 789</Typography>
                            <Typography variant='subtitle1' color='muted.main'>Email: Contact@finewrists.com</Typography>
                            <Box className='flex space-x-3'>
                                <Box className='w-8 h-8 bg-[#2f2f2f] rounded-full text-white flex items-center justify-center'>
                                    <Icon className="fa-brands fa-facebook-f" style={{ fontSize: '16px' }}></Icon>
                                </Box>

                                <Box className='w-8 h-8 bg-[#2f2f2f] rounded-full text-white flex items-center justify-center'>
                                    <Icon className="fa-brands fa-twitter" style={{ fontSize: '16px' }}></Icon>
                                </Box>
                                <Box className='w-8 h-8 bg-[#2f2f2f] rounded-full text-white flex items-center justify-center'>
                                    <Icon className="fa-brands fa-youtube" style={{ fontSize: '16px' }}></Icon>
                                </Box>
                                <Box className='w-8 h-8 bg-[#2f2f2f] rounded-full text-white flex items-center justify-center'>
                                    <Icon className="fa-brands fa-instagram" style={{ fontSize: '16px' }}></Icon>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={2} className='text-left'>
                        <Typography variant='h5' className='text-white pb-6'>Information</Typography>
                        <Box className='space-y-2'>
                            <Typography variant='subtitle1' color='muted.main'>About Us</Typography>
                            <Typography variant='subtitle1' color='muted.main'>Delivery Information</Typography>
                            <Typography variant='subtitle1' color='muted.main'>Privacy Policy</Typography>
                            <Typography variant='subtitle1' color='muted.main'>Terms & Conditions</Typography>
                            <Typography variant='subtitle1' color='muted.main'>Gift Certificates</Typography>
                            <Typography variant='subtitle1' color='muted.main'>Contact Us</Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={2} className='text-left'>
                        <Typography variant='h5' className='text-white pb-6'>Extras</Typography>
                        <Box className='space-y-2'>
                            <Typography variant='subtitle1' color='muted.main'>Brands</Typography>
                            <Typography variant='subtitle1' color='muted.main'>Gift Certificates</Typography>
                            <Typography variant='subtitle1' color='muted.main'>Affiliate</Typography>
                            <Typography variant='subtitle1' color='muted.main'>Specials</Typography>
                            <Typography variant='subtitle1' color='muted.main'>My Account</Typography>
                            <Typography variant='subtitle1' color='muted.main'>Returns</Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} className='text-left'>
                        <Typography variant='h5' className='text-white pb-6'>Custom Products</Typography>
                        <Box className='space-y-5 text-white'>
                            <Box className='flex space-x-4'>
                                <img className='w-24' src={product} alt="" />
                                <Box>
                                    <Rating name="product-rating" size='small' value={3} readOnly />
                                    <Typography variant='h6'>Watch Name</Typography>
                                    <Typography variant='h5' className='font-bold' color='primary'>$550.00</Typography>
                                </Box>
                            </Box>
                            <Box className='flex space-x-4'>
                                <img className='w-24' src={product} alt="" />
                                <Box>
                                    <Rating name="product-rating" size='small' value={3} readOnly />
                                    <Typography variant='h6'>Watch Name</Typography>
                                    <Typography variant='h5' className='font-bold' color='primary'>$550.00</Typography>
                                </Box>
                            </Box>
                        </Box>

                    </Grid>

                    <Grid item xs={12}>
                        <Box className='flex flex-col sm:flex-row justify-start sm:justify-center text-lg space-x-8 border-t border-b border-[#2f2f2f] py-3' color='muted.main'>
                            <Link to='#'>Home</Link>
                            <Link to='#'>Online Store</Link>
                            <Link to='#'>Promotion</Link>
                            <Link to='#'>Privacy Policy</Link>
                            <Link to='#'>Terms of Use</Link>
                            <Link to='#'>SiteMap</Link>
                            <Link to='#'>Support</Link>
                            <Link to='#'>Contacts</Link>
                        </Box>
                    </Grid>

                    <Grid item xs={12}>
                        <Box className='pb-10'>
                            <Box color='muted.main' className='flex items-center justify-center space-x-3'>
                                <Icon className="fa-solid fa-copyright"></Icon>
                                <Typography>All rights reserved | Fine Wrists || yooooo</Typography>
                            </Box>
                            <img className='mx-auto mt-5' src={payment} alt="" />
                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;
