import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import movieReducer from "../features/Movie/movieSlice"

export default configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer, // Fixed typo here
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
