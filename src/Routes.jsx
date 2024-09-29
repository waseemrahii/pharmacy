import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Login from './pages/Login/Login.jsx';
import About from './pages/About/About.jsx';
import GiftPage from './pages/GifPage/GiftPage.jsx';
import ProductDetail from './pages/ProductDetail/productDetail.jsx';
import VendorRegistration from './components/auth/Signup.jsx';
import VendorList from './pages/AllVendor/VendorList.jsx';
import Contact_Page from './pages/Contact/Contact_Page.jsx';
import Pharmacy from './pages/Contact/Parmacy.jsx';
import Cart from './components/Cart/Cart.jsx';
import Checkout from './components/Cart/Checkout.jsx';
import SuccessPage from './components/Cart/Success.jsx';
import LoginPage from './components/LoginPage/LoginPage.jsx';
import VendorProduct from './components/common/Product/VendorProduct.jsx';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gifts" element={<GiftPage />} />
      <Route path="/products" element={<VendorProduct />} /> 
         <Route path="/login" element={<LoginPage />} />
      <Route path="/pharmacy" element={<Pharmacy />} />
      <Route path="/about" element={<About />} />
      <Route path="/partners" element={<VendorList />} />
      <Route  path="/product/:id" element={<ProductDetail />} />
      <Route path="/membership" element={<VendorRegistration />} />
      <Route path="/contact" element={<Contact_Page />} />
      <Route path="/cart" element={<Cart /> } />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/success" element={<SuccessPage />} />
    </Routes>
  );
}

export default AppRoutes;




// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Home from './pages/Home/Home.jsx';
// import LoginPage from './components/LoginPage/LoginPage.jsx';
// import About from './pages/About/About.jsx';
// import GiftPage from './pages/GifPage/GiftPage.jsx';
// import ProductDetail from './pages/ProductDetail/productDetail.jsx';
// import VendorRegistration from './components/auth/Signup.jsx';
// import VendorList from './pages/AllVendor/VendorList.jsx';
// import Contact_Page from './pages/Contact/Contact_Page.jsx';
// import Pharmacy from './pages/Contact/Parmacy.jsx';
// import Cart from './components/Cart/Cart.jsx';
// import Checkout from './components/Cart/Checkout.jsx';
// import SuccessPage from './components/Cart/Success.jsx';
// import PrivateRoute from './components/PrivateRoute.jsx';

// function AppRoutes() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/gifts" element={<GiftPage />} />
//       <Route path="/login" element={<LoginPage />} />
//       <Route path="/pharmacy" element={<Pharmacy />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/partners" element={<VendorList />} />
//       <Route path="/product/:id" element={<ProductDetail />} />
//       <Route path="/membership" element={<VendorRegistration />} />
//       <Route path="/contact" element={<Contact_Page />} />
//       <Route
//         path="/cart"
//         element={<PrivateRoute element={Cart} />} // Use PrivateRoute for Cart
//       />
//       <Route
//         path="/checkout"
//         element={<PrivateRoute element={Checkout} />} // Use PrivateRoute for Checkout
//       />
//       <Route path="/success" element={<SuccessPage />} />
//     </Routes>
//   );
// }

// export default AppRoutes;
