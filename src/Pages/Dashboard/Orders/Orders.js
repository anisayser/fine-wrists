import { Box, Divider, Icon, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Order from './Order';


const Orders = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])


    //ACCORDION CONTROLLERS
    const [expanded, setExpanded] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    //ACCORDION CONTROLLERS


    return (
        <Box>
            <Typography variant='h3' fontWeight='bold'>All Orders</Typography>
            <Box>

                {
                    orders.map(order => <Order key={order._id} order={order}></Order>)
                }



            </Box>
        </Box>
    );
};

export default Orders;