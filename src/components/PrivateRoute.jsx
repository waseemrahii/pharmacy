// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux'; // Assuming you're using Redux for state management

// const PrivateRoute = ({ element: Component, ...rest }) => {
//   const isLoggedIn = useSelector(state => state.auth.isLoggedIn); 

//   return isLoggedIn ? (
//     <Component {...rest} />
//   ) : (
//     <Navigate to="/login" replace />
//   );
// };

// export default PrivateRoute;




import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ element: Component, ...rest }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const location = useLocation();

  if (isLoggedIn) {
    return <Component {...rest} />;
  }

  // Save the current path in the query parameters
  const redirectPath = location.pathname;
  return <Navigate to={`/login?redirect=${encodeURIComponent(redirectPath)}`} replace />;
};

export default PrivateRoute;
