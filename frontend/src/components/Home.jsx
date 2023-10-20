import { useEffect, useReducer } from "react";
import { useCartContext } from "../context/context";
import { cartReducer, initialState } from "../context/reducers";

const Home = () => {
  const { products } = useCartContext();
  const [state, dispatch] = useReducer(cartReducer, {
    ...initialState,
    products: products ? products : [],
  });

  console.log(products);
  
  console.log(state);

  return <div>Home</div>;
};

export default Home;
