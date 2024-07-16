import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import cartReducer from "./cartSlice";
// import moviesReducer from "./moviesSlice";
// import gptReducer from "./gptSlice";
// import configReducer from "./configSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    cart: cartReducer,
  },
});

export default appStore;
