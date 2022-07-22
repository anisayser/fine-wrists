import { Box, Container, Grid, Icon, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebaseInit';
import InfoHeader from '../AllHeader/InfoHeader/InfoHeader';
import MenuHeader from '../AllHeader/MenuHeader/MenuHeader';
import MiddleHeader from '../AllHeader/MiddleHeader/MiddleHeader';
import Footer from '../Footer/Footer';

const OrderPlaced = () => {

    const [user] = useAuthState(auth);
    const { id } = useParams();
    const [placedOrder, setPlacedOrder] = useState([]);
    useEffect(() => {
        const uri = `http://localhost:5000/placedorder/${id}`;
        fetch(uri)
            .then(res => res.json())
            .then(data => setPlacedOrder(data))
    }, [])


    return (
        <Box>
            <InfoHeader></InfoHeader>
            <MiddleHeader></MiddleHeader>
            <MenuHeader></MenuHeader>
            {/* HEADER ENDS */}

            <Box className='py-20'>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs></Grid>
                        <Grid item xs={8}>
                            <Typography variant='h4' className='text-white pb-16'><Icon color='primary' className="fa-solid fa-circle-check"></Icon> Your order is placed</Typography>
                            <Box className='text-left' color='muted.main'>
                                <Typography variant='subtitle1'>
                                    Hi {user?.displayName}, <br />
                                    Thank you for ordering from Fine Wrists!  <br />
                                    We are excited for you to receive your order <span className='text-white text-lg'># {id}</span>  and will notify you once its on its way. If you have ordered from multiple sellers, your items will be delivered in separate packages. We hope you had a great shopping experience! You can check your order status here.
                                </Typography>
                            </Box>

                            <Box className='pt-16'>
                                <Typography variant='h5' color='#fff'><Icon color='primary' className="fa-solid fa-truck w-12"></Icon> Delivery Details</Typography>
                                <Box className='pt-10'>
                                    <TableContainer component={Paper} style={{ backgroundColor: '#2f2f2f' }}>
                                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell className='border border-[#242424] text-[#abafb3] text-lg'>Name</TableCell>
                                                    <TableCell className='border border-[#242424] text-[#abafb3] text-lg'>Address</TableCell>
                                                    <TableCell className='border border-[#242424] text-[#abafb3] text-lg'>Phone</TableCell>
                                                    <TableCell className='border border-[#242424] text-[#abafb3] text-lg'>Email</TableCell>
                                                    <TableCell className='border border-[#242424] text-[#abafb3] text-lg'>Date</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>

                                                <TableRow
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell className='border border-[#242424] text-[#abafb3] text-md' component="th" scope="row">
                                                        {user?.displayName}
                                                    </TableCell>
                                                    <TableCell className='border border-[#242424] text-[#abafb3] text-md'>{placedOrder.street}, {placedOrder.apartment}, {placedOrder.district}, {placedOrder.city} {placedOrder.country}</TableCell>
                                                    <TableCell className='border border-[#242424] text-[#abafb3] text-md'>{placedOrder.phone}</TableCell>
                                                    <TableCell className='border border-[#242424] text-[#abafb3] text-md'>{placedOrder.email}</TableCell>
                                                    <TableCell className='border border-[#242424] text-[#abafb3] text-md'>{placedOrder.orderDate} <br /> {placedOrder.orderTime}</TableCell>
                                                </TableRow>

                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Box>
                            </Box>

                            <Box className='pt-16'>
                                <Typography variant='h5' color='#fff'><Icon color='primary' className="fa-solid fa-receipt w-12"></Icon> Order Details</Typography>
                                <Box className='pt-10'>
                                    <TableContainer className='overflow-y-scroll max-h-96' component='' style={{ backgroundColor: '#2f2f2f' }}>
                                        <Table sx={{ minWidth: '100%' }} aria-label="simple table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell className='border border-[#242424] text-[#abafb3] text-lg'>Image</TableCell>
                                                    <TableCell className='border border-[#242424] text-[#abafb3] text-lg'>Title</TableCell>
                                                    <TableCell className='border border-[#242424] text-[#abafb3] text-lg'>Price</TableCell>
                                                    <TableCell className='border border-[#242424] text-[#abafb3] text-lg'>Brand</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {placedOrder?.userCart?.map(cart =>
                                                    <TableRow
                                                        key={cart?._id}
                                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                    >
                                                        <TableCell className='border border-[#242424] py-2' component="">
                                                            <img className='w-20' src={cart?.cartProduct?.img} alt="" />
                                                        </TableCell>
                                                        <TableCell className='border border-[#242424] text-[#abafb3] text-lg'>{cart?.cartProduct?.title}</TableCell>
                                                        <TableCell className='border border-[#242424] text-[#abafb3] text-lg'>{cart?.cartProduct?.price}</TableCell>
                                                        <TableCell className='border border-[#242424] text-[#abafb3] text-lg'>{cart?.cartProduct?.brand}</TableCell>

                                                    </TableRow>
                                                )}

                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Box>
                            </Box>

                            <Box className='p-5 mt-3' component={Paper} style={{ backgroundColor: '#2f2f2f' }}>
                                <Box className='flex justify-between border-b border-[#242424]' color='muted.main'>
                                    <Typography variant='subtitle1' className='text-md'>Sub Total : </Typography>
                                    <Typography variant='subtitle1' className='text-md' color='primary'>${placedOrder.subTotal}</Typography>
                                </Box>
                                <Box className='flex justify-between border-b border-[#242424]' color='muted.main'>
                                    <Typography variant='subtitle1' className='text-md'>Vat (10%) : </Typography>
                                    <Typography variant='subtitle1' className='text-md' color='primary'>${placedOrder.vat}</Typography>
                                </Box>
                                <Box className='flex justify-between border-b border-[#242424]' color='muted.main'>
                                    <Typography variant='subtitle1' className='text-md'>Total : </Typography>
                                    <Typography variant='subtitle1' className='text-md' color='primary'>${placedOrder.total}</Typography>
                                </Box>
                            </Box>

                        </Grid>
                        <Grid item xs></Grid>
                    </Grid>
                </Container>
            </Box>


            {/* FOOTER STARTS */}
            <Footer />

        </Box >
    );
};

export default OrderPlaced;