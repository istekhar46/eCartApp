import { createContext, useEffect, useState } from "react";
import axios from 'axios';

const CartContext = createContext();

const Context = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [isloading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(function (res) {
                setProducts(res.data);
                setIsLoading(false);
                console.log(res.data);
            })
    },[])

    return <CartContext.Provider value={products}>{children}</CartContext.Provider>
}

export default Context;
