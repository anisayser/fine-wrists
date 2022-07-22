import { Box, Container, Grid, Icon, Typography } from '@mui/material';
import React from 'react';

import Slider from "react-slick";

import slider1 from '../../../images/slider1-mirora1-1920x634.jpg';
import slider2 from '../../../images/slider2-mirora1-1920x634.jpg';
import { MyButton } from '../../../Styles/Styles';
import { Link } from 'react-router-dom';

const Banner = () => {

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className='absolute top-[47%] right-0 z-50 text-white'
                style={{ ...style, display: "block" }}
                onClick={onClick}
            >
                <Icon className="fa-solid fa-angle-right text-base bg-[#242424] hover:bg-[#A8741A] mr-10 hover:mr-5 transition-all ease-in cursor-pointer w-16 h-16 text-center flex items-center justify-center rounded-full"></Icon>
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
                <Icon className="fa-solid fa-angle-left text-base bg-[#242424] hover:bg-[#A8741A] ml-10 hover:ml-5 transition-all ease-in cursor-pointer w-16 h-16 text-center flex items-center justify-center rounded-full"></Icon>

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

    return (
        <Box>

            <Slider {...settings}>


                <Box className='relative'>
                    <Box className='absolute text-white w-full text-left pt-20'>
                        <Container>
                            <Grid container spaceing={2}>
                                <Grid item xs={12} sm={6}>
                                    <Box className='space-y-5'>
                                        <Typography variant='subtitle1' color='primary'>Exclusive offer -20% off this week</Typography>
                                        <Typography variant='h2'>H-Volt Classico</Typography>
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
                    <Box>
                        <img src={slider1} alt="" />
                    </Box>
                </Box>


                <Box className='relative'>
                    <Box className='absolute text-white w-full text-left pt-20'>
                        <Container>
                            <Grid container spaceing={2}>
                                <Grid item xs={12} sm={6}>
                                    <Box className='space-y-5'>
                                        <Typography variant='subtitle1' color='primary'>Exclusive offer -20% off this week</Typography>
                                        <Typography variant='h2'>H-Volt Classico</Typography>
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
                    <Box>
                        <img src={slider1} alt="" />
                    </Box>
                </Box>

                <Box className='relative'>
                    <Box className='absolute text-white w-full text-left pt-20'>
                        <Container>
                            <Grid container spaceing={2}>
                                <Grid item xs={12} sm={6}>
                                    <Box className='space-y-5'>
                                        <Typography variant='subtitle1' color='primary'>Exclusive offer -20% off this week</Typography>
                                        <Typography variant='h2'>H-Volt Classico</Typography>
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
                    <Box>
                        <img src={slider2} alt="" />
                    </Box>
                </Box>
            </Slider>

        </Box >
    );
};

export default Banner;