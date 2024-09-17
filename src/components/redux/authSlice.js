// // src/redux/authSlice.js
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// const token = localStorage.getItem('token');
// const userData = localStorage.getItem('user');

// const initialState = {
//   isLoggedIn: !!token,
//   user: userData ? JSON.parse(userData) : null,
//   error: null,
//   token: token || null, // Add token to state
// };

// // Login async thunk
// export const login = createAsyncThunk(
//   'auth/login',
//   async ({ email, password }, thunkAPI) => {
//     try {
//       const response = await axios.post('http://localhost:3000/api/users/login', { email, password });
//       // Extract token and user from the API response
//       const { token, user } = response.data.docs;

//       localStorage.setItem('token', token);
//       localStorage.setItem('user', JSON.stringify(user));

//       return { token, user };
//     } catch (error) {
//       return thunkAPI.rejectWithValue('An error occurred during login.');
//     }
//   }
// );

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     logout: (state) => {
//       localStorage.removeItem('token');
//       localStorage.removeItem('user');
//       state.isLoggedIn = false;
//       state.user = null;
//       state.token = null; // Clear token from state
//       state.error = null;
//     },
//     setAuthToken: (state, action) => {
//       state.token = action.payload;
//       localStorage.setItem('token', action.payload);
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(login.fulfilled, (state, action) => {
//         state.isLoggedIn = true;
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.error = null;
//       })
//       .addCase(login.rejected, (state, action) => {
//         state.error = action.payload;
//       });
//   },
// });

// export const { logout, setAuthToken } = authSlice.actions;
// export default authSlice.reducer;




// src/redux/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const token = localStorage.getItem('token');
const userData = localStorage.getItem('user');

const initialState = {
  isLoggedIn: !!token,
  user: userData ? JSON.parse(userData) : null,
  error: null,
  token: token || null,
};

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:3000/api/users/login', { email, password });
      const { token, user } = response.data.docs;

      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      return { token, user };
    } catch (error) {
      return thunkAPI.rejectWithValue('An error occurred during login.');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      state.isLoggedIn = false;
      state.user = null;
      state.token = null;
      state.error = null;
    },
    setAuthToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem('token', action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { logout, setAuthToken } = authSlice.actions;
export default authSlice.reducer;
