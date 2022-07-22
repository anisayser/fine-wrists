import { Box } from '@mui/material';
import React from 'react';
import InfoHeader from '../AllHeader/InfoHeader/InfoHeader';
import MenuHeader from '../AllHeader/MenuHeader/MenuHeader';
import MiddleHeader from '../AllHeader/MiddleHeader/MiddleHeader';
import Footer from '../Footer/Footer';
import Products from '../Products/Products';

const Shop = () => {
    return (
        <Box>
            <InfoHeader></InfoHeader>
            <MiddleHeader></MiddleHeader>
            <MenuHeader></MenuHeader>
            {/* HEADER ENDS */}


            <Products></Products>



            {/* FOOTER STARTS */}
            <Footer />
        </Box>
    );
};

export default Shop;