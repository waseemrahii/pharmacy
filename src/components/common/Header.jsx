
// import React, { useState } from 'react'; 
// import { Link } from 'react-router-dom';
// import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
// import './Header.css';

// function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [cartItems, setCartItems] = useState(3); // Set initial cart item count (example: 3)

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };

//   return (
//     <header className="text-white fixed w-full z-50 bg-teal-500 shadow-md overflow-hidden" style={{width:"100vw"}}>
//       <nav className="mx-auto flex items-center justify-between">
//         {/* Logo Section */}
//         <div className="text-lg font-bold flex-shrink-0">
//           <Link to="/" className="hover:text-yellow-300 transition duration-300 flex items-center gap-3">
//             <img src="/logo.png" alt="Logo" className="w-20 h-20 logo-rotate" />
//             <span className="hidden md:inline text-2xl font-extrabold custom-font">SHAIPS</span>
//           </Link>
//         </div>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex flex-grow items-center justify-center space-x-6">
//           <li><Link to="/" className="relative group hover:text-yellow-300 transition duration-300 text-lg font-medium">Home</Link></li>
//           <li><Link to="/about" className="relative group hover:text-yellow-300 transition duration-300 text-lg font-medium">About</Link></li>
//           <li><Link to="/gifts" className="relative group hover:text-yellow-300 transition duration-300 text-lg font-medium">Gifts</Link></li>
//           <li><Link to="/pharmacy" className="relative group hover:text-yellow-300 transition duration-300 text-lg font-medium">Pharmacy</Link></li>
//           <li><Link to="/partners" className="relative group hover:text-yellow-300 transition duration-300 text-lg font-medium">Stores</Link></li>
//           <li><Link to="/contact" className="relative group hover:text-yellow-300 transition duration-300 text-lg font-medium">Smart 100 Club</Link></li>
//         </ul>

//         {/* Desktop Buttons */}
//         <div className="hidden md:flex items-center space-x-4 header-nav-buttons">
//           <Link to="/cart" className="relative group hover:text-yellow-300 transition duration-300 flex items-center">
//             <FaShoppingCart className="text-2xl" />
//             {cartItems > 0 && (
//               <span className="absolute top-0 right-0 w-5 h-5 text-xs bg-red-500 text-white rounded-full flex items-center justify-center">
//                 {cartItems}
//               </span>
//             )}
//           </Link>
//           <Link to="/login" className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-900 transition duration-300 text-lg font-medium">Login</Link>
//           <Link to="/membership" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 hover:text-white transition duration-300 transform hover:scale-105 text-lg font-medium">Store Membership</Link>
//         </div>

//         {/* Mobile Icons */}
//         <div className="md:hidden flex items-center space-x-4">
//           <Link to="/cart" className="relative group hover:text-yellow-300 transition duration-300 flex items-center">
//             <FaShoppingCart className="text-2xl" />
//             {cartItems > 0 && (
//               <span className="absolute top-0 right-0 w-5 h-5 text-xs bg-red-500 text-white rounded-full flex items-center justify-center">
//                 {cartItems}
//               </span>
//             )}
//           </Link>
//           <button onClick={toggleMenu} className="text-white">
//             {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
//           </button>
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
//           <li><Link to="/" className="text-xl hover:text-yellow-300" onClick={closeMenu}>Home</Link></li>
//           <li><Link to="/about" className="text-xl hover:text-yellow-300" onClick={closeMenu}>About</Link></li>
//           <li><Link to="/gifts" className="text-xl hover:text-yellow-300" onClick={closeMenu}>Gifts</Link></li>
//           <li><Link to="/pharmacy" className="text-xl hover:text-yellow-300" onClick={closeMenu}>Pharmacy</Link></li>
//           <li><Link to="/partners" className="text-xl hover:text-yellow-300" onClick={closeMenu}>More Stores</Link></li>
//           <li><Link to="/contact" className="text-xl hover:text-yellow-300" onClick={closeMenu}>Smart 100 Club</Link></li>
//           <li><Link to="/login" className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-900 transition duration-300 text-lg font-medium" onClick={closeMenu}>Login</Link></li>
//           <li><Link to="/membership" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 hover:text-white transition duration-300 transform hover:scale-105 text-lg font-medium" onClick={closeMenu}>Store Membership</Link></li>
//         </ul>
//       </div>
//     </header>
//   );
// }

