import { Backdrop, CircularProgress } from '@mui/material';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebaseInit';
import useUserRole from '../../hooks/useUserRole';

const AdminRoute = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [isAdmin] = useUserRole();
    const location = useLocation();

    if (loading) {
        return <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={true}

        >
            <CircularProgress />
        </Backdrop>
    }

    if (!user.email && isAdmin) {
        return console.log('Youre not admin');
    }


    return children;


};

export default AdminRoute;