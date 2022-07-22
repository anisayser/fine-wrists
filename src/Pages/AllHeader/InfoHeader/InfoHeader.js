import React, { useState } from 'react';
import { Login, Settings } from '@mui/icons-material';
import { Avatar, Box, Container, Divider, Grid, Icon, IconButton, ListItemIcon, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import Logout from '@mui/icons-material/Logout';
import PersonAdd from '@mui/icons-material/PersonAdd';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebaseInit';
import { signOut } from 'firebase/auth';

const InfoHeader = () => {
    const [user] = useAuthState(auth);
    // console.log(user);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box className='border-b border-[#2f2f2f] pt-1'>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={10} sm={6}>
                        <Box className='flex space-x-3'>
                            <Box className='w-8 h-8 bg-[#2f2f2f] rounded-full text-white flex items-center justify-center'>
                                <Icon className="fa-brands fa-facebook-f" style={{ fontSize: '16px' }}></Icon>
                            </Box>

                            <Box className='w-8 h-8 bg-[#2f2f2f] rounded-full text-white flex items-center justify-center'>
                                <Icon className="fa-brands fa-twitter" style={{ fontSize: '16px' }}></Icon>
                            </Box>
                            <Box className='w-8 h-8 bg-[#2f2f2f] rounded-full text-white flex items-center justify-center'>
                                <Icon className="fa-brands fa-youtube" style={{ fontSize: '16px' }}></Icon>
                            </Box>
                            <Box className='w-8 h-8 bg-[#2f2f2f] rounded-full text-white flex items-center justify-center'>
                                <Icon className="fa-brands fa-instagram" style={{ fontSize: '16px' }}></Icon>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={2} sm={6} className='text-right'>
                        <Tooltip title="Account settings">
                            <IconButton
                                onClick={handleClick}
                                size="small"
                                sx={{ ml: 2 }}
                                aria-controls={open ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                            >
                                {user ? <Avatar sx={{ width: 32, height: 32 }}><img src={user.photoURL} alt="" /></Avatar> : <Avatar sx={{ width: 32, height: 32 }}></Avatar>}
                            </IconButton>
                        </Tooltip>
                        <Menu
                            anchorEl={anchorEl}
                            id="account-menu"
                            open={open}
                            onClose={handleClose}
                            onClick={handleClose}
                            PaperProps={{
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    '&:before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                },
                            }}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        >
                            <Link to='/register'>
                                <MenuItem>
                                    <ListItemIcon>
                                        <Login fontSize="small" />
                                    </ListItemIcon>
                                    Register
                                </MenuItem>
                            </Link>


                            {user?.email ?
                                <Link onClick={() => signOut(auth).then(() => { })} to='/login'>
                                    <MenuItem>
                                        <ListItemIcon>
                                            <Logout fontSize="small" />
                                        </ListItemIcon>
                                        Logout
                                    </MenuItem>
                                </Link>
                                :
                                <Link to='/login'>
                                    <MenuItem>
                                        <ListItemIcon>
                                            <Login fontSize="small" />
                                        </ListItemIcon>
                                        Login
                                    </MenuItem>
                                </Link>
                            }
                        </Menu>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default InfoHeader;