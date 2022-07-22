import { Box, Container, Icon, Paper, Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../App';
import auth from '../../../firebaseInit';
import useCartOfUser from '../../../hooks/useCartOfUser';
import { MyButton } from '../../../Styles/Styles';
import InfoHeader from '../../AllHeader/InfoHeader/InfoHeader';
import MenuHeader from '../../AllHeader/MenuHeader/MenuHeader';
import MiddleHeader from '../../AllHeader/MiddleHeader/MiddleHeader';
import Footer from '../../Footer/Footer';
import CartCalculation from '../CartCalculation/CartCalculation';
import ViewCartDetails from './ViewCartDetails/ViewCartDetails';

const ViewCart = () => {
    const [user] = useAuthState(auth);

    const [userCart, setUserCart, cartLoading] = useCartOfUser();
    const [cartValue, setCartValue] = useContext(CartContext);




    return (
        <Box>
            <InfoHeader></InfoHeader>
            <MiddleHeader></MiddleHeader>
            <MenuHeader></MenuHeader>
            {/* HEADER ENDS */}

            <Box className='py-20'>
                <Container>
                    <TableContainer component={Paper} style={{ backgroundColor: '#2f2f2f' }}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell className='border border-[#242424] text-[#abafb3] text-lg'>Image</TableCell>
                                    <TableCell className='border border-[#242424] text-[#abafb3] text-lg'>Title</TableCell>
                                    <TableCell className='border border-[#242424] text-[#abafb3] text-lg'>Price</TableCell>
                                    <TableCell className='border border-[#242424] text-[#abafb3] text-lg'>Brand</TableCell>
                                    <TableCell className='border border-[#242424] text-[#abafb3] text-lg' align='center'>Remove</TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>

                                {cartLoading ?
                                    [...Array(3).keys()].map(key => (

                                        <TableRow key={key} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                            <TableCell className='border border-[#242424] py-2' component="">
                                                <Skeleton animation='wave' variant='rectangular' width='120px' height='70px' />
                                            </TableCell>
                                            <TableCell className='border border-[#242424] text-[#abafb3] text-lg'>
                                                <Skeleton animation='wave' variant='rectangular' width='100%' />
                                            </TableCell>
                                            <TableCell className='border border-[#242424] text-[#abafb3] text-lg'>
                                                <Skeleton animation='wave' variant='rectangular' width='100%' />
                                            </TableCell>
                                            <TableCell className='border border-[#242424] text-[#abafb3] text-lg'>
                                                <Skeleton animation='wave' variant='rectangular' width='100%' />
                                            </TableCell>
                                            <TableCell className='border border-[#242424] text-[#abafb3] text-lg text-center'>
                                                <Skeleton animation='wave' variant='rectangular' width='50px' sx={{ mx: 'auto' }} />
                                            </TableCell>

                                        </TableRow>
                                    ))
                                    :
                                    cartValue.map(cart => <ViewCartDetails key={cart.productId} cart={cart} userCart={userCart} setUserCart={setUserCart} />)
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <Box className='w-2/4 bg-[#2f2f2f] p-5 mt-5 text-left'>
                        <Typography variant='h4' color='muted.main' className='pb-5'>Cart Totals</Typography>
                        <CartCalculation cart={cartValue}></CartCalculation>

                        <Link to='/placeorder'><MyButton className='mt-8'>Procced to Checkout</MyButton></Link>
                    </Box>


                </Container>
            </Box>

            {/* FOOTER STARTS */}
            <Footer />

        </Box>
    );
};

export default ViewCart;