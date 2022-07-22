import { Box, Container, Grid, Icon, Typography } from '@mui/material';
import React from 'react';

import Slider from "react-slick";

import slider1 from '../../../images/slider1-mirora1-1920x634.jpg';
import slider2 from '../../../images/slider2-mirora1-1920x634.jpg';
import { MyButton } from '../../../Styles/Styles';
import { Link } from 'react-router-dom';

const Banner = () => {



    //SLIDER CONTROLLERS
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className='absolute top-[47%] right-0 z-50 text-white'
                style={{ ...style, display: "block" }}
                onClick={onClick}
            >
                <Icon className="fa-solid fa-angle-right text-base bg-[#242424] hover:bg-[#A8741A] mr-10 hover:mr-5 transition-all ease-in cursor-pointer w-8 h-8 md:w-16 md:h-16 text-center flex items-center justify-center rounded-full"></Icon>
            </div>
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className='absolute top-[47%] z-50 text-white'
                style={{ ...style, display: "block" }}
                onClick={onClick}
            >
                <Icon className="fa-solid fa-angle-left text-base bg-[#242424] hover:bg-[#A8741A] ml-10 hover:ml-5 transition-all ease-in cursor-pointer w-8 h-8 md:w-16 md:h-16 text-center flex items-center justify-center rounded-full"></Icon>

            </div>
        );
    }
    const settings = {
        // dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        cssEase: "linear"
    };
    //SLIDER CONTROLLERS


    return (
        <Box>

            <Slider {...settings}>


                <Box className='relative '>
                    <Box className='absolute text-white w-full text-left' pt={{ md: 2, lg: 5, xl: 10 }}>
                        <Container>
                            <Grid container spaceing={2}>
                                <Grid item xs={12} sm={6}>
                                    <Box className=''>
                                        <Typography variant='subtitle1' color='primary'>Exclusive offer -20% off this week</Typography>
                                        <Typography variant='h2' fontSize={{ xs: '20px', sm: '30px', md: '40px', lg: '50px', xl: '70px' }} my={{ md: 2, sm: 2, xs: 1 }}>H-Volt Classico</Typography>
                                        <Typography variant='subtitle1'>H-Vault Watches Are A Lot Like Classic American Muscle Cars - Expect For The American Part That Is. </Typography>
                                        <Box className='flex space-x-5 items-center '>
                                            <Typography variant='subtitle1'>Starting At</Typography>
                                            <Typography variant='h4' color='primary' className='font-bold'>$1.499.00</Typography>
                                        </Box>

                                        <Link to='/shop'><MyButton className='px-8 py-3 bg-transparent hover:bg-[#A8741A] mt-5'>Shop Now</MyButton></Link>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Container>
                    </Box>
                    <Box sx={{ height: { xs: '300px', sm: '300px', md: '0' } }}>
                        <img src={slider1} style={{ height: '100%' }} alt="" />
                    </Box>
                </Box>
                <Box className='relative '>
                    <Box className='absolute text-white w-full text-left' pt={{ md: 2, lg: 5, xl: 10 }}>
                        <Container>
                            <Grid container spaceing={2}>
                                <Grid item xs={12} sm={6}>
                                    <Box className=''>
                                        <Typography variant='subtitle1' color='primary'>Exclusive offer -20% off this week</Typography>
                                        <Typography variant='h2' fontSize={{ xs: '20px', sm: '30px', md: '40px', lg: '50px', xl: '70px' }} my={{ md: 2, sm: 2, xs: 1 }}>H-Volt Classico</Typography>
                                        <Typography variant='subtitle1'>H-Vault Watches Are A Lot Like Classic American Muscle Cars - Expect For The American Part That Is. </Typography>
                                        <Box className='flex space-x-5 items-center '>
                                            <Typography variant='subtitle1'>Starting At</Typography>
                                            <Typography variant='h4' color='primary' className='font-bold'>$1.499.00</Typography>
                                        </Box>

                                        <Link to='/shop'><MyButton className='px-8 py-3 bg-transparent hover:bg-[#A8741A] mt-5'>Shop Now</MyButton></Link>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Container>
                    </Box>
                    <Box sx={{ height: { xs: '300px', sm: '300px', md: '0' } }}>
                        <img src={slider1} style={{ height: '100%' }} alt="" />
                    </Box>
                </Box>
                <Box className='relative '>
                    <Box className='absolute text-white w-full text-left' pt={{ md: 2, lg: 5, xl: 10 }}>
                        <Container>
                            <Grid container spaceing={2}>
                                <Grid item xs={12} sm={6}>
                                    <Box className=''>
                                        <Typography variant='subtitle1' color='primary'>Exclusive offer -20% off this week</Typography>
                                        <Typography variant='h2' fontSize={{ xs: '20px', sm: '30px', md: '40px', lg: '50px', xl: '70px' }} my={{ md: 2, sm: 2, xs: 1 }}>H-Volt Classico</Typography>
                                        <Typography variant='subtitle1'>H-Vault Watches Are A Lot Like Classic American Muscle Cars - Expect For The American Part That Is. </Typography>
                                        <Box className='flex space-x-5 items-center '>
                                            <Typography variant='subtitle1'>Starting At</Typography>
                                            <Typography variant='h4' color='primary' className='font-bold'>$1.499.00</Typography>
                                        </Box>

                                        <Link to='/shop'><MyButton className='px-8 py-3 bg-transparent hover:bg-[#A8741A] mt-5'>Shop Now</MyButton></Link>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Container>
                    </Box>
                    <Box sx={{ height: { xs: '300px', sm: '300px', md: '0' } }}>
                        <img src={slider2} style={{ height: '100%' }} alt="" />
                    </Box>
                </Box>



            </Slider>

        </Box >
    );
};

export default Banner;