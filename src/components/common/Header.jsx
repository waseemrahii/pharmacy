


// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaShoppingCart } from 'react-icons/fa'; // Importing the cart icon

// function Header() {
//   return (
//     <header className="text-white p-4" style={{ position: "fixed", width: "100%", zIndex: "100", background: "#1EBEB6" }}>
//       <nav className="container mx-auto flex items-center justify-between">
//         <div className="text-lg font-bold">
//           <Link to="/" className="hover:text-yellow-300 transition duration-300 flex justify-center items-center gap-3">
//             <img src="/logo.png" alt="Logo" style={{ width: "70px", height: "60px" }} />
//             SHAIPS
//           </Link>
//         </div>
//         <ul className="flex-grow flex items-center justify-center space-x-6">
//           <li>
//             <Link to="/" className="relative group hover:text-yellow-300 transition duration-300">
//               Home
//               <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
//             </Link>
//           </li>
//           <li>
//             <Link to="/about" className="relative group hover:text-yellow-300 transition duration-300">
//               About
//               <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
//             </Link>
//           </li>
//           <li>
//             <Link to="/gifts" className="relative group hover:text-yellow-300 transition duration-300">
//               Gifts
//               <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
//             </Link>
//           </li>
//           <li>
//             <Link to="/pharmacy" className="relative group hover:text-yellow-300 transition duration-300">
//               Pharmacy
//               <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
//             </Link>
//           </li>
//           <li>
//             <Link to="/partners" className="relative group hover:text-yellow-300 transition duration-300">
//               More Stores
//               <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
//             </Link>
//           </li>
//           <li>
//             <Link to="/contact" className="relative group hover:text-yellow-300 transition duration-300">
//               Smart 100 Club
//               <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
//             </Link>
//           </li>
//         </ul>
//         <div className="flex items-center space-x-4">
//           <Link to="/cart" className="relative group hover:text-yellow-300 transition duration-300 flex items-center">
//             <FaShoppingCart className="text-2xl" />
//             {/* <span className="ml-2">Cart</span>/ */}
//           </Link>
//           <Link
//             to="/login"
//             className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-900 transition duration-300"
//           >
//             Login
//           </Link>
//           <Link
//             to="/membership"
//             className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 hover:text-white transition duration-300 transform hover:scale-105"
//           >
//             Store Membership
//           </Link>
//         </div>
//       </nav>
//     </header>
//   );
// }

// export default Header;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa'; // Importing icons

// function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };

//   return (
//     <header className="text-white p-4 fixed w-full z-50 bg-teal-500 shadow-md">
//       <nav className="container mx-auto flex items-center justify-between">
//         {/* Logo Section */}
//         <div className="text-lg font-bold flex-shrink-0">
//           <Link to="/" className="hover:text-yellow-300 transition duration-300 flex items-center gap-3">
//             <img src="/logo.png" alt="Logo" className="w-16 h-14" />
//             <span className="hidden md:inline text-xl font-semibold">SHAIPS</span>
//           </Link>
//         </div>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex flex-grow items-center justify-center space-x-6">
//           <li>
//             <Link to="/" className="relative group hover:text-yellow-300 transition duration-300 text-lg font-medium">
//               Home
//               <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
//             </Link>
//           </li>
//           <li>
//             <Link to="/about" className="relative group hover:text-yellow-300 transition duration-300 text-lg font-medium">
//               About
//               <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
//             </Link>
//           </li>
//           <li>
//             <Link to="/gifts" className="relative group hover:text-yellow-300 transition duration-300 text-lg font-medium">
//               Gifts
//               <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
//             </Link>
//           </li>
//           <li>
//             <Link to="/pharmacy" className="relative group hover:text-yellow-300 transition duration-300 text-lg font-medium">
//               Pharmacy
//               <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
//             </Link>
//           </li>
//           <li>
//             <Link to="/partners" className="relative group hover:text-yellow-300 transition duration-300 text-lg font-medium">
//               More Stores
//               <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
//             </Link>
//           </li>
//           <li>
//             <Link to="/contact" className="relative group hover:text-yellow-300 transition duration-300 text-lg font-medium">
//               Smart 100 Club
//               <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
//             </Link>
//           </li>
//         </ul>

