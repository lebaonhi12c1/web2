import React, { createContext, useState } from "react";

// Tạo một Context
export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
    const [product, setProduct] = useState({})

    return (
        <ProductContext.Provider value={{ product, setProduct }}>
            {children}
        </ProductContext.Provider>
    );
};
