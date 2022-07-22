import { Backdrop, Box, Fade, Icon, Modal, TableCell, TableRow, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import { CartContext } from '../../../../App';
import useMyCartDelete from '../../../../hooks/useMyCartDelete';
import { MyButton } from '../../../../Styles/Styles';

const ViewCartDetails = ({ cart, userCart, setUserCart }) => {

    const [deleteModal, setDeleteModal] = useState(false);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [handleCartDelete, deleteLoading] = useMyCartDelete();
    // const [cartValue, setCartValue] = useContext(CartContext);






    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: '#242424',
        border: 'none',
        boxShadow: 24,
        textAlign: 'center',
        p: 4,
    };




    /*     const handleCartDelete = id => {
    
            fetch(`http://localhost:5000/usercart/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount > 0) {
                        const remaining = userCart.filter(cart => cart._id !== id);
                        setUserCart(remaining);
                        // setCartValue(remaining);
                    }
                }).finally(() => {
                    handleClose();
                })
        } */


    return (
        <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box className='text-center' color='muted.main' sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            Are you sure you want to delete?
                        </Typography>
                        <Box sx={{ mt: 5, display: 'flex', justifyContent: 'center' }}>
                            <MyButton onClick={handleClose}>No</MyButton>
                            <MyButton onClick={() => handleCartDelete(cart.productId, userCart, setUserCart)} sx={{ ml: 5 }}>Yes</MyButton>
                        </Box>
                    </Box>
                </Fade>
            </Modal>


            <TableCell className='border border-[#242424] py-2' component="">
                <img className='w-20' src={cart?.img} alt="" />
            </TableCell>
            <TableCell className='border border-[#242424] text-[#abafb3] text-lg'>{cart?.title}</TableCell>
            <TableCell className='border border-[#242424] text-[#abafb3] text-lg'>{cart?.price}</TableCell>
            <TableCell className='border border-[#242424] text-[#abafb3] text-lg'>{cart?.brand}</TableCell>
            <TableCell className='border border-[#242424] text-[#abafb3] text-lg text-center'>
                <Icon onClick={handleOpen} color='muted' className="fa-solid fa-trash-can cursor-pointer text-[#abafb3]"></Icon>
            </TableCell>

        </TableRow>
    );
};

export default ViewCartDetails;