import { useEffect, useReducer,} from "react";
import { useCartContext } from "../context/context";
import { cartReducer, initialState } from "../context/reducers";
import ItemCard from "./ItemCard";
import Sidebar from "./Sidebar";

const Home = () => {

  const { products, filterState, dispatchFilter } = useCartContext();

  const [state, dispatch] = useReducer(cartReducer, {
    ...initialState,
    products: products ? products : [],
  });
  
  const { sortByPrice, byRating, category } = filterState;

    const filterProducts = ()=>{
    let filterdProduct = state.products;
    if(sortByPrice){
      filterdProduct = filterdProduct.sort((a,b)=>( sortByPrice ==='lowTohigh' ?  a.price - b.price:b.price - a.price))
    }
    if(byRating){
      filterdProduct = filterdProduct.filter((item)=>item.rating >= byRating)
    }
    if(category !== 'All'){
      filterdProduct = filterdProduct.filter((item)=>item.category === category)
    }
    return filterdProduct
  }

  
  useEffect(() => {
    if (products) {
      dispatch({ type: "setProducts", payload: products });
    }
  }, [products]);
  
  return (
    <div className="flex flex-col lg:flex-row justify-between relative">
      <div className="lg:w-1/5 bg-gray-200 sticky_sidebar lg:block hidden shadow-md p-5">
        <Sidebar product={state.products} dispatchFilter={dispatchFilter}/>
      </div>
      <div className="lg:w-4/5 w-full flex flex-wrap justify-center items-center">
        {state.products &&
          filterProducts().map((product) => (
            <div key={product.id} className="w-[15rem] md:w-1/4 lg:w-1/5 m-2">
              <ItemCard product={product} state={state} dispatch={dispatch} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