//         {/* Desktop Buttons */}
//         <div className="hidden md:flex items-center space-x-4">
//           <Link to="/cart" className="relative group hover:text-yellow-300 transition duration-300 flex items-center">
//             <FaShoppingCart className="text-2xl" />
//           </Link>
//           <Link
//             to="/login"
//             className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-900 transition duration-300 text-lg font-medium"
//           >
//             Login
//           </Link>
//           <Link
//             to="/membership"
//             className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 hover:text-white transition duration-300 transform hover:scale-105 text-lg font-medium"
//           >
//             Store Membership
//           </Link>
//         </div>

//         {/* Mobile Icons */}
//         <div className="md:hidden flex items-center space-x-4">
//           <button onClick={toggleMenu} className="text-white">
//             {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
//           </button>
//           <Link to="/cart" className="relative group hover:text-yellow-300 transition duration-300 flex items-center">
//             <FaShoppingCart className="text-2xl" />
//           </Link>
//         </div>
//       </nav>

//       {/* Mobile Menu Overlay */}
//       <div
//         className={`fixed inset-0 bg-teal-500 text-white transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}
//         style={{ height: 'auto', zIndex: 50 }} // Set height to auto by default
//       >
//         <div className="flex justify-end p-4">
//           <button onClick={closeMenu} className="text-white">
//             <FaTimes className="text-2xl" />
//           </button>
//         </div>
//         <ul className="flex flex-col items-center space-y-6 mt-12">
//           <li>
//             <Link to="/" className="text-xl hover:text-yellow-300" onClick={closeMenu}>
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/about" className="text-xl hover:text-yellow-300" onClick={closeMenu}>
//               About
//             </Link>
//           </li>
//           <li>
//             <Link to="/gifts" className="text-xl hover:text-yellow-300" onClick={closeMenu}>
//               Gifts
//             </Link>
//           </li>
//           <li>
//             <Link to="/pharmacy" className="text-xl hover:text-yellow-300" onClick={closeMenu}>
//               Pharmacy
//             </Link>
//           </li>
//           <li>
//             <Link to="/partners" className="text-xl hover:text-yellow-300" onClick={closeMenu}>
//               More Stores
//             </Link>
//           </li>
//           <li>
//             <Link to="/contact" className="text-xl hover:text-yellow-300" onClick={closeMenu}>
//               Smart 100 Club
//             </Link>
//           </li>

//           {/* Mobile Buttons */}
//           <li>
//             <Link
//               to="/login"
//               className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-900 transition duration-300 text-lg font-medium"
//               onClick={closeMenu}
//             >
//               Login
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/membership"
//               className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 hover:text-white transition duration-300 transform hover:scale-105 text-lg font-medium"
//               onClick={closeMenu}
//             >
//               Store Membership
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </header>
//   );
// }

// export default Header;




// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa'; // Importing icons
// import './Header.css'; // Make sure to import the CSS

// function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };

