import React from "react";
import { FaSortAmountDownAlt, FaFilter } from "react-icons/fa"; // Importing React Icons
import './SearchHeader.css'
const SearchPageHeader = () => {
  return (
    <div className="container py-3 " dir="ltr">
      <div className="search-page-header">
        <div>
          <h5 className="font-semibold mb-1">Products</h5>
       
        </div>
        <form
          id="search-form"
          className="d-none d-lg-block"
          action="https://6valley.6amtech.com/products"
          method="GET"
        >
          <input type="hidden" name="data_from" value="best-selling" />
          <div className="sorting-item">
            <FaSortAmountDownAlt size={20} color="#D9D9D9" />
            <label className="for-sorting" htmlFor="sorting">
              <span>Sort by</span>
            </label>
            <select className="product-list-filter-on-viewpage">
              <option value="latest">Latest</option>
              <option value="low-high">Low to High Price</option>
              <option value="high-low">High to Low Price</option>
              <option value="a-z">A to Z Order</option>
              <option value="z-a">Z to A Order</option>
            </select>
          </div>
        </form>
        <div className="d-lg-none">
          <div className="filter-show-btn btn btn--primary py-1 px-2 m-0">
            <FaFilter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPageHeader;
