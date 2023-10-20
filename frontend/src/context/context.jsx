import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import axios from "axios";
import { cartReducer } from "./reducers";

const CartContext = createContext();

const Context = ({ children }) => {
  const [products, setProducts] = useState([]);

  const fetch = async () => {
    return await axios.get("https://fakestoreapi.com/products");
  };

  useEffect(() => {
    fetch().then((res) => setProducts(res.data));
  }, []);

  return (
    <CartContext.Provider value={{ products }}>{children}</CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};

export default Context;
