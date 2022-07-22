import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../App';

const useProducts = () => {
    const [productLoading, setProductLoading] = useState(false);
    const [products, setProducts] = useState([]);
    // const [products, setProducts] = useContext(ProductContext);
    useEffect(() => {
        setProductLoading(true)
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .finally(() => {
                setProductLoading(false);
            })
    }, [])

    return [products, setProducts, productLoading]
};

export default useProducts;