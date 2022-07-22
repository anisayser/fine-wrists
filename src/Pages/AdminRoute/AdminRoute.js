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
        return <h1 className='text-4xl text-white'>Loading......</h1>
    }

    if (user.email && isAdmin) {
        return children;
    } else {
        return console.log('Go and fuck yourself');
    }

};

export default AdminRoute;