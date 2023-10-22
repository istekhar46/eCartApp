import { useCartContext } from "../context/context";
import { AiFillDelete } from "react-icons/ai";
import emptyCart from "../assets/img/pngwing.com.png";
import { useEffect, useState } from "react";

const Cart = () => {
  const { state, dispatch } = useCartContext();
  const [total, setTotal] = useState(0);

  const calcTotal = () => {
    const res = state.cart.reduce(
      (acc, curr) => acc + curr.price * curr.qty,
      0
    );
    setTotal(res);
  };

  useEffect(() => {
    calcTotal();
  }, [calcTotal]);


  return (
    <div className="bg-white p-4 shadow-md rounded-md h-[70vh]">
      <h2 className="text-2xl font-semibold mb-4 text-textColor">
        Shopping Cart
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <div className="md:col-span-1 ">
          {state.cart.length === 0 ? (
            <div className="flex justify-center items-center flex-col h-full">
              <figure>
                <img
                  className="lg:h-[10rem]"
                  src={emptyCart}
                  alt=""
                />
              </figure>
              <p className="text-textColor font-semibold">
                Your cart is empty.
              </p>
            </div>
          ) : (
            <ul>
              {state.cart.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between mb-2"
                >
                  <div className="flex lg:flex-row flex-col items-center justify-between mb-2 gap-2 text-textColor ">
                    <figure>
                      <img
                        className="max-h-[35px]"
                        src={item.thumbnail}
                        alt=""
                      />
                    </figure>
                    <p className="font-bold">{item.title}</p>
                    <p className="ml-2 font-semibold">Price: {item.price}$</p>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="border px-2 py-1 flex gap-2 rounded-md font-bold text-[16px]">
                      <button
                        type="button"
                        onClick={() =>
                          dispatch({ type: "incProduct", payload: item })
                        }
                      >
                        +
                      </button>
                      {item.qty}
                      <button
                        type="button"
                        onClick={() =>
                          dispatch({ type: "decProduct", payload: item })
                        }
                      >
                        -
                      </button>
                    </div>
                    <div className="text-textColor text-[24px]">
                      <button
                        type="button"
                        onClick={() =>
                          dispatch({ type: "removeProduct", payload: item })
                        }
                      >
                        <AiFillDelete />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="md:col-span-1">
          <div className="bg-gray-100 p-4 rounded-md">
            <h3 className="text-xl font-bold mb-4">Cart Summary</h3>
            <div className="flex justify-between font-semibold items-center mb-2">
              <p>Total Items:</p>
              <p>{state.cart.length}</p>
            </div>
            <div className="flex justify-between items-center mb-4 font-semibold">
              <p>Total Amount:</p>
              <p>${total}</p>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
