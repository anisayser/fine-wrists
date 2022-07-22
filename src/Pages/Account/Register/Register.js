import { Box, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import React from 'react';
import { MyButton } from '../../../Styles/Styles';
import InfoHeader from '../../AllHeader/InfoHeader/InfoHeader';
import MenuHeader from '../../AllHeader/MenuHeader/MenuHeader';
import MiddleHeader from '../../AllHeader/MiddleHeader/MiddleHeader';
import { Link } from 'react-router-dom';
import Footer from '../../Footer/Footer';

const Register = () => {


    const handleRegister = e => {
        e.preventDefault();
    }


    return (
        <Box>
            <InfoHeader></InfoHeader>
            <MiddleHeader></MiddleHeader>
            <MenuHeader></MenuHeader>
            {/* HEADER ENDS */}

            <Box className='py-20'>
                <Container>
                    <Grid container>
                        <Grid item xs></Grid>
                        <Grid item xs={6}>
                            <form onSubmit={handleRegister}>
                                <Paper elevation={5} className='flex flex-col space-y-3 p-5 bg-[#2f2f2f]'>
                                    <Typography variant='h5' className='font-bold' color='primary'>Register</Typography>

                                    <TextField id="Name" label="Full Name" required variant="outlined" />
                                    <TextField id="email" label="Email" type='email' required variant="outlined" />
                                    <TextField id="password" label="Password" required variant="outlined" />
                                    <TextField id="password2" label="Retype Password" required variant="outlined" />
                                    <MyButton type='submit'>Register</MyButton>

                                    <Link to='/login' className='text-[#A8741A]'>👉 Already have an account? Login Now!</Link>
                                </Paper>
                            </form>
                        </Grid>
                        <Grid item xs></Grid>
                    </Grid>
                </Container>
            </Box>


            {/* FOOTER STARTS */}
            <Footer />
        </Box>
    );
};

export default Register;