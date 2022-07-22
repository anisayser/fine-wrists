import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebaseInit';

const useUserRole = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [user] = useAuthState(auth);

    useEffect(() => {
        fetch(`https://pacific-sea-83230.herokuapp.com/user/${user?.email}`)
            .then(res => res.json())
            .then(data => setIsAdmin(data.admin))
    }, [user?.email])

    return [isAdmin];

};

export default useUserRole;