// export default Header;



import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState(3); // Set initial cart item count (example: 3)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className="text-white fixed w-full z-50 bg-teal-500 shadow-md overflow-hidden padding "
      style={{ width: "100vw" }}
    >
      <nav className="mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="text-lg font-bold flex-shrink-0">
          <Link
            to="/"
            className="hover:text-yellow-300 transition duration-300 flex items-center gap-3"
          >
            <img src="/logo.png" alt="Logo" className="w-20 h-20 logo-rotate" />
            <span className="hidden md:inline text-2xl font-extrabold custom-font">
              SHAIPS
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-grow items-center justify-center space-x-6">
          <li>
            <Link
              to="/"
              className="relative group hover:text-yellow-300 transition duration-300 text-lg font-medium"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="relative group hover:text-yellow-300 transition duration-300 text-lg font-medium"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/gifts"
              className="relative group hover:text-yellow-300 transition duration-300  text-lg font-medium"
            >
              Gifts
            </Link>
          </li>
          <li>
            <Link
              to="/pharmacy"
              className="relative group hover:text-yellow-300 transition duration-300 text-lg font-medium"
            >
              Pharmacy
            </Link>
          </li>
          <li>
            <Link
              to="/partners"
              className="relative group hover:text-yellow-300 transition duration-300 text-lg font-medium"
            >
              Stores
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="relative group hover:text-yellow-300 transition duration-300 text-lg font-medium"
            >
              Smart 100 Club
            </Link>
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4 header-nav-buttons">
          <Link
            to="/cart"
            className="relative group hover:text-yellow-300 transition duration-300 flex items-center"
          >
            <FaShoppingCart className="text-2xl" />
            {cartItems > 0 && (
              <span className="absolute top-0 right-0 w-5 h-5 text-xs bg-red-500 text-white rounded-full flex items-center justify-center">
                {cartItems}
              </span>
            )}
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
          <Link
            to="/cart"
            className="relative group hover:text-yellow-300 transition duration-300 flex items-center"
          >
            <FaShoppingCart className="text-2xl" />
            {cartItems > 0 && (
              <span className="absolute top-0 right-0 w-5 h-5 text-xs bg-red-500 text-white rounded-full flex items-center justify-center">
                {cartItems}
              </span>
            )}
          </Link>
          <button onClick={toggleMenu} className="text-white closemenue">
            {isMenuOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-teal-500 text-white transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden `}
        style={{ height: "auto", zIndex: 50 }}
      >
        <div className="flex justify-end p-4">
          <button onClick={closeMenu} className="text-white">
            <FaTimes className="text-2xl" />
          </button>
        </div>
        <ul className="flex flex-col items-center space-y-6 mt-12">
          <li>
            <Link
              to="/"
              className="text-xl hover:text-yellow-300"
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-xl hover:text-yellow-300"
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/gifts"
              className="text-xl hover:text-yellow-300"
              onClick={closeMenu}
            >
              Gifts
            </Link>
          </li>
          <li>
            <Link
              to="/pharmacy"
              className="text-xl hover:text-yellow-300"
              onClick={closeMenu}
            >
              Pharmacy
            </Link>
          </li>
          <li>
            <Link
              to="/partners"
              className="text-xl hover:text-yellow-300"
              onClick={closeMenu}
            >
              More Stores
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-xl hover:text-yellow-300"
              onClick={closeMenu}
            >
              Smart 100 Club
            </Link>
          </li>
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
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 hover:text-white transition duration-300 transform hover:scale-105 text-lg font-medium "
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