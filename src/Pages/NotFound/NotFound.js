import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';
import InfoHeader from '../AllHeader/InfoHeader/InfoHeader';
import MenuHeader from '../AllHeader/MenuHeader/MenuHeader';
import MiddleHeader from '../AllHeader/MiddleHeader/MiddleHeader';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <Box>
            <InfoHeader></InfoHeader>
            <MiddleHeader></MiddleHeader>
            <MenuHeader></MenuHeader>
            {/* HEADER ENDS */}

            <Box sx={{ pb: 10 }}>
                <Container>
                    <Typography variant='h1' fontSize='300px' fontWeight='bold' color='primary'>404</Typography>
                    <Typography variant='h2' color='#fff'>OPPS! PAGE NOT BE FOUND</Typography>
                    <Typography variant='h5' color='muted.main'>Sorry but the page you are looking for does not exist, have been removed, name changed or is temporarity unavailable.</Typography>
                    <Link to='/'>
                        <Button variant='contained' size='large' sx={{ mt: 5 }}>Back to Home Page</Button>
                    </Link>
                </Container>
            </Box>


            {/* FOOTER STARTS */}
            <Footer />
        </Box>
    );
};

export default NotFound;