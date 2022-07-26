import React, { useEffect, useState } from 'react';

const useAllProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://pacific-sea-83230.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return [products, setProducts]
};

export default useAllProducts;