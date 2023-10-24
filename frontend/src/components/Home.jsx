import { useEffect, useReducer, useState } from "react";
import { useCartContext } from "../context/context";
import { cartReducer, initialState } from "../context/reducers";
import ItemCard from "./ItemCard";
import Sidebar from "./Sidebar";

const Home = () => {
  const { products, filterState, dispatchFilter } = useCartContext();
  const [itemPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);

  const lastIndex = currentPage * itemPerPage;
  const firstIndex = lastIndex - itemPerPage;

  const noOfpages = products ? Math.ceil(products.length / itemPerPage) : [];
  const pages = [...Array(noOfpages + 1).keys()].slice(1);

  const [state, dispatch] = useReducer(cartReducer, {
    ...initialState,
    products: products ? products : [],
  });

  const { sortByPrice, byRating, category } = filterState;

  const filterProducts = () => {
    let filteredProduct = state.products;
    if (sortByPrice) {
      filteredProduct = filteredProduct.sort((a, b) =>
        sortByPrice === "lowTohigh" ? a.price - b.price : b.price - a.price
      );
    }
    if (byRating) {
      filteredProduct = filteredProduct.filter(
        (item) => item.rating >= byRating
      );
    }
    if (category !== "All") {
      filteredProduct = filteredProduct.filter(
        (item) => item.category === category
      );
    }
    return filteredProduct;
  };

  useEffect(() => {
    if (products) {
      dispatch({ type: "setProducts", payload: products });
    }
    if (category !== "All") {
      setCurrentPage(1);
    }
  }, [products,category]);

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="lg:w-1/5 bg-gray-200 sticky_sidebar lg:block hidden shadow-md p-5">
          <Sidebar product={state.products} dispatchFilter={dispatchFilter} />
        </div>
        <div className="lg:w-4/5 w-full flex flex-wrap justify-center items-center">
          {state.products &&
            filterProducts()
              .slice(firstIndex, lastIndex)
              .map((product) => (
                <div
                  key={product.id}
                  className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 m-2"
                >
                  <ItemCard
                    product={product}
                    state={state}
                    dispatch={dispatch}
                  />
                </div>
              ))}
        </div>
      </div>
      <div className="flex justify-center items-center mt-4">
        {pages.map((item, index) => (
          <button
            className="mx-1 px-3 py-2 border border-gray-300 rounded-full hover:bg-gray-100"
            type="button"
            key={index}
            onClick={() => setCurrentPage(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </>
  );
};

export default Home;
