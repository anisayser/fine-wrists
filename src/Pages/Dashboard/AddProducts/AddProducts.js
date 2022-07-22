import { Alert, Box, Button, CircularProgress, Container, Paper, Snackbar, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const AddProducts = () => {

    const [products, setProducts] = useState({});
    const [date, setDate] = useState(new Date());
    const [loadingAddPost, setLoadingAddPost] = useState(false);

    // POSTED CONFIRM TOAST CONTROLLERS START
    const [toastOpen, setToastOpen] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setToastOpen(false);
    };
    // POSTED CONFIRM TOAST CONTROLLERS START

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newProduct = { ...products };
        newProduct[field] = value;
        setProducts(newProduct);
    }

    const handleSubmit = e => {
        e.preventDefault();
        setLoadingAddPost(true);
        const theProduct = { ...products, date: date.toLocaleDateString() };

        fetch('http://localhost:5000/addproduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(theProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .finally(() => {
                setLoadingAddPost(false);
                setToastOpen(true);
            })

    }


    return (
        <Box>
            <Container maxWidth='sm'>
                <Snackbar open={toastOpen} autoHideDuration={4000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        Product Added Sucessfully!
                    </Alert>
                </Snackbar>
                <Typography variant='h3' fontWeight='bold'>Add Products</Typography>
                <Box className='pt-10'>
                    <form onSubmit={handleSubmit}>
                        <Box className='flex flex-col items-center justify-center space-y-3 bg-slate-100 p-5 shadow-lg rounded'>
                            <TextField className='w-full' id="outlined-basic" onBlur={handleOnBlur} name='title' required label="Title" variant="outlined" />
                            <TextField className='w-full' id="outlined-basic" onBlur={handleOnBlur} name='brand' required label="Brand" variant="outlined" />
                            <TextField className='w-full' id="outlined-basic" onBlur={handleOnBlur} name='category' required label="Category" variant="outlined" />
                            <TextField className='w-full' id="outlined-basic" onBlur={handleOnBlur} name='oldprice' required label="Old Price" variant="outlined" />
                            <TextField className='w-full' id="outlined-basic" onBlur={handleOnBlur} name='price' required label="Price" variant="outlined" />
                            <TextField className='w-full' id="outlined-basic" onBlur={handleOnBlur} name='rating' required label="rating" variant="outlined" />
                            <TextField className='w-full' id="outlined-basic" onBlur={handleOnBlur} name='stock' required label="Stock" variant="outlined" />
                            <TextField className='w-full' id="outlined-basic" onBlur={handleOnBlur} name='img' required label="Image Url" variant="outlined" />
                            <textarea className='w-full bg-slate-100 rounded border border-gray-300 p-3' id="outlined-basic" onBlur={handleOnBlur} name='description' required placeholder="Description" />
                            <Button type='submit' className='w-full' variant='outlined'>{!loadingAddPost ? 'Add Product' : <CircularProgress size={20} color="primary" />}</Button>
                        </Box>
                    </form>
                </Box>
            </Container>
        </Box>
    );
};

export default AddProducts;