// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   user: null,
//   isAuthenticated: false,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     login: (state, action) => {
//       state.user = action.payload;
//       state.isAuthenticated = true;
//       sessionStorage.setItem("user_data", JSON.stringify(action.payload));
//     },
//     logout: (state) => {
//       state.user = null;
//       state.isAuthenticated = false;
//       sessionStorage.removeItem("user_data");
//     },
//   },
// });

// export const { login, logout } = authSlice.actions;
// export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("user_data")) || null,
  isAuthenticated: !!localStorage.getItem("user_data"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    log: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem("user_data", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem("user_data");
    },
  },
});

export const { log, logout } = authSlice.actions;
export default authSlice.reducer;
