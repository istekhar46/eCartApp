import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useCartContext } from "../context/context";
import { AiFillStar } from "react-icons/ai";

const ItemCard = ({ product }) => {
  const { state, dispatch } = useCartContext();

  const isItemInCart = state.cart.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    if (!isItemInCart) {
      dispatch({ type: "addProduct", payload: product });
    }
  };

  const handleRemoveFromCart = () => {
    if (isItemInCart) {
      dispatch({ type: "removeProduct", payload: product });
    }
  };

  const images = product.images.slice(0, 3);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div>
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Slider {...sliderSettings} className="mb-3 selection">
            {images.map((item, index) => (
              <div key={index} className="relative h-[15rem]">
                <img
                  className="object-cover w-full h-full"
                  src={item}
                  alt={`${product.title}-${index}`}
                />
              </div>
            ))}
          </Slider>
          <div className="px-5 pb-5">
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {product.title}
              </h5>
            </a>
            <div className="flex items-center mt-2.5 mb-5">
              {[...Array(Math.floor(product.rating)).keys()].map((_, i) => (
                <span className="text-yellow-400" key={i}>
                  <AiFillStar />
                </span>
              ))}

              <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                {product.rating}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                ${product.price}
              </span>
              <div className="flex justify-between items-center">
                {isItemInCart ? (
                  <button
                    onClick={handleRemoveFromCart}
                    className="bg-red-500 p-2 text-xs rounded-md font-semibold text-white"
                  >
                    Remove Item
                  </button>
                ) : (
                  <button
                    onClick={handleAddToCart}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-[12px] p-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemCard;
