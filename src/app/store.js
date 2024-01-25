import { configureStore } from "@reduxjs/toolkit";
import navsliceReducer from "../features/navslice";
const store = configureStore({
  reducer: {
    setup: navsliceReducer,
  },
});

export default store;
