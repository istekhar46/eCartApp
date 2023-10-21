import React from "react";

const ItemCard = ({ product }) => {
  return (
    <>
      <div className="max-w-[15rem] rounded overflow-hidden shadow-lg h-[22rem]">
        <div className="px-6">
        <img
          className="w-full h-[10rem]"
          src={product?.image}
          alt="Sunset in the mountains"
        />
        </div>
        
        <div className="px-6 pt-3 h-[5rem] overflow-hidden">
          <div className="font-bold text-[12px] mb-2">{product.title}</div>
        </div>
        <div className="px-6 ">
          <p className="text-gray-700 text-base">Price: {product.price}$</p>
          <div className="">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-[10px] font-semibold text-gray-700 mr-2 mb-4">
             rating: {product.rating.rate}
            </span>
            <span className="text-[10px]">({product.rating.count})</span>
          </div>
          <button onClick={()=> console.log('clicked')} type="button" className="bg-primaryColor p-2 text-[10px] rounded-md font-bold text-white">
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ItemCard;
