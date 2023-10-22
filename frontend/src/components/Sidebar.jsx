import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Sidebar = () => {
  const [rating, setRating] = useState(0);
  const handleRating = (i) => {
    setRating(i+1);
    console.log(i)

  }
  return (
    <>
      <div className="flex flex-col gap-2">
        <span className="font-extrabold text-textColor">Filters</span>
        <span>
          <label htmlFor="inline1" className="font-semibold text-textColor">
            <input type="radio" name="group1" id="inline1" className="m-1 w-4 h-4 " />
            Ascending
          </label>
        </span>
        <span>
          <label htmlFor="inline2" className="font-semibold text-textColor">
            <input type="radio" name="group1" id="inline2" className="m-1 w-4 h-4" />
            Descending 
          </label>
        </span>
        <span>
          <label htmlFor="" className="font-bold text-textColor">
            Rating:{" "}
          </label>
          <span className="flex my-2">
            {[...Array(5)].map((_, i) => (
              <span className="text-yellow-400" key={i} onClick={()=> setRating(i+1)}>
                {i < rating ? <AiFillStar /> : <AiOutlineStar />}
              </span>
            ))}
          </span>
        </span>
        <button
          type="button"
          className="bg-textColor rounded-md text-white text-[14px] p-1"
        >
          Clear Filters
        </button>
      </div>
    </>
  );
};

export default Sidebar;
