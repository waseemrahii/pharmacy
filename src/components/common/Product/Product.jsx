

// // //////////////
// // import React from 'react';
// // import Sidebar from '../ProductSider';
// // import ProductCard from './ProductCard';
// // import './Product.css'

// // const categories = [
// //   {
// //     id: 13,
// //     name: "Health",
// //     subcategories: [{ id: 43, name: 'Clothing' }],
// //   },
// //   {
// //     id: 11,
// //     name: 'Medison',
// //     subcategories: [{ id: 41, name: 'Home Tools' }],
// //   },
// //   {
// //     id: 14,
// //     name: 'Surgary',
// //     subcategories: [{ id: 44, name: 'Sports' }],
// //   },
// // ];

// // const products = [
// //   {
// //     id: 5,
// //     name: 'Health',
// //     price: { original: 500, discounted: 450 },
// //     rating: 5,
// //     discount: '-10%',
// //     imageUrl:
// //       'https://giftspharmacy.com/wp-content/uploads/2024/08/PRHAug17-295.jpg',
// //     link: 'https://6valley.6amtech.com/product/test-6-Pg6Hpj',
// //   },
// //   {
// //     id: 1,
// //     name: 'Maternity"',
// //     price: { original: 500, discounted: 450 },
// //     rating: 5,
// //     discount: '-10%',
// //     imageUrl:
// //       'https://giftspharmacy.com/wp-content/uploads/2024/08/giftspharmacy-2-1024x585.png',
// //     link: 'https://6valley.6amtech.com/product/test-1-DcD1hE',
// //   },
// // ];

// // const LatestProducts = () => {
// //   return (
// //     <div className="container pb-5 mb-2 mb-md-4 rtl" dir="ltr">
// //       <div className="row">
// //         <Sidebar categories={categories} />
// //         <section className="col-lg-9">
// //           <div className="row" id="ajax-products">
// //             {products.map((product) => (
// //               <ProductCard key={product.id} product={product} />
// //             ))}
// //           </div>
// //         </section>
// //       </div>
// //     </div>
// //   );
// // };

// // export default LatestProducts;



// // src/components/LatestProducts.js
// import React from 'react';
// import Sidebar from '../ProductSider';
// import ProductCard from './ProductCard';
// import categories from '../Data/categories'; // Import categories
// import products from '../Data/products'; // Import products
// import './Product.css';

// const ProductCards = () => {
//   return (
//     <div className="container pb-5 mb-2 mb-md-4 rtl" dir="ltr">
//       <div className="row">
//         <Sidebar categories={categories} />
//         <section className="col-lg-9">
//           <div className="row" id="ajax-products">
//             {products.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default ProductCards;



// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import Sidebar from '../ProductSider';
// import ProductCard from './ProductCard';
// import { fetchProducts } from '../../redux/productSlice'; // Adjust path as necessary
// import { fetchCategories } from '../../redux/categorySlice'; // Adjust path as necessary
// import './Product.css';

// const ProductCards = () => {
//   const dispatch = useDispatch();
//   const { products, loading, error } = useSelector((state) => state.product); // Adjust path as necessary
//   const { categories } = useSelector((state) => state.category); // Adjust path as necessary

//   useEffect(() => {
//     dispatch(fetchProducts());
//     dispatch(fetchCategories()); // Fetch categories when component mounts
//   }, [dispatch]);

//   return (
//     <div className="container pb-5 mb-2 mb-md-4 rtl" dir="ltr">
//       <div className="row">
//         <Sidebar categories={categories} />
//         <section className="col-lg-9">
//           {loading && <p>Loading products...</p>}
//           {error && <p>Error loading products: {error}</p>}
//           <div className="row" id="ajax-products">
//             {products.map((product) => (
//               <ProductCard
//                 key={product._id}
//                 product={{
//                   id: product._id,
//                   name: product.name,
//                   price: {
//                     original: product.price,
//                     discounted: product.price, // Adjust this if there's a discounted price
//                   },
//                   rating: 5, // Set this if you have rating data
//                   discount: '', // Set this if you have discount data
//                   imageUrl: `http://localhost:3000/${product.thumbnail}`, // Adjust path if necessary
//                   link: `http://localhost:3000/products/${product._id}`, // Adjust path if necessary
//                 }}
//               />
//             ))}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default ProductCards;



/////////////// filter

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from '../ProductSider';
import ProductCard from './ProductCard';
import { fetchProducts } from '../../redux/productSlice'; // Adjust path as necessary
import { fetchCategories } from '../../redux/categorySlice'; // Adjust path as necessary
import './Product.css';

const ProductCards = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.product); // Adjust path as necessary
  const { categories } = useSelector((state) => state.category); // Adjust path as necessary
  
  // State to manage query parameters
  const [priceRange, setPriceRange] = useState('0-1000000');
  const [category, setCategory] = useState(null);
  const [sort, setSort] = useState('price');
  const [order, setOrder] = useState('asc');
  
  useEffect(() => {
    const fetchProductData = async () => {
      await dispatch(fetchProducts({
        priceRange,
        category,
        sort,
        order,
      }));
    };
    
    fetchProductData();
    dispatch(fetchCategories()); // Fetch categories when component mounts
  }, [dispatch, priceRange, category, sort, order]);

  const handleCategoryChange = (id) => {
    setCategory(id);
  };

  const handlePriceRangeChange = (min, max) => {
    setPriceRange(`${min}-${max}`);
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  const handleOrderChange = (e) => {
    setOrder(e.target.value);
  };

  return (
    <div className="container pb-5 mb-2 mb-md-4 rtl" dir="ltr">
      <div className="row">
        <Sidebar 
          categories={categories}
          onCategoryChange={handleCategoryChange}
          onPriceRangeChange={handlePriceRangeChange}
          onSortChange={handleSortChange}
          onOrderChange={handleOrderChange}
        />
        <section className="col-lg-9">
          {loading && <p>Loading products...</p>}
          {error && <p>Error loading products: {error}</p>}
          <div className="row" id="ajax-products">
            {products.map((product) => (
              <ProductCard
                key={product._id}
                product={{
                  id: product._id,
                  name: product.name,
                  price: {
                    original: product.price,
                    discounted: product.price, // Adjust this if there's a discounted price
                  },
                  rating: 5, // Set this if you have rating data
                  discount: '', // Set this if you have discount data
                  imageUrl: `http://localhost:3000/${product.thumbnail}`, // Adjust path if necessary
                  link: `http://localhost:3000/products/${product._id}`, // Adjust path if necessary
                }}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductCards;
