import { useReducer } from "react";
import { cartReducer, initialState } from "../context/reducers";
import { useCartContext } from "../context/context";

const ItemCard = ({ product}) => {

  const {state,dispatch} = useCartContext()

  return (
    <>
      <div className="max-w-[15rem] rounded overflow-hidden shadow-lg h-[22rem]">
        <div className="p-4 ">
          <img
            className="w-full h-[10rem]"
            src={product?.images[0]}
            alt="Sunset in the mountains"
          />
        </div>

        <div className="px-6 pt-3 overflow-hidden">
          <div className="font-bold text-[12px] mb-2">{product.title}</div>
        </div>
        <div className="px-6 ">
          <p className="text-gray-700 font-semibold text-[14px]">Price: {product.price}$</p>
          <div className="">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 mt-3 text-[10px] font-semibold text-gray-700 mr-2 mb-4">
              rating: {product.rating}
            </span>
            {/* <span className="text-[10px]">({product.rating.count})</span> */}
          </div>
          {state.cart.some((item) => item.id === product.id) ? (
            <>
              <button
                onClick={()=> dispatch({ type: "removeProduct", payload: product })}
                type="button"
                className="bg-textColor p-2 text-[10px] rounded-md font-bold text-white"
              >
                Remove Item
              </button>
            </>
          ) : (
            <>
              <button
                onClick={()=> dispatch({ type: "addProduct", payload: product })}  
                type="button"
                className="bg-primaryColor p-2 text-[10px] rounded-md font-bold text-white"
              >
                Add to Cart
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ItemCard;
