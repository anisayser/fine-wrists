import { Box, Icon, Typography } from '@mui/material';
import React from 'react';
import { MyButton } from '../../../Styles/Styles';

const CartCalculation = ({ cart }) => {
    // console.log(cart);

    let subTotal = 0;
    let quantity = 0;

    for (const product of cart) {
        subTotal += parseFloat(product?.price);
    }

    let vat = subTotal * 0.10;
    const total = parseFloat(subTotal) + parseFloat(vat);

    // console.log(subTotal)

    return (
        <Box>
            <Box className='flex justify-between border-b border-[#242424]' color='muted.main'>
                <Typography variant='subtitle1' className='text-md'>Sub Total : </Typography>
                <Typography variant='subtitle1' className='text-md' color='primary'>${subTotal}</Typography>
            </Box>
            <Box className='flex justify-between border-b border-[#242424]' color='muted.main'>
                <Typography variant='subtitle1' className='text-md'>Vat (10%) : </Typography>
                <Typography variant='subtitle1' className='text-md' color='primary'>${vat.toFixed(2)}</Typography>
            </Box>
            <Box className='flex justify-between border-b border-[#242424]' color='muted.main'>
                <Typography variant='subtitle1' className='text-md'>Total : </Typography>
                <Typography variant='subtitle1' className='text-md' color='primary'>${total}</Typography>
            </Box>
        </Box>
    );
};



export default CartCalculation;