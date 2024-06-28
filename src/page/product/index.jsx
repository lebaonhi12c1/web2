import React, { memo } from 'react';

const Product = memo(() => {
    return (
        <div>
            product details
        </div>
    );
});

export default Product;

Product.displayName = 'Product';