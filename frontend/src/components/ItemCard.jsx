import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useCartContext } from "../context/context";

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

  const images = product.images.slice(0,3)

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-lg">
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

      <div className="px-4 py-3">
        <h3 className="text-base font-semibold mb-2">{product.title}</h3>
        <p className="text-gray-700 font-semibold text-sm mb-2">
          Price: ${product.price}
        </p>
        <div className="flex items-center mb-3">
          <span className="bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2">
            Rating: {product.rating}
          </span>
        </div>
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
              className="bg-primaryColor p-2 text-xs rounded-md font-semibold text-white"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