//   return (
//     <header className="text-white p-4 fixed w-full z-50 bg-teal-500 shadow-md">
//       <nav className="container mx-auto flex items-center justify-between">
//         {/* Logo Section */}
//         <div className="text-lg font-bold flex-shrink-0">
//           <Link to="/" className="hover:text-yellow-300 transition duration-300 flex items-center gap-3">
//             <img src="/logo.png" alt="Logo" className="w-16 h-14 logo-rotate" />
//             <span className="hidden md:inline text-xl font-semibold">SHAIPS</span>
//           </Link>
//         </div>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex flex-grow items-center justify-center space-x-6">
//           <li>
//             <Link to="/" className="relative group hover:text-yellow-300 transition duration-300 text-lg font-medium">
//               Home
//               <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
//             </Link>
//           </li>
//           <li>
//             <Link to="/about" className="relative group hover:text-yellow-300 transition duration-300 text-lg font-medium">
//               About
//               <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
//             </Link>
//           </li>
//           <li>
//             <Link to="/gifts" className="relative group hover:text-yellow-300 transition duration-300 text-lg font-medium">
//               Gifts
//               <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
//             </Link>
//           </li>
//           <li>
//             <Link to="/pharmacy" className="relative group hover:text-yellow-300 transition duration-300 text-lg font-medium">
//               Pharmacy
//               <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
//             </Link>
//           </li>
//           <li>
//             <Link to="/partners" className="relative group hover:text-yellow-300 transition duration-300 text-lg font-medium">
//               More Stores
//               <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
//             </Link>
//           </li>
//           <li>
//             <Link to="/contact" className="relative group hover:text-yellow-300 transition duration-300 text-lg font-medium">
//               Smart 100 Club
//               <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
//             </Link>
//           </li>
//         </ul>

//         {/* Desktop Buttons */}
//         <div className="hidden md:flex items-center space-x-4">
//           <Link to="/cart" className="relative group hover:text-yellow-300 transition duration-300 flex items-center">
//             <FaShoppingCart className="text-2xl" />
//           </Link>
//           <Link
//             to="/login"
//             className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-900 transition duration-300 text-lg font-medium"
//           >
//             Login
//           </Link>
//           <Link
//             to="/membership"
//             className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 hover:text-white transition duration-300 transform hover:scale-105 text-lg font-medium"
//           >
//             Store Membership
//           </Link>
//         </div>

//         {/* Mobile Icons */}
//         <div className="md:hidden flex items-center space-x-4">
//           <button onClick={toggleMenu} className="text-white">
//             {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
//           </button>
//           <Link to="/cart" className="relative group hover:text-yellow-300 transition duration-300 flex items-center">
//             <FaShoppingCart className="text-2xl" />
//           </Link>
//         </div>
//       </nav>

//       {/* Mobile Menu Overlay */}
//       <div
//         className={`fixed inset-0 bg-teal-500 text-white transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}
//         style={{ height: 'auto', zIndex: 50 }} // Set height to auto by default
//       >
//         <div className="flex justify-end p-4">
//           <button onClick={closeMenu} className="text-white">
//             <FaTimes className="text-2xl" />
//           </button>
//         </div>
//         <ul className="flex flex-col items-center space-y-6 mt-12">
//           <li>
//             <Link to="/" className="text-xl hover:text-yellow-300" onClick={closeMenu}>
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/about" className="text-xl hover:text-yellow-300" onClick={closeMenu}>
//               About
//             </Link>
//           </li>
//           <li>
//             <Link to="/gifts" className="text-xl hover:text-yellow-300" onClick={closeMenu}>
//               Gifts
//             </Link>
//           </li>
//           <li>
//             <Link to="/pharmacy" className="text-xl hover:text-yellow-300" onClick={closeMenu}>
//               Pharmacy
//             </Link>
//           </li>
//           <li>
//             <Link to="/partners" className="text-xl hover:text-yellow-300" onClick={closeMenu}>
//               More Stores
//             </Link>
//           </li>
//           <li>
//             <Link to="/contact" className="text-xl hover:text-yellow-300" onClick={closeMenu}>
//               Smart 100 Club
//             </Link>
//           </li>

//           {/* Mobile Buttons */}
//           <li>
//             <Link
//               to="/login"
//               className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-900 transition duration-300 text-lg font-medium"
//               onClick={closeMenu}
//             >
//               Login
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/membership"
//               className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 hover:text-white transition duration-300 transform hover:scale-105 text-lg font-medium"
//               onClick={closeMenu}
//             >
//               Store Membership
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </header>
//   );
// }

// export default Header;



// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
// import './Header.css';

// function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };

