import { Backdrop, Box, CircularProgress, Icon, Typography } from '@mui/material';
import React, { useState } from 'react';
import useMyCartDelete from '../../../hooks/useMyCartDelete';

const CartDetails = ({ cart, userCart, setUserCart }) => {
    // const [deleteLoading, setDeleteLoading] = useState(false);

    // userCart.map(uc => )

    // console.log('Cart Cart Cart', cart)

    const [handleCartDelete, deleteLoading] = useMyCartDelete();


    // const handleCartDelete = id => {
    //     setDeleteLoading(true);
    //     fetch(`https://pacific-sea-83230.herokuapp.com/usercart/${id}`, {
    //         method: 'DELETE',
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             // console.log(data);
    //             if (data.deletedCount > 0) {
    //                 const remaining = userCart.filter(cart => cart._id !== id);
    //                 setUserCart(remaining);
    //                 setDeleteLoading(false);
    //             }
    //         })
    //         .finally(() => {

    //         })
    // }

    return (
        <Box className='flex items-center space-x-3 border-b border-[#242424] pb-2 relative'>

            {deleteLoading &&
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={true}
                    onClick={false}
                    className='absolute'
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
            }

            <img className='w-20' src={cart?.img} alt="" />
            <Box className='text-left'>
                <Typography variant='subtitle2' color='muted.main'>{cart?.title}</Typography>
                <Typography variant='subtitle1' color='muted.main'>x1</Typography>
                <Typography variant='subtitle1' color='primary'>${cart?.price}</Typography>
            </Box>
            <Icon onClick={() => handleCartDelete(cart?.productId, userCart, setUserCart)} color='muted' className="fa-solid fa-trash-can absolute right-2 cursor-pointer text-[#abafb3]"></Icon>
        </Box>
    );
};

export default CartDetails;