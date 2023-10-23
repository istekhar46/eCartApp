import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import axios from "axios";
import { cartReducer, filterReducer, initialState, filterInitialState  } from "./reducers";

const CartContext = createContext();

const Context = ({ children }) => {
  const [products, setProducts] = useState([]);

  const fetch = async () => {
    return await axios.get("https://dummyjson.com/products?limit=30");
  };

  useEffect(() => {
    fetch().then((res) => setProducts(res.data.products));
  }, []);
  const [state, dispatch] = useReducer(cartReducer, {
    ...initialState,
  });

  const [filterState, dispatchFilter] = useReducer(filterReducer, {
    ...filterInitialState,
  })
  return (
    <CartContext.Provider value={{ products, state, dispatch,filterState,dispatchFilter }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};

export default Context;
