


import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import productReducer from './productSlice';
import vendorReducer from './vendorSlice'; 
import productCategorySlice from './categorySlice'; 
import cartReducer from './cartSlice'; 

const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    vendor: vendorReducer,
    category: productCategorySlice,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable state invariant middleware
    }),
});

export default store;