//   return (
//     <header className="text-white p-4 fixed w-full z-50 bg-teal-500 shadow-md">
//       <nav className="container mx-auto flex items-center justify-between">
//         {/* Logo Section */}
//         <div className="text-lg font-bold flex-shrink-0">
//           <Link to="/" className="hover:text-yellow-300 transition duration-300 flex items-center gap-3">
//             <img src="/logo.png" alt="Logo" className="w-20 h-20 logo-rotate" />
//             <span className="hidden md:inline text-2xl font-extrabold custom-font">SHAIPS</span>
//           </Link>
//         </div>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex flex-grow items-center justify-center space-x-6">
//           <li>
//             <Link to="/" className="relative group hover:text-yellow-300 transition duration-300 text-lg font-medium">
//               Home
//               <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
//             </Link>
//           </li>
//           <li>
//             <Link to="/about" className="relative group hover:text-yellow-300 transition duration-300 text-lg font-medium">
//               About
//               <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
//             </Link>
//           </li>
//           <li>
//             <Link to="/gifts" className="relative group hover:text-yellow-300 transition duration-300 text-lg font-medium">
//               Gifts
//               <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
//             </Link>
//           </li>
//           <li>
//             <Link to="/pharmacy" className="relative group hover:text-yellow-300 transition duration-300 text-lg font-medium">
//               Pharmacy
//               <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
//             </Link>
//           </li>
//           <li>
//             <Link to="/partners" className="relative group hover:text-yellow-300 transition duration-300 text-lg font-medium">
//               Stores
//               <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
//             </Link>
//           </li>
//           <li>
//             <Link to="/contact" className="relative group hover:text-yellow-300 transition duration-300 text-lg font-medium">
//               Smart 100 Club
//               <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
//             </Link>
//           </li>
//         </ul>

//         {/* Desktop Buttons */}
//         <div className="hidden md:flex items-center space-x-4">
//           <Link to="/cart" className="relative group hover:text-yellow-300 transition duration-300 flex items-center">
//             <FaShoppingCart className="text-2xl" />
//           </Link>
//           <Link
//             to="/login"
//             className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-900 transition duration-300 text-lg font-medium"
//           >
//             Login
//           </Link>
//           <Link
//             to="/membership"
//             className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 hover:text-white transition duration-300 transform hover:scale-105 text-lg font-medium"
//           >
//             Store Membership
//           </Link>
//         </div>

//         {/* Mobile Icons */}
//         <div className="md:hidden flex items-center space-x-4">
//           <button onClick={toggleMenu} className="text-white">
//             {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
//           </button>
//           <Link to="/cart" className="relative group hover:text-yellow-300 transition duration-300 flex items-center">
//             <FaShoppingCart className="text-2xl" />
//           </Link>
//         </div>
//       </nav>

//       {/* Mobile Menu Overlay */}
//       <div
//         className={`fixed inset-0 bg-teal-500 text-white transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}
//         style={{ height: 'auto', zIndex: 50 }}
//       >
//         <div className="flex justify-end p-4">
//           <button onClick={closeMenu} className="text-white">
//             <FaTimes className="text-2xl" />
//           </button>
//         </div>
//         <ul className="flex flex-col items-center space-y-6 mt-12">
//           <li>
//             <Link to="/" className="text-xl hover:text-yellow-300" onClick={closeMenu}>
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/about" className="text-xl hover:text-yellow-300" onClick={closeMenu}>
//               About
//             </Link>
//           </li>
//           <li>
//             <Link to="/gifts" className="text-xl hover:text-yellow-300" onClick={closeMenu}>
//               Gifts
//             </Link>
//           </li>
//           <li>
//             <Link to="/pharmacy" className="text-xl hover:text-yellow-300" onClick={closeMenu}>
//               Pharmacy
//             </Link>
//           </li>
//           <li>
//             <Link to="/partners" className="text-xl hover:text-yellow-300" onClick={closeMenu}>
//               More Stores
//             </Link>
//           </li>
//           <li>
//             <Link to="/contact" className="text-xl hover:text-yellow-300" onClick={closeMenu}>
//               Smart 100 Club
//             </Link>
//           </li>

