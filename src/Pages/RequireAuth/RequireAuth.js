import { Backdrop, CircularProgress } from '@mui/material';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebaseInit';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    if (loading) {
        return <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={true}

        >
            <CircularProgress />
        </Backdrop>
    }

    if (!user.email) {
        return <Navigate to='/login' state={{ from: location }}></Navigate>
    }

    return children;
};

export default RequireAuth;