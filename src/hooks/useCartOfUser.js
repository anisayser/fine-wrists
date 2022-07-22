import React, { useCallback, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebaseInit';

const useCartOfUser = () => {
    const [cartLoading, setCartLoading] = useState(false);
    const [user] = useAuthState(auth);
    const [userCart, setUserCart] = useState([]);

    // const getCart = useCallback(() => {
    //     setCartLoading(true);

    //     const uri = `http://localhost:5000/usercart/${user?.email}`;
    //     fetch(uri)
    //         .then(res => res.json())
    //         .then(data => setUserCart(data))
    //         .finally(() => {
    //             setCartLoading(false)
    //         })
    // }, [user?.email])


    // useEffect(() => {
    //     getCart();
    // }, [getCart])


    // useEffect(() => {
    //     setCartLoading(true);
    //     const uri = `http://localhost:5000/usercart/${user?.email}`;
    //     fetch(uri)
    //         .then(res => res.json())
    //         .then(data => setUserCart(data))
    //         .finally(() => {
    //             setCartLoading(false)
    //         })
    // }, [user?.email])

    useEffect(() => {
        setCartLoading(true);
        const uri = `http://localhost:5000/usercart/${user?.email}`;
        fetch(uri)
            .then(res => res.json())
            .then(data => setUserCart(data))
            .finally(() => {
                setCartLoading(false)
            })
    }, [user?.email])


    return [userCart, setUserCart, cartLoading];

};

export default useCartOfUser;