//           {/* Mobile Buttons */}
//           <li>
//             <Link
//               to="/login"
//               className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-900 transition duration-300 text-lg font-medium"
//               onClick={closeMenu}
//             >
//               Login
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/membership"
//               className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 hover:text-white transition duration-300 transform hover:scale-105 text-lg font-medium"
//               onClick={closeMenu}
//             >
//               Store Membership
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </header>
//   );
// }

// export default Header;



import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="text-white  fixed w-full z-50 bg-teal-500 shadow-md">
      <nav className="mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="text-lg font-bold flex-shrink-0">
          <Link to="/" className="hover:text-yellow-300 transition duration-300 flex items-center gap-3">
            <img src="/logo.png" alt="Logo" className="w-20 h-20 logo-rotate" />
            <span className="hidden md:inline text-2xl font-extrabold custom-font">SHAIPS</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-grow items-center justify-center space-x-6">
          <li>
            <Link to="/" className="relative group hover:text-yellow-300 transition duration-300 text-lg font-medium">
              Home
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          </li>
          <li>
            <Link to="/about" className="relative group hover:text-yellow-300 transition duration-300 text-lg font-medium">
              About
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          </li>
          <li>
            <Link to="/gifts" className="relative group hover:text-yellow-300 transition duration-300 text-lg font-medium">
              Gifts
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          </li>
          <li>
            <Link to="/pharmacy" className="relative group hover:text-yellow-300 transition duration-300 text-lg font-medium">
              Pharmacy
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          </li>
          <li>
            <Link to="/partners" className="relative group hover:text-yellow-300 transition duration-300 text-lg font-medium">
              Stores
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          </li>
          <li>
            <Link to="/contact" className="relative group hover:text-yellow-300 transition duration-300 text-lg font-medium">
              Smart 100 Club
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4 header-nav-buttons">
          <Link to="/cart" className="relative group hover:text-yellow-300 transition duration-300 flex items-center">
            <FaShoppingCart className="text-2xl" />
          </Link>
          <Link
            to="/login"
            className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-900 transition duration-300 text-lg font-medium"
          >
            Login
          </Link>
          <Link
            to="/membership"
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 hover:text-white transition duration-300 transform hover:scale-105 text-lg font-medium"
          >
            Store Membership
          </Link>
        </div>

        {/* Mobile Icons */}
        <div className="md:hidden flex items-center space-x-4">
        <Link to="/cart" className="relative group hover:text-yellow-300 transition duration-300 flex items-center">
            <FaShoppingCart className="text-2xl" />
          </Link>
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
         
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-teal-500 text-white transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}
        style={{ height: 'auto', zIndex: 50 }}
      >
        <div className="flex justify-end p-4">
          <button onClick={closeMenu} className="text-white">
            <FaTimes className="text-2xl" />
          </button>
        </div>
        <ul className="flex flex-col items-center space-y-6 mt-12">
          <li>
            <Link to="/" className="text-xl hover:text-yellow-300" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-xl hover:text-yellow-300" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/gifts" className="text-xl hover:text-yellow-300" onClick={closeMenu}>
              Gifts
            </Link>
          </li>
          <li>
            <Link to="/pharmacy" className="text-xl hover:text-yellow-300" onClick={closeMenu}>
              Pharmacy
            </Link>
          </li>
          <li>
            <Link to="/partners" className="text-xl hover:text-yellow-300" onClick={closeMenu}>
              More Stores
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-xl hover:text-yellow-300" onClick={closeMenu}>
              Smart 100 Club
            </Link>
          </li>

          {/* Mobile Buttons */}
          <li>
            <Link
              to="/login"
              className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-900 transition duration-300 text-lg font-medium"
              onClick={closeMenu}
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/membership"
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 hover:text-white transition duration-300 transform hover:scale-105 text-lg font-medium"
              onClick={closeMenu}
            >
              Store Membership
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
