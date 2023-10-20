import React, { useEffect, useReducer } from "react";
import { useCartContext } from "../context/context";
import { cartReducer, initialState } from "../context/reducers";
import ItemCard from "./ItemCard";
import Sidebar from "./Sidebar";

// import "./Home.css"; // Import your custom stylesheet

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
    <div className="container">
      <div className="sticky-sidebar">
        <Sidebar />
      </div>
      <div className="product-list">
        {state.products &&
          state.products.map((product) => (
            <div key={product.id} className="product-card">
              <ItemCard product={product} />
            </div>
            // <p className="product-card">hello</p>
          ))}
      </div>
    </div>
  );
};

export default Home;
