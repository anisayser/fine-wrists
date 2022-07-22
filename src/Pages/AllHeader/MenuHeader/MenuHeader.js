import React, { useState } from 'react';
import { Alert, AppBar, Box, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Slide, Snackbar, TextField, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebaseInit';
import useUserRole from '../../../hooks/useUserRole';


//REVIEW FORM DIALOG MODAL CONTROLLERS***
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
//REVIEW FORM DIALOG MODAL CONTROLLERS***


const MenuHeader = (props) => {
    const [user] = useAuthState(auth);
    const drawerWidth = 240;
    const navItems = ['Home', 'About', 'Contact'];

    // console.log(user)


    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const activeStyle = {
        color: '#A8741A',
    }

    const drawer = (
        <Box style={{ backgroundColor: '#242424', height: '100%', color: 'white' }} onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Fine Wrists
            </Typography>
            <Divider color='#fff' />
            <List>

                <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} to='/home'>
                    <ListItem disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary='Home' />
                        </ListItemButton>
                    </ListItem>
                </NavLink>
                <NavLink to='/home'>
                    <ListItem disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary='About' />
                        </ListItemButton>
                    </ListItem>
                </NavLink>
                <NavLink to='/home'>
                    <ListItem disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary='Shop' />
                        </ListItemButton>
                    </ListItem>
                </NavLink>
                <NavLink to='/home'>
                    <ListItem disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary='Contact' />
                        </ListItemButton>
                    </ListItem>
                </NavLink>




            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    const [isAdmin] = useUserRole();


    //REVIEW FORM DIALOG MODAL CONTROLLERS***
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    //REVIEW FORM DIALOG MODAL CONTROLLERS***


    //REVIEW ADDED MESSAGE SNACKBAR CONTROLLERS***
    const [revSucessOpen, setRevSucessOpen] = useState(false);
    const handleRevSucessClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setRevSucessOpen(false);
    };
    //REVIEW ADDED MESSAGE SNACKBAR CONTROLLERS***



    //ADDING REVIEW
    const [reviewLoader, setReviewLoader] = useState(false);
    const [review, setReview] = useState('');
    const handleReviewOnBlur = e => {
        setReview(e.target.value);
    }
    const handleAddReview = e => {
        e.preventDefault();
        setReviewLoader(true);
        const theReview = { name: user.displayName, photo: user.photoURL, review };
        fetch('http://localhost:5000/addreview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(theReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    handleClose();
                }
            })
            .finally(() => {
                setReviewLoader(false);
                setRevSucessOpen(true);
            })

    }


    return (
        <Box className='sticky top-0 z-50' sx={{ display: 'flex' }}>
            {/* REVIEW ADDED SUCCESS MESSAGE ALERT SNACKBAR */}
            <Snackbar open={revSucessOpen} autoHideDuration={6000} onClose={handleRevSucessClose}>
                <Alert onClose={handleRevSucessClose} severity="success" sx={{ width: '100%' }}>
                    Thank you so much for your Review!
                </Alert>
            </Snackbar>
            {/* REVIEW ADDED SUCCESS MESSAGE ALERT SNACKBAR */}


            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
                fullWidth={true}
                maxWidth='sm'
            >
                <DialogTitle sx={{ textAlign: 'center' }}>{"Give us a Review!"}</DialogTitle>
                <form onSubmit={handleAddReview}>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">

                        </DialogContentText>

                        <Box sx={{ pt: 2 }}>

                            {reviewLoader ? <Box style={{ width: '100%', height: '150px', padding: '5px 10px', textAlign: 'center' }}><CircularProgress /></Box> : <textarea name="review" id="" onBlur={handleReviewOnBlur} placeholder='Write your review' style={{ width: '100%', height: '150px', border: '1px solid gray', borderRadius: '5px', padding: '5px 10px' }}></textarea>}
                        </Box>
                    </DialogContent>
                    <DialogActions>
                        <Button type='submit' variant='contained'>Submit</Button>
                    </DialogActions>
                </form>

            </Dialog>

            <AppBar className='static border-b border-[#2f2f2f]' color='projectColor' component="nav">
                <Toolbar>
                    <IconButton
                        color="primary"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box className='mx-auto' sx={{ display: { xs: 'none', sm: 'block' } }}>

                        <NavLink to='/home'>
                            <Button sx={{ color: '#fff' }}>Home</Button>
                        </NavLink>
                        <NavLink to='/home'>
                            <Button sx={{ color: '#fff' }}>About</Button>
                        </NavLink>
                        <NavLink to='/shop'>
                            <Button sx={{ color: '#fff' }}>Shop</Button>
                        </NavLink>
                        <NavLink to='/home'>
                            <Button sx={{ color: '#fff' }}>Contact</Button>
                        </NavLink>
                        {isAdmin &&
                            <NavLink to='/dashboard'>
                                <Button sx={{ color: '#fff' }}>Dashboard</Button>
                            </NavLink>
                        }
                        {user &&
                            <Button onClick={handleClickOpen} variant='contained' sx={{ color: '#fff', ml: 2 }}>Give a Review</Button>
                        }

                    </Box>
                    {/* <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        MUI
                    </Typography> */}

                </Toolbar>
            </AppBar>

            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>



        </Box >
    );
};

MenuHeader.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default MenuHeader;