import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaFilter } from "react-icons/fa";
import { useCartContext } from "../context/context";

const Categories = [
  "smartphones",
  "laptops",
  "skincare",
  "fragrances",
  "women-dresses",
];

const Sidebar = () => {
  const {
    filterState: { sortByPrice, byRating },
    dispatchFilter,
  } = useCartContext();

  const [rating, setRating] = useState(0);

  const resetFilters = () => {
    dispatchFilter({ type: "resetFilters" });
    setRating(byRating);
  }

  return (
    <>
      <div className="flex flex-col gap-2">
        <span className="font-extrabold text-textColor flex items-center gap-1">
          Filters
          <FaFilter />
        </span>

        <span className="font-bold text-textColor">Categories</span>
        <span>
          <select
            name="inline1"
            id="group1"
            className="border p-2 rounded-md text-[14px] w-full focus:border-primaryColor focus:rounded-md focus:outline-none"
            onChange={(e) =>
              dispatchFilter({
                type: "sortByCategory",
                payload: e.target.value,
              })
            }
          >
            <option className="shadow-sm text-textColor font-semibold">
              All
            </option>
            {Categories.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </span>
        <span>
          <label htmlFor="" className="font-bold text-textColor">
            Rating:{" "}
          </label>
          <span className="flex my-2">
            {[...Array(5)].map((_, i) => (
              <span
                className="text-yellow-400"
                key={i}
                // onChange={() => setRating(i + 1)}
                onClick={() =>
                  dispatchFilter(
                    { type: "sortByRating", payload: i + 1 },
                    setRating(i + 1)
                  )
                }
              >
                {i < rating ? <AiFillStar /> : <AiOutlineStar />}
              </span>
            ))}
          </span>
        </span>

        <span className="font-semibold text-textColor">Price:</span>
        <span>
          <label htmlFor="inline4" className="font-semibold text-textColor">
            <input
              type="checkbox"
              name="group2"
              id="inline4"
              className="m-1 w-4 h-4 "
              checked={sortByPrice === "lowTohigh" ? true : false}
              onChange={() =>
                dispatchFilter({ type: "sortByPrice", payload: "lowTohigh" })
              }
            />
            Low to High
          </label>
        </span>
        <span>
          <label htmlFor="inline3" className="font-semibold text-textColor">
            <input
              type="checkbox"
              name="group2"
              id="inline3"
              className="m-1 w-4 h-4"
              onChange={() =>
                dispatchFilter({ type: "sortByPrice", payload: "highTolow" })
              }
              checked={sortByPrice === "highTolow" ? true : false}
            />
            High to Low
          </label>
        </span>
        <button
          type="button"
          className="bg-blue-500 rounded-md text-white text-[14px] p-1"
          onClick={resetFilters}
        >
          Clear Filters
        </button>
      </div>
    </>
  );
};

export default Sidebar;
