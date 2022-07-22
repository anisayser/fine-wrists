import { Alert, Box, Button, Container, Snackbar, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebaseInit';

const MakeAdmin = () => {

    const [user] = useAuthState(auth);

    const [open, setOpen] = useState(false);
    const [emailForAdmin, setEmailForAdmin] = useState('')

    // const handleClick = () => {
    //     setOpen(true);
    // };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const handleOnEmailBlur = e => {
        setEmailForAdmin(e.target.value);
    }




    const makeAdmin = () => {
        const userRole = { role: 'admin' };
        const uri = `http://localhost:5000/makeadmin/${emailForAdmin}`;
        fetch(uri, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userRole)
        })
            .then(res => res.json())
            .then(data => { })
            .finally(() => {
                setOpen(true)
            })
    }

    return (
        <Box>
            <Container>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        The User has Become Admin Sucessfully!
                    </Alert>
                </Snackbar>
                <Typography variant='h3' className='font-bold'>Make me Admin Bro</Typography>

                <Box className='flex flex-col items-center justify-center space-y-3 pt-10'>
                    <TextField className='w-1/3' id="outlined-basic" onBlur={handleOnEmailBlur} name='email' required type='email' label="Email" variant="outlined" />
                    <Button onClick={makeAdmin} variant='contained'>Make Admin</Button>
                </Box>
            </Container>

        </Box>
    );
};

export default MakeAdmin;