
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// import { FaStar } from 'react-icons/fa';
// import './AllVendor.css';
// import ImageUrl from '../../ImageUrl';

// const StoreList = ({ stores }) => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   // Add a default value if store.name is undefined
//   const filteredStores = stores.filter((store) =>
//     (store.name || '').toLowerCase().includes(searchTerm.toLowerCase())
//   );
 
//   return (
//     <div className="container mb-md-4 __inline-65 mb-15">
//       <div className="bg-primary-light rounded-10 my-4 p-3 p-sm-4 bg-img style-FatQM" id="style-FatQM">
//         <div className="row g-2 align-items-center">
//           <div className="col-lg-8 col-md-6">
//             <div className="d-flex flex-column gap-1 text-primary">
//               <h4 className="mb-0 text-start fw-bold text-primary text-uppercase">All Stores</h4>
//               <p className="fs-14 fw-semibold mb-0">Find your desired stores and shop your favourite products</p>
//             </div>
//           </div>
//           <div className="col-lg-4 col-md-6">
//             <form onSubmit={(e) => e.preventDefault()}>
//               <div className="input-group">
//                 <input
//                   type="text"
//                   className="form-control rounded-10"
//                   placeholder="Search Store"
//                   value={searchTerm}
//                   onChange={handleSearch}
//                 />
//                 <div className="input-group-append">
//                   <button className="btn btn-outline-secondary rounded-10" type="submit">Search</button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       <div className="row">
//         <section className="col-lg-12">
//           <div className="row mx-n2 __min-h-200px">
//             {filteredStores.map((store, index) => (
//               <div key={index} className="col-lg-3 col-md-6 col-sm-12 px-2 pb-4 text-center">
//               {/* {console.log("user id :", store._id)} */}
//                 <Link to={`/products/?userId=${store._id}`} className="others-store-card text-capitalize">
//                   <div className="overflow-hidden other-store-banner">
//                     <img className="w-100 h-100 object-cover" alt="" 
//                       src={`${ImageUrl}/${store.banner}`} 
//                     />
//                   </div>
//                   <div className="name-area">
//                     <div className="position-relative">
//                       <div className="overflow-hidden other-store-logo rounded-full">
//                         <img className="rounded-full" alt="Store" 
//                           src={`${ImageUrl}/${store.logo}`} 
//                         />
//                       </div>
//                     </div>
//                     <div className="info pt-2">
//                       <h5 className="text-start">{store.firstName}</h5>
//                       {/* Uncomment if you want to display rating
//                       <div className="d-flex align-items-center">
//                         <h6 className="web-text-primary">{store.rating}</h6>
//                         <FaStar className="text-star mx-1" />
//                         <small>Rating</small>
//                       </div>
//                       */}
//                     </div>
//                   </div>
//                   <div className="info-area">
//                     <div className="info-item">
//                       <h6 className="web-text-primary">{store.totalProducts}</h6>
//                       <span>Products</span>
//                     </div>
//                   </div>
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default StoreList;



import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { FaStar } from 'react-icons/fa';
import './AllVendor.css';
import ImageUrl from '../../ImageUrl';

const StoreList = ({ stores }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Add a default value if store.name is undefined
  const filteredStores = stores.filter((store) =>
    (store.name || '').toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mb-md-4 mb-15">
      <div className="bg-primary-light rounded-10 my-4 p-3 p-sm-4" id="style-FatQM">
        <div className="row g-2 align-items-center">
          <div className="col-lg-8 col-md-6">
            <div className="d-flex flex-column gap-1 text-primary">
              <h4 className="mb-0 text-start fw-bold text-uppercase">All Stores</h4>
              <p className="fs-14 fw-semibold mb-0">Find your desired stores and shop your favourite products</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control rounded-10"
                  placeholder="Search Store"
                  value={searchTerm}
                  onChange={handleSearch}
                />
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary rounded-10" type="submit">Search</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="row">
        <section className="col-lg-12">
          <div className="flex flex-wrap">
            {filteredStores.map((store, index) => (
              <div key={index} className="col-lg-3 col-md-6 col-sm-12 px-2 pb-4 text-center">
                <Link to={`/products/?userId=${store._id}`} className="others-store-card text-capitalize">
                  <div className="overflow-hidden other-store-banner">
                    <img className="w-full h-48 object-cover" alt="" src={`${ImageUrl}/${store.banner}`} />
                  </div>
                  <div className="name-area">
                    <div className="position-relative">
                      <div className="overflow-hidden other-store-logo rounded-full">
                        <img className="rounded-full" alt="Store" src={`${ImageUrl}/${store.logo}`} />
                      </div>
                    </div>
                    <div className="info pt-2">
                      <h5 className="text-start">{store.firstName}</h5>
                    </div>
                  </div>
                  <div className="info-area">
                    <div className="info-item">
                      <h6 className="web-text-primary">{store.totalProducts}</h6>
                      <span>Products</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default StoreList;
