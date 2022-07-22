import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebaseInit';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    if (loading) {
        return <h1 className='text-4xl text-white'>Loading......</h1>
    }

    if (!user.email) {
        return <Navigate to='/login' state={{ from: location }}></Navigate>
    }

    return children;
};

export default RequireAuth;