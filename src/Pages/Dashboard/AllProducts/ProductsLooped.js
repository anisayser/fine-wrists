import { Alert, Box, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Fab, Snackbar, TableCell, TableRow, useMediaQuery, useTheme } from '@mui/material';
import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DangerousIcon from '@mui/icons-material/Dangerous';

const ProductsLooped = ({ product, products, setProducts, setToastOpen }) => {

    const [deleteLoading, setDeleteLoading] = useState(false);

    // DELETE CONFIRM MODAL CONTROLLERS START
    const [dialogOpen, setDialogOpen] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const handleClickDialogOpen = () => {
        setDialogOpen(true);
    };
    const handleDialogClose = () => {
        setDialogOpen(false);
    };
    // DELETE CONFIRM MODAL CONTROLLERS START




    const handleDeleteProduct = id => {
        setDeleteLoading(true);
        fetch(`http://localhost:5000/products/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                }
            }).finally(() => {
                setToastOpen(true);
                setDeleteLoading(false);
                // handleDialogClose();
            })

    }


    return (
        <TableRow>

            <Dialog align='center'
                fullScreen={fullScreen}
                open={dialogOpen}
                onClose={handleDialogClose}
                aria-labelledby="responsive-dialog-title"
            >

                <Box sx={{ pt: 3 }}>
                    {deleteLoading ?
                        <CircularProgress color="primary" />
                        :
                        <DangerousIcon color='danger' sx={{ fontSize: 80 }} />}
                </Box>

                <DialogTitle id="responsive-dialog-title">
                    Are you sure you want to delete this product?
                </DialogTitle>
                {/* <DialogContent>
                    <DialogContentText>
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent> */}
                <DialogActions>
                    <Button variant='outlined' sx={{ mx: 'auto' }} autoFocus onClick={handleDialogClose}>
                        No
                    </Button>
                    <Button onClick={() => handleDeleteProduct(product._id)} variant='outlined' sx={{ mx: 'auto' }} autoFocus>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
            <TableCell component="th" scope="row">
                <img className='w-32' src={product.img} alt="" />
            </TableCell>
            <TableCell style={{ width: 'auto' }}>
                {product?.title}
            </TableCell>
            <TableCell style={{ width: 'auto' }}>
                {product?.category}
            </TableCell>
            <TableCell style={{ width: 'auto' }}>
                {product?.brand}
            </TableCell>
            <TableCell style={{ width: 'auto' }}>
                {product?.price}
            </TableCell>
            <TableCell style={{ width: 'auto' }}>
                {product?.oldprice}
            </TableCell>
            <TableCell style={{ width: 'auto' }}>
                {product?.rating}
            </TableCell>
            <TableCell style={{ width: 'auto' }}>
                {product?.description}
            </TableCell>
            <TableCell style={{ width: 'auto' }}>
                <Box className='flex justify-center space-x-3'>
                    <Fab size='small' color="info" aria-label="add">
                        <EditIcon />
                    </Fab>
                    <Fab onClick={handleClickDialogOpen} size='small' color="warning" aria-label="edit">
                        <DeleteIcon />
                    </Fab>
                </Box>
            </TableCell>
        </TableRow>
    );
};

export default ProductsLooped;