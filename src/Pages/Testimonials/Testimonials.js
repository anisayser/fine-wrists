import { Box, Container, Grid, Icon, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import revUser1 from '../../images/team-1_100X.jpg';
import revUser2 from '../../images/team-2_100X.jpg';
import revUser3 from '../../images/team-3_100X.jpg';
import './Testimonials.css';

const Testimonials = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://pacific-sea-83230.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])




    //SLICK SLIDER CONTROLLERS START*******************
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className='absolute top-[50%] right-0 z-50 text-white'
                style={{ ...style, display: "block" }}
                onClick={onClick}
            >
                <Icon className="fa-solid fa-angle-right text-base bg-[#242424] hover:bg-[#A8741A] mr-5 hover:mr-1 transition-all ease-in cursor-pointer w-12 h-12 text-center flex items-center justify-center rounded-full"></Icon>
            </div>
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className='absolute top-[50%] z-50 text-white'
                style={{ ...style, display: "block" }}
                onClick={onClick}
            >
                <Icon className="fa-solid fa-angle-left text-base bg-[#242424] hover:bg-[#A8741A] ml-5 hover:ml-1 transition-all ease-in cursor-pointer w-12 h-12 text-center flex items-center justify-center rounded-full"></Icon>

            </div>
        );
    }

    const settings = {
        // dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        cssEase: "linear"
    };
    //SLICK SLIDER CONTROLLERS ENDS*******************


    return (
        <Box className='textimonials py-32'>
            <Container>
                <Typography variant='h4' className='text-white uppercase pb-10'>Testimonials</Typography>
                <Grid container>
                    <Grid item xs>

                    </Grid>

                    <Grid item xs={8}>
                        <Slider {...settings}>
                            {
                                reviews.map(review => (
                                    <Box key={review._id} className='text-white'>
                                        <Typography vaiant='subtitle1' color='muted.main'>{review.review}</Typography>
                                        <Box className='mt-8 space-y-3'>
                                            <img className='mx-auto rounded-full' src={review.photo} alt="" />
                                            <Typography variant='h5' color='primary'>{review.name}</Typography>
                                        </Box>
                                    </Box>
                                ))
                            }



                        </Slider>
                    </Grid>

                    <Grid item xs>

                    </Grid>
                </Grid>
            </Container>

        </Box>
    );
};

export default Testimonials;