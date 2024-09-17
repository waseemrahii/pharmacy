
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../../components/redux/cartSlice'; // Adjust import path as needed
import { toast, ToastContainer } from 'react-toastify'; // Import toast and ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import toast CSS
import { v4 as uuidv4 } from 'uuid'; // Add this line to import uuid

const ProductDetailCard = () => {
  const { id } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/products/${id}`);
        const data = await response.json();
        if (data.success) {
          setProduct(data.docs);
        }
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProductData();
  }, [id]);

  if (!product) {
    return <p>Loading product details...</p>;
  }

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % product.images.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const handleThumbnailClick = (index) => {
    setCurrentSlide(index);
  };

  const handleQuantityChange = (change) => {
    setQuantity((prev) => {
      const newQuantity = prev + change;
      return newQuantity < 1 ? 1 : newQuantity;
    });
  };

  const handleAddToCart = () => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      toast.info('This item is already in your cart.');
      return;
    }

    const newCartItem = {
      ...product,
      quantity,
      totalPrice: quantity * product.price,
      id: uuidv4(), // Add a unique identifier for each item
    };
    dispatch(addToCart(newCartItem));
    toast.success(`${product.name} has been added to your cart.`);
  };

  const totalPrice = (quantity * product.price).toFixed(2);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 mt-28">
      {/* Product image carousel and thumbnails */}
      <div className="relative">
        <div id="mainCarousel" className="carousel w-full">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="w-full h-full object-cover"
                src={`http://localhost:3000/${product.images[currentSlide]}`}
                alt={product.name}
              />
            </div>
          </div>
          {product.images.length > 1 && (
            <>
              <button
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#1EBEB6] text-white rounded-full p-2 m-2"
                onClick={handlePrevSlide}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6">
                  <path d="M15 3l-9 9 9 9"></path>
                </svg>
              </button>
              <button
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#1EBEB6] text-white rounded-full p-2 m-2"
                onClick={handleNextSlide}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6">
                  <path d="M9 3l9 9-9 9"></path>
                </svg>
              </button>
            </>
          )}
        </div>
        <div id="thumbCarousel" className="carousel w-full mt-4">
          <div className="carousel-inner flex gap-3 ">
            {product.images.map((src, index) => (
              <div
                key={index}
                className={`carousel-item ${index === currentSlide ? 'active' : ''}`}
                onClick={() => handleThumbnailClick(index)}
              >
                <img
                  className="w-24 h-24 object-cover cursor-pointer"
                  src={`http://localhost:3000/${src}`}
                  alt={`Thumbnail ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product details */}
      <div className="p-4 border rounded-lg shadow-lg bg-white">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <div className="flex items-center mb-4">
          <span className="flex space-x-1 text-yellow-400">
            {[...Array(5)].map((_, index) => (
              <i key={index} className="fas fa-star"></i>
            ))}
          </span>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-sm">Available</span>
        </div>
        <h4 className="text-lg font-semibold mb-4">
          Price: <span className="text-[#1EBEB6]">${product.price.toFixed(2)}</span>
        </h4>
        <p className="text-gray-700 mb-4">{product.description.replace(/<\/?[^>]+(>|$)/g, "")}</p>
        <h5 className="text-md font-medium mb-2">
          Category: <span className="text-gray-600">{product?.category?.name}</span>
        </h5>
        <h5 className="text-md font-medium mb-4">
          SKU: <span className="text-gray-600">{product.sku}</span>
        </h5>
        <div className="flex items-center mb-4">
          <h5 className="mr-4">Quantity:</h5>
          <div className="flex items-center space-x-2">
            <button
              className="btn btn-outline btn-sm"
              style={{ backgroundColor: '#1EBEB6', color: 'white' }}
              onClick={() => handleQuantityChange(-1)}
            >
              -
            </button>
            <input
              type="number"
              className="input input-bordered w-24 text-center"
              value={quantity}
              readOnly
            />
            <button
              className="btn btn-outline btn-sm"
              style={{ backgroundColor: '#1EBEB6', color: 'white' }}
              onClick={() => handleQuantityChange(1)}
            >
              +
            </button>
          </div>
        </div>
        <h5 className="text-lg font-semibold mb-4">
          Total Price: <span className="text-[#1EBEB6]">${totalPrice}</span>
        </h5>
        <button
          className="btn btn-primary w-full mt-4"
          style={{ backgroundColor: '#1EBEB6', borderColor: '#1EBEB6' }}
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>

      {/* Product details tabs */}
      <div className="mt-12 container">
        <div className="navigator mb-4">
          <button
            className={`tab ${activeTab === 'description' ? 'active' : ''}`}
            onClick={() => setActiveTab('description')}
          >
            Description
          </button>
          <button
            className={`tab ${activeTab === 'specification' ? 'active' : ''}`}
            onClick={() => setActiveTab('specification')}
          >
            Specification
          </button>
          <button
            className={`tab ${activeTab === 'review' ? 'active' : ''}`}
            onClick={() => setActiveTab('review')}
          >
            Review
          </button>
        </div>
        <div className="content">
          {activeTab === 'description' && (
            <div className="description">
              <p>{product.description}</p>
            </div>
          )}
          {activeTab === 'specification' && (
            <div className="specification">
              <p>{product.specification}</p>
            </div>
          )}
          {activeTab === 'review' && (
            <div className="review">
              <p>{product.review}</p>
            </div>
          )}
        </div>
      </div>

      {/* ToastContainer to display notifications */}
      <ToastContainer />
    </div>
  );
};

export default ProductDetailCard;


// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { addToCart } from '../../../../components/redux/cartSlice'; // Adjust import path as needed
// import { toast, ToastContainer } from 'react-toastify'; // Import toast and ToastContainer
// import 'react-toastify/dist/ReactToastify.css'; // Import toast CSS
// import { v4 as uuidv4 } from 'uuid'; // Add this line to import uuid

// const ProductDetailCard = () => {
//   const { id } = useParams(); // Get product ID from URL
//   const [product, setProduct] = useState(null);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [quantity, setQuantity] = useState(1);
//   const [activeTab, setActiveTab] = useState('description');
//   const dispatch = useDispatch();
//   const cartItems = useSelector((state) => state.cart.items);

//   useEffect(() => {
//     const fetchProductData = async () => {
//       try {
//         const response = await fetch(`http://localhost:3000/api/products/${id}`);
//         const data = await response.json();
//         if (data.success) {
//           setProduct(data.docs);
//         }
//       } catch (error) {
//         console.error('Error fetching product data:', error);
//       }
//     };

//     fetchProductData();
//   }, [id]);

//   if (!product) {
//     return <p>Loading product details...</p>;
//   }

//   const handleNextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % product.images.length);
//   };

//   const handlePrevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + product.images.length) % product.images.length);
//   };

//   const handleThumbnailClick = (index) => {
//     setCurrentSlide(index);
//   };

//   const handleQuantityChange = (change) => {
//     setQuantity((prev) => {
//       const newQuantity = prev + change;
//       return newQuantity < 1 ? 1 : newQuantity;
//     });
//   };

//   const handleAddToCart = () => {
//     const existingItem = cartItems.find((item) => item.id === product.id);
//     if (existingItem) {
//       toast.info('This item is already in your cart.');
//       return;
//     }

//     const newCartItem = {
//       ...product,
//       quantity,
//       totalPrice: quantity * product.price,
//       id: uuidv4(), // Add a unique identifier for each item
//     };
//     dispatch(addToCart(newCartItem));
//     toast.success(`${product.name} has been added to your cart.`);
//   };

//   const totalPrice = (quantity * product.price).toFixed(2);

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 mt-28">
//       {/* Product image carousel and thumbnails */}
//       <div className="relative">
//         <div id="mainCarousel" className="carousel w-full">
//           <div className="carousel-inner">
//             <div className="carousel-item active">
//               <img
//                 className="w-full h-full object-cover"
//                 src={`http://localhost:3000/${product.images[currentSlide]}`}
//                 alt={product.name}
//               />
//             </div>
//           </div>
//           {product.images.length > 1 && (
//             <>
//               <button
//                 className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#1EBEB6] text-white rounded-full p-2 m-2"
//                 onClick={handlePrevSlide}
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6">
//                   <path d="M15 3l-9 9 9 9"></path>
//                 </svg>
//               </button>
//               <button
//                 className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#1EBEB6] text-white rounded-full p-2 m-2"
//                 onClick={handleNextSlide}
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6">
//                   <path d="M9 3l9 9-9 9"></path>
//                 </svg>
//               </button>
//             </>
//           )}
//         </div>
//         <div id="thumbCarousel" className="carousel w-full mt-4">
//           <div className="carousel-inner flex gap-3 ">
//             {product.images.map((src, index) => (
//               <div
//                 key={index}
//                 className={`carousel-item ${index === currentSlide ? 'active' : ''}`}
//                 onClick={() => handleThumbnailClick(index)}
//               >
//                 <img
//                   className="w-24 h-24 object-cover cursor-pointer"
//                   src={`http://localhost:3000/${src}`}
//                   alt={`Thumbnail ${index + 1}`}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Product details */}
//       <div className="p-4 border rounded-lg shadow-lg bg-white">
//         <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
//         <div className="flex items-center mb-4">
//           <span className="flex space-x-1 text-yellow-400">
//             {[...Array(5)].map((_, index) => (
//               <i key={index} className="fas fa-star"></i>
//             ))}
//           </span>
//         </div>
//         <div className="flex flex-wrap gap-2 mb-4">
//           <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-sm">Available</span>
//         </div>
//         <h4 className="text-lg font-semibold mb-4">
//           Price: <span className="text-[#1EBEB6]">${product.price.toFixed(2)}</span>
//         </h4>
//         <p className="text-gray-700 mb-4">{product.description.replace(/<\/?[^>]+(>|$)/g, "")}</p>
//         <h5 className="text-md font-medium mb-2">
//           Category: <span className="text-gray-600">{product?.category?.name}</span>
//         </h5>
//         <h5 className="text-md font-medium mb-4">
//           SKU: <span className="text-gray-600">{product.sku}</span>
//         </h5>
//         <div className="flex items-center mb-4">
//           <h5 className="mr-4">Quantity:</h5>
//           <div className="flex items-center space-x-2">
//             <button
//               className="btn btn-outline btn-sm"
//               style={{ backgroundColor: '#1EBEB6', color: 'white' }}
//               onClick={() => handleQuantityChange(-1)}
//             >
//               -
//             </button>
//             <span className="text-lg">{quantity}</span>
//             <button
//               className="btn btn-outline btn-sm"
//               style={{ backgroundColor: '#1EBEB6', color: 'white' }}
//               onClick={() => handleQuantityChange(1)}
//             >
//               +
//             </button>
//           </div>
//         </div>
//         <h5 className="text-lg font-semibold mb-4">
//           Total Price: <span className="text-[#1EBEB6]">${totalPrice}</span>
//         </h5>
//         <button
//           className="w-full py-2 bg-[#1EBEB6] text-white rounded-lg hover:bg-green-600"
//           onClick={handleAddToCart}
//         >
//           Add to Cart
//         </button>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default ProductDetailCard;



