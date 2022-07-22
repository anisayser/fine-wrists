import React, { useContext, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { CartContext } from '../App';
import auth from '../firebaseInit';

const useMyCartDelete = () => {

    const [user] = useAuthState(auth);

    const [deleteLoading, setDeleteLoading] = useState(false);
    const [cartValue, setCartValue] = useContext(CartContext);



    const handleCartDelete = (id, userCart, setUserCart) => {
        setDeleteLoading(true);

        fetch(`https://pacific-sea-83230.herokuapp.com/usercart/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    const remaining = cartValue.filter(cart => cart.productId !== id);
                    /*  // setUserCart(remaining); */
                    setCartValue(remaining);
                }
            }).finally(() => {
                setDeleteLoading(false);

            })
    }

    return [handleCartDelete, deleteLoading]

};

export default useMyCartDelete;