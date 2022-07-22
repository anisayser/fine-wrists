import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, FormControl, Icon, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Order = ({ order }) => {


    //ACCORDION CONTROLLERS
    const [expanded, setExpanded] = useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    //ACCORDION CONTROLLERS

    const [orStatus, setOrStatus] = useState(order.status);
    // if (order.status === 'pending' || order.status === 'shipped') {
    //     setOrStatus(order.status)
    // }
    // console.log(orStatus)
    // let status = '';
    const handleStatusChange = (event) => {
        const status = event.target.value;
        setOrStatus(event.target.value);

        const orderStatus = { status: status };
        fetch(`https://pacific-sea-83230.herokuapp.com/orderstatus/${order._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderStatus)
        })
            .then(res => res.json())
            .then(data => { console.log(data) })
    };

    return (
        <Box>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Box className='flex justify-between w-[95%]'>
                        <Typography variant='h6' fontWeight='bold' sx={{ flexShrink: 0 }}>
                            Order from {order.name}. ( Email: <Typography variant='body' color='primary'>{order.email}</Typography> )
                        </Typography>
                        <Typography>Status: <Typography variant='body' fontWeight='bold' color='primary'>{orStatus}</Typography></Typography>
                    </Box>
                </AccordionSummary>
                <AccordionDetails>
                    <Box className='text-left w-52'>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Status</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Status"
                                value={orStatus}
                                onChange={handleStatusChange}
                            >
                                <MenuItem value='pending'>Pending</MenuItem>
                                <MenuItem value='shipped'>Shipped</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box className=''>
                        <Typography variant='h5' color=''><Icon color='primary' className="fa-solid fa-receipt w-12"></Icon> Order Details {order.userCart.length} items</Typography>
                        <Box className='pt-5'>
                            <TableContainer className='overflow-y-scroll max-h-96' component='' style={{ backgroundColor: '#2f2f2f' }}>
                                <Table sx={{ minWidth: '100%' }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell className='border border-[#242424] text-[#abafb3] text-lg'>Image</TableCell>
                                            <TableCell className='border border-[#242424] text-[#abafb3] text-lg'>Title</TableCell>
                                            <TableCell className='border border-[#242424] text-[#abafb3] text-lg'>Price</TableCell>
                                            <TableCell className='border border-[#242424] text-[#abafb3] text-lg'>Brand</TableCell>
                                            <TableCell className='border border-[#242424] text-[#abafb3] text-lg'>Id</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {order?.userCart?.map(cart =>
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
                                                <TableCell className='border border-[#242424] text-[#abafb3] text-lg'>{cart?.cartProduct?._id}</TableCell>

                                            </TableRow>
                                        )}

                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                    </Box>


                    <Box className='pt-7'>
                        <Typography variant='h5' color=''><Icon color='primary' className="fa-solid fa-truck w-12"></Icon> Delivery Details</Typography>
                        <Box className='pt-5'>
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
                                                {order?.name}
                                            </TableCell>
                                            <TableCell className='border border-[#242424] text-[#abafb3] text-md'>{order.street}, {order.apartment}, {order.district}, {order.city} {order.country}</TableCell>
                                            <TableCell className='border border-[#242424] text-[#abafb3] text-md'>{order.phone}</TableCell>
                                            <TableCell className='border border-[#242424] text-[#abafb3] text-md'>{order.email}</TableCell>
                                            <TableCell className='border border-[#242424] text-[#abafb3] text-md'>{order.orderDate} <br /> {order.orderTime}</TableCell>
                                        </TableRow>

                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                    </Box>


                </AccordionDetails>
            </Accordion>
            <Divider sx={{ my: 2 }} />
        </Box>
    );
};

export default Order;