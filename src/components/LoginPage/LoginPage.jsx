// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import { login } from '../redux/authSlice';
// import { toast, ToastContainer } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';
// import 'react-toastify/dist/ReactToastify.css';

// const LoginPage = () => {
//   const dispatch = useDispatch();
//   const { error } = useSelector((state) => state.auth);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const resultAction = await dispatch(login({ email, password }));
//       if (login.fulfilled.match(resultAction)) {
//         toast.success('Login successful');
//         navigate('/');
//       } else {
//         toast.error(resultAction.payload || 'Invalid email or password');
//       }
//     } catch (error) {
//       toast.error('An error occurred during login');
//     }
//   };

//   return (
//     <div className="flex items-center container  justify-center min-h-screen bg-gray-100 p-4 mt-12">
//       <div className="bg-white p-6 rounded shadow-md w-full max-w-md lg:max-w-lg">
//         <ToastContainer />
//         <form onSubmit={handleLogin} className="space-y-4">
//           <div className="text-center ">
//             <h1 className="text-3xl font-bold">Sign in</h1>
//           </div>
//           <div className="form-group">
//             <label className="input-label" htmlFor="email">Your email</label>
//             <input
//               type="email"
//               className="form-control form-control-lg mb-4 p-3 rounded border border-gray-300 w-full"
//               id="email"
//               placeholder="user@gmail.com"
//               required
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label className="input-label" htmlFor="password">Password</label>
//             <div className="relative">
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 className="form-control form-control-lg mb-4 p-3 rounded border border-gray-300 w-full"
//                 id="password"
//                 placeholder="12345678"
//                 required
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <button
//                 type="button"
//                 className="absolute right-3 top-3 text-gray-500"
//                 onClick={togglePasswordVisibility}
//               >
//                 {showPassword ? <FaEyeSlash /> : <FaEye />}
//               </button>
//             </div>
//           </div>
//           {/* <div className="form-group mb-4">
//             <div className="custom-control custom-checkbox flex items-center gap-1">
//               <input type="checkbox" className="custom-control-input" id="rememberMe" name="remember" />
//               <label className="custom-control-label text-gray-500" htmlFor="rememberMe">Remember me</label>
//             </div>
//           </div> */}
//           {/* <div id="recaptcha_element" className="w-full mb-0" style={{ height: '100px' }}></div> */}
//           <button type="submit" className="btn btn-block p-3 rounded bg-green-300 hover:bg-green-200 hover:text-black text-white font-semibold mt-0">
//             Sign in
//           </button>
//           {error && <div className="text-red-500 text-center mt-4">{error}</div>}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;




import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { login } from '../redux/authSlice';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate, useLocation } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Extract the redirect path from the query parameters
  const queryParams = new URLSearchParams(location.search);
  const redirectPath = queryParams.get('redirect') || '/';

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const resultAction = await dispatch(login({ email, password }));
      if (login.fulfilled.match(resultAction)) {
        toast.success('Login successful');
        navigate(redirectPath); // Redirect to the originally requested page
      } else {
        toast.error(resultAction.payload || 'Invalid email or password');
      }
    } catch (error) {
      toast.error('An error occurred during login');
    }
  };

  return (
    <div className="flex items-center container justify-center min-h-screen bg-gray-100 p-4 mt-12">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md lg:max-w-lg">
        <ToastContainer />
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="text-center ">
            <h1 className="text-3xl font-bold">Sign in</h1>
          </div>
          <div className="form-group">
            <label className="input-label" htmlFor="email">Your email</label>
            <input
              type="email"
              className="form-control form-control-lg mb-4 p-3 rounded border border-gray-300 w-full"
              id="email"
              placeholder="user@gmail.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="input-label" htmlFor="password">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                className="form-control form-control-lg mb-4 p-3 rounded border border-gray-300 w-full"
                id="password"
                placeholder="12345678"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-gray-500"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-block p-3 rounded bg-green-300 hover:bg-green-200 hover:text-black text-white font-semibold mt-0"
          >
            Sign in
          </button>
          {error && <div className="text-red-500 text-center mt-4">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
