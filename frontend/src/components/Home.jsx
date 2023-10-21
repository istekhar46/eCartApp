import React, { useEffect, useReducer, useRef } from "react";
import { useCartContext } from "../context/context";
import { cartReducer, initialState } from "../context/reducers";
import ItemCard from "./ItemCard";
import Sidebar from "./Sidebar";

const Home = () => {
  const { products } = useCartContext();
  const sidebarRef = useRef(null);

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
    <div className="flex justify-between relative gap-10 ">
      <div className="bg-gray-200 sticky_sidebar" >
        <Sidebar />
      </div>
      <div className="w-4/5 flex flex-wrap justify-center items-center ">
        {state.products &&
          state.products.map((product) => (
           <div key={product.id} className="w-1/5 m-2">
             <ItemCard product={product} />

           </div>
            
          ))}
      </div>
    </div>
  );
};

export default Home;
