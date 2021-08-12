import React, { useState, useEffect } from 'react';
import { getProducts } from './products';
import ProductData from './ProductData'

import Grid from '@material-ui/core/Grid';


function ProductComponent() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        (async () => {
            const results = await getProducts();
            console.log(results);
            setProducts(results);
        })()
    }, [setProducts])


    return (
        <>
        {products.map((product, index) => (
            <Grid key={index} item xs={6} md={3} align='center'>
                <ProductData data={product} />
             </Grid>
             ))}
        </>
    );
}

export default ProductComponent;
