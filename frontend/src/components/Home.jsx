import React, { useEffect, useReducer, useRef } from "react";
import { useCartContext } from "../context/context";
import { cartReducer, initialState } from "../context/reducers";
import ItemCard from "./ItemCard";
import Sidebar from "./Sidebar";

const Home = () => {
  const { products } = useCartContext();

  const [state, dispatch] = useReducer(cartReducer, {
    ...initialState,
    products: products ? products : [],
  });
  useEffect(() => {
    if (products) {
      dispatch({ type: "setProducts", payload: products });
    }
  }, [products]);
  return (
    <div className="flex flex-col lg:flex-row justify-between relative gap-10">
      <div className="lg:w-1/5 bg-gray-200 sticky_sidebar lg:block hidden">
        <Sidebar />
      </div>
      <div className="lg:w-4/5 w-full flex flex-wrap justify-center items-center">
        {state.products &&
          state.products.map((product) => (
            <div key={product.id} className="w-[15rem] md:w-1/4 lg:w-1/5 m-2">
              <ItemCard product={product} state={state} dispatch={dispatch} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
