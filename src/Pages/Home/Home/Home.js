import { Box } from '@mui/material';
import React from 'react';
import InfoHeader from '../../AllHeader/InfoHeader/InfoHeader';
import MenuHeader from '../../AllHeader/MenuHeader/MenuHeader';
import MiddleHeader from '../../AllHeader/MiddleHeader/MiddleHeader';
import CategoryBanners from '../../CategoryBanners/CategoryBanners';
import Footer from '../../Footer/Footer';
import Testimonials from '../../Testimonials/Testimonials';
import Banner from '../Banner/Banner';
import Products from '../../Products/Products';

const Home = () => {
    return (
        <Box>
            <InfoHeader></InfoHeader>
            <MiddleHeader></MiddleHeader>
            <MenuHeader></MenuHeader>
            <Banner></Banner>
            <CategoryBanners></CategoryBanners>
            <Products></Products>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </Box>
    );
};

export default Home;