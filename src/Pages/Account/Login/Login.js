import { Box, Container, Divider, Grid, Paper, TextField, Typography } from '@mui/material';
import React from 'react';
import { MyButton } from '../../../Styles/Styles';
import InfoHeader from '../../AllHeader/InfoHeader/InfoHeader';
import MenuHeader from '../../AllHeader/MenuHeader/MenuHeader';
import MiddleHeader from '../../AllHeader/MiddleHeader/MiddleHeader';
import Footer from '../../Footer/Footer';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebaseInit';
import useAdduser from '../../../hooks/useAdduser';

const Login = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [user] = useAuthState(auth)
    const [saveUser] = useAdduser();
    const location = useLocation();
    const navigate = useNavigate();


    const handleLogin = e => {
        e.preventDefault();
    }

    const from = location?.state?.from?.pathname || '/';

    const loginWithGoole = () => {
        signInWithGoogle();

    }
    if (user) {
        saveUser(user?.email, user?.password, 'PUT')
        navigate(from, { replace: true })
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
                            <form onSubmit={handleLogin}>
                                <Paper elevation={5} className='flex flex-col space-y-3 p-5 bg-[#2f2f2f]'>
                                    <Typography variant='h5' className='font-bold' color='primary'>Login</Typography>

                                    <TextField id="email" label="Email" required variant="outlined" />
                                    <TextField id="password" label="Password" required variant="outlined" />
                                    <MyButton type='submit'>Login</MyButton>

                                    <Typography variant='subtitle1' color='primary'>--------- or ----------</Typography>

                                    <MyButton onClick={loginWithGoole} className='w-60 mx-auto'>Continue With Google</MyButton>

                                    <Link to='/register' className='text-[#A8741A]'>👉 Dont Have any account? Register Now!</Link>
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

export default Login;