

import React from 'react';
import { TiDelete, TiArrowRight } from 'react-icons/ti';

const Sidebar = ({ categories, onCategoryChange, onPriceRangeChange, onSortChange, onOrderChange }) => {
  return (
    <aside className="col-lg-3 hidden-xs col-md-3 col-sm-4 SearchParameters pr-2" id="SearchParameters">
      <div className="cz-sidebar" id="shop-sidebar">
        <div className="cz-sidebar-header bg-light">
          <button className="close ms-auto" type="button">
            <TiDelete />
          </button>
        </div>
        <div className="pb-0">
          <div className="text-center">
            <div className="__cate-side-title border-bottom">
              <span className="widget-title font-semibold">Filter</span>
            </div>
            <div className="__p-25-10 w-100 pt-4">
              <label className="w-100 opacity-75 text-nowrap for-sorting d-block mb-0 ps-0" htmlFor="sorting">
                <select className="form-control custom-select" id="searchByFilterValue" onChange={onSortChange}>
                  <option value="" disabled>Choose</option>
                  <option value="latest">Latest</option>
                  {/* <option value="price">Price</option> */}
                  {/* Add other sorting options as needed */}
                </select>
              </label>
              <select className="form-control custom-select mt-2" onChange={onOrderChange}>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="__cate-side-title pt-0">
            <span className="widget-title font-semibold">Price</span>
          </div>
          <div className="d-flex justify-content-between align-items-center __cate-side-price">
            <input
              className="bg-white cz-filter-search form-control form-control-sm appended-form-control"
              type="number"
              defaultValue="0"
              min="0"
              max="1000000"
              placeholder="Min"
              onChange={(e) => onPriceRangeChange(e.target.value, document.getElementById('maxPrice').value)}
            />
            <p className="m-0 w-80">To</p>
            <input
              id="maxPrice"
              className="bg-white cz-filter-search form-control form-control-sm appended-form-control"
              type="number"
              defaultValue="1000000"
              min="100"
              max="1000000"
              placeholder="Max"
              onChange={(e) => onPriceRangeChange(document.getElementById('minPrice').value, e.target.value)}
            />
            <div className="d-flex justify-content-center align-items-center __number-filter-btn">
              <a href="#search" className="action-search-products-by-price">
                <TiArrowRight />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-3 __cate-side-arrordion">
          <div>
            <div className="text-center __cate-side-title">
              <span className="widget-title font-semibold">Categories</span>
            </div>
            <div className="accordion mt-n1 __cate-side-price" id="shop-categories">
              {categories.map((category) => (
                <div key={category._id} className="menu--caret-accordion">
                  <div className="card-header flex-between" onClick={() => onCategoryChange(category._id)}>
                    <label className="for-hover-label cursor-pointer get-view-by-onclick">
                      {category.name}
                    </label>
                    <strong className="pull-right for-brand-hover">
                      <TiArrowRight className="fs-13" />
                    </strong>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar-overlay"></div>
    </aside>
  );
};

export default Sidebar;




// import React from 'react';
// import { TiDelete, TiArrowRight } from 'react-icons/ti';

// const Sidebar = ({ categories, onCategoryChange, onPriceRangeChange, onSortChange, onOrderChange }) => {
//   const handleCategoryClick = (id) => {
//     onCategoryChange(id);
//   };

//   const handlePriceRangeChange = () => {
//     const minPrice = document.getElementById('min-price').value;
//     const maxPrice = document.getElementById('max-price').value;
//     onPriceRangeChange(minPrice, maxPrice);
//   };

//   return (
//     <aside className="col-lg-3 hidden-xs col-md-3 col-sm-4 SearchParameters pr-2" id="SearchParameters">
//       <div className="cz-sidebar" id="shop-sidebar">
//         <div className="cz-sidebar-header bg-light">
//           <button className="close ms-auto" type="button">
//             <TiDelete />
//           </button>
//         </div>
//         <div className="pb-0">
//           <div className="text-center">
//             <div className="__cate-side-title border-bottom">
//               <span className="widget-title font-semibold">Filter</span>
//             </div>
//             <div className="__p-25-10 w-100 pt-4">
//               <label className="w-100 opacity-75 text-nowrap for-sorting d-block mb-0 ps-0" htmlFor="sorting">
//                 <select
//                   className="form-control custom-select"
//                   id="sorting"
//                   onChange={onSortChange}
//                 >
//                   <option value="price">Price</option>
//                   <option value="rating">Rating</option>
//                   <option value="name">Name</option>
//                 </select>
//               </label>
//               <label className="w-100 opacity-75 text-nowrap for-sorting d-block mb-0 ps-0" htmlFor="order">
//                 <select
//                   className="form-control custom-select"
//                   id="order"
//                   onChange={onOrderChange}
//                 >
//                   <option value="asc">Ascending</option>
//                   <option value="desc">Descending</option>
//                 </select>
//               </label>
//             </div>
//           </div>
//         </div>
//         <div className="text-center">
//           <div className="__cate-side-title pt-0">
//             <span className="widget-title font-semibold">Price</span>
//           </div>
//           <div className="d-flex justify-content-between align-items-center __cate-side-price">
//             <input
//               id="min-price"
//               className="bg-white cz-filter-search form-control form-control-sm appended-form-control"
//               type="number"
//               defaultValue="0"
//               min="0"
//               max="1000000"
//               placeholder="Min"
//             />
//             <p className="m-0 w-80">To</p>
//             <input
//               id="max-price"
//               className="bg-white cz-filter-search form-control form-control-sm appended-form-control"
//               type="number"
//               defaultValue="1000000"
//               min="100"
//               max="1000000"
//               placeholder="Max"
//             />
//             <div className="d-flex justify-content-center align-items-center __number-filter-btn">
//               <button onClick={handlePriceRangeChange} className="action-search-products-by-price">
//                 <TiArrowRight />
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className="mt-3 __cate-side-arrordion">
//           <div>
//             <div className="text-center __cate-side-title">
//               <span className="widget-title font-semibold">Categories</span>
//             </div>
//             <div className="accordion mt-n1 __cate-side-price" id="shop-categories">
//               {categories.map((category) => (
//                 <div key={category.id} className="menu--caret-accordion">
//                   <div className="card-header flex-between">
//                     <label
//                       className="for-hover-label cursor-pointer get-view-by-onclick"
//                       onClick={() => handleCategoryClick(category.id)}
//                     >
//                       {category.name}
//                     </label>
//                     <strong className="pull-right for-brand-hover">
//                       <TiArrowRight className="fs-13" />
//                     </strong>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="sidebar-overlay"></div>
//     </aside>
//   );
// };

// export default Sidebar;
