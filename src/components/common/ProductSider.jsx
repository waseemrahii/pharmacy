// import React from 'react';
// import { TiDelete, TiArrowRight } from 'react-icons/ti';

// const Sidebar = ({ categories, onCategoryChange, onPriceRangeChange, onSortChange, onOrderChange }) => {
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
//                 <select className="form-control custom-select" id="searchByFilterValue" onChange={onSortChange}>
//                   <option value="" disabled>Choose</option>
//                   <option value="latest">Latest</option>
//                   {/* <option value="price">Price</option> */}
//                   {/* Add other sorting options as needed */}
//                 </select>
//               </label>
//               <select className="form-control custom-select mt-2" onChange={onOrderChange}>
//                 <option value="asc">Ascending</option>
//                 <option value="desc">Descending</option>
//               </select>
//             </div>
//           </div>
//         </div>

//         <div className="text-center">
//           <div className="__cate-side-title pt-0">
//             <span className="widget-title font-semibold">Price</span>
//           </div>
//           <div className="d-flex justify-content-between align-items-center __cate-side-price">
//             <input
//               className="bg-white cz-filter-search form-control form-control-sm appended-form-control"
//               type="number"
//               defaultValue="0"
//               min="0"
//               max="1000000"
//               placeholder="Min"
//               onChange={(e) => onPriceRangeChange(e.target.value, document.getElementById('maxPrice').value)}
//             />
//             <p className="m-0 w-80">To</p>
//             <input
//               id="maxPrice"
//               className="bg-white cz-filter-search form-control form-control-sm appended-form-control"
//               type="number"
//               defaultValue="1000000"
//               min="100"
//               max="1000000"
//               placeholder="Max"
//               onChange={(e) => onPriceRangeChange(document.getElementById('minPrice').value, e.target.value)}
//             />
//             <div className="d-flex justify-content-center align-items-center __number-filter-btn">
//               <a href="#search" className="action-search-products-by-price">
//                 <TiArrowRight />
//               </a>
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
//                 <div key={category._id} className="menu--caret-accordion">
//                   <div className="card-header flex-between" onClick={() => onCategoryChange(category._id)}>
//                     <label className="for-hover-label cursor-pointer get-view-by-onclick">
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


import React, { useState } from 'react';
import { TiDelete, TiArrowRight } from 'react-icons/ti';
import './ProductSideBar.css';
import { FaFilter } from 'react-icons/fa';

const Sidebar = ({ categories, onCategoryChange, onPriceRangeChange, onSortChange, onOrderChange }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCategoryChange = (categoryId) => {
    onCategoryChange(categoryId);
    setIsSidebarOpen(false); // Close sidebar after selecting a category
  };

  const handleSortChange = (e) => {
    onSortChange(e);
    setIsSidebarOpen(false); // Close sidebar after applying filter
  };

  const handleOrderChange = (e) => {
    onOrderChange(e);
    setIsSidebarOpen(false); // Close sidebar after selecting order
  };

  return (
    <>
      {/* Toggle Button for small screens */}
      <button className="toggle-sidebar-btn d-lg-none" onClick={toggleSidebar}>
        <FaFilter />
      </button>

      <aside className={`sidebar col-lg-3 col-md-3 col-sm-12 pr-2 z-0 ${isSidebarOpen ? 'open' : ''}`} id="SearchParameters">
        <div className="cz-sidebar" id="shop-sidebar">
          <div className="cz-sidebar-header bg-light">
            <button className="close ms-auto" type="button" onClick={toggleSidebar}>
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
                  <select className="form-control custom-select" id="searchByFilterValue" onChange={handleSortChange}>
                    <option value="" disabled>Choose</option>
                    <option value="latest">Latest</option>
                  </select>
                </label>
                <select className="form-control custom-select mt-2" onChange={handleOrderChange}>
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
                id="minPrice"
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
              <div className="text-center">
                <span className="widget-title font-semibold">Categories</span>
              </div>
              <div className="accordion flex-col mt-n1 __cate-side-price" id="shop-categories">
                {categories.map((category) => (
                  <div key={category._id} className="menu--caret-accordion">
                    <div className="card-header flex-between" onClick={() => handleCategoryChange(category._id)}>
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
        <div className="sidebar-overlay" onClick={toggleSidebar}></div>
      </aside>
    </>
  );
};

export default Sidebar;
