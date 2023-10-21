import React, { useState } from "react";

const Sidebar = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    rating: null,
    price: null,
    name: "",
    inStock: false,
  });

  const handleFilterChange = () => {
    onFilterChange(filters);
  };

  return (
    <div className="bg-gray-100 p-4">
      <h2 className="text-lg font-semibold mb-3">Filters</h2>

      <div className="mb-3">
        <label htmlFor="rating">Rating</label>
        <select
          id="rating"
          className="w-full border border-gray-300 p-1"
          onChange={(e) => setFilters({ ...filters, rating: e.target.value })}
        >
          <option value="">Any</option>
          <option value="5">5 stars</option>
          <option value="4">4 stars & up</option>
          <option value="3">3 stars & up</option>
          <option value="2">2 stars & up</option>
          <option value="1">1 star & up</option>
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="price">Price</label>
        <input
          id="price"
          type="number"
          placeholder="Max price"
          className="w-full border border-gray-300 p-1"
          onChange={(e) => setFilters({ ...filters, price: e.target.value })}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="name">Product Name</label>
        <input
          id="name"
          type="text"
          placeholder="Product name"
          className="w-full border border-gray-300 p-1"
          onChange={(e) => setFilters({ ...filters, name: e.target.value })}
        />
      </div>

      <div className="mb-3">
        <label>
          <input
            type="checkbox"
            onChange={(e) =>
              setFilters({ ...filters, inStock: e.target.checked })
            }
          />{" "}
          In Stock
        </label>
      </div>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={handleFilterChange}
      >
        Apply Filters
      </button>
    </div>
  );
};

export default Sidebar;
