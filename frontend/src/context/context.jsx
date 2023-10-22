import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import axios from "axios";
import { cartReducer,initialState } from "./reducers";

const CartContext = createContext();

const Context = ({ children }) => {
  const [products, setProducts] = useState([]);

  const fetch = async () => {
    return await axios.get("https://dummyjson.com/products");
  };

  useEffect(() => {
    fetch().then((res) => setProducts(res.data.products));
  }, []);
  const [state, dispatch] = useReducer(cartReducer, {
    ...initialState,
  });
  return (
    <CartContext.Provider value={{ products,state , dispatch }}>{children}</CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};

export default Context;
