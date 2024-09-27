
// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchCategories } from '../../../components/redux/categorySlice'; // Adjust the import path as needed
// import { Link } from 'react-router-dom';
// import { FaArrowRight, FaEye } from 'react-icons/fa';
// import CardComponent from '../../../components/common/Card.jsx';

// import './GiftSection.css';

// const CardRow = () => {
//   const dispatch = useDispatch();
//   const { categories, loading, error } = useSelector((state) => state.category);
  
//   useEffect(() => {
//     dispatch(fetchCategories());
//   }, [dispatch]);

//   // Limit the number of categories to a maximum of 6
//   const limitedCategoryData = categories.slice(0, 6);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div className="container p-8">
//       <div className="flex flex-col items-center space-y-6 p-6">
//         {/* Title */}
//         <h1 className="heading">
//           See Our Huge Range of Gifts to Suit Your Health Condition
//         </h1>

//         {/* Card Row */}
//         <div className="flex flex-wrap justify-center gap-4">
//           {categories.map((category) => (
//             <div key={category._id} className="relative group overflow-hidden category">
//               <div className="relative transition-transform duration-300 group-hover:scale-110 rounded-lg overflow-hidden">
//                 <CardComponent
//                   imageSrc={`https://solorbackend-1.vercel.app/uploads/${category.logo}`} // Adjust the image path as needed
//                   title={category.name}
//                 />
//                 {/* Hover effect */}
//                 <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
//                   <FaEye className="text-white text-4xl" />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* "Learn More" Button */}
//         <div className="mt-6">
//           <Link
//             to="/gifts"
//             className="btn flex items-center space-x-2 text-white bg-teal-500 hover:bg-teal-600 rounded-lg py-2 px-4 transition-colors duration-300"
//           >
//             <span>See More</span>
//             <FaArrowRight className="ml-2 animate-bounce-horizontal" />
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CardRow;



import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '../../../components/redux/categorySlice'; // Adjust the import path as needed
import { Link } from 'react-router-dom';
import { FaArrowRight, FaEye } from 'react-icons/fa';
import CardComponent from '../../../components/common/Card.jsx';

import './GiftSection.css';

const CardRow = () => {
  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector((state) => state.category);
  
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  // Limit the number of categories to a maximum of 6
  const limitedCategoryData = categories.slice(0, 6);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container p-8">
      <div className="flex flex-col items-center space-y-6 p-6">
        {/* Title */}
        <h1 className="heading">
          See Our Huge Range of Gifts to Suit Your Health Condition
        </h1>

        {/* Card Row */}
        <div className="flex flex-wrap justify-center gap-4">
          {limitedCategoryData.map((category) => (
            <Link 
              key={category._id} 
              to={`/products?category=${category._id}`} // Link to the VendorProduct with category ID
              className="relative group overflow-hidden category"
            >
              <div className="relative transition-transform duration-300 group-hover:scale-110 rounded-lg overflow-hidden">
                <CardComponent
                  imageSrc={`https://solorbackend-1.vercel.app/uploads/${category.logo}`} // Adjust the image path as needed
                  title={category.name}
                />
                {/* Hover effect */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                  <FaEye className="text-white text-4xl" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* "Learn More" Button */}
        <div className="mt-6">
          <Link
            to="/gifts"
            className="btn flex items-center space-x-2 text-white bg-teal-500 hover:bg-teal-600 rounded-lg py-2 px-4 transition-colors duration-300"
          >
            <span>See More</span>
            <FaArrowRight className="ml-2 animate-bounce-horizontal" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardRow;
