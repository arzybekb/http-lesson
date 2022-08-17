import { configureStore } from "@reduxjs/toolkit";
import courseSlice from "./course/courseSlice";
import userSlice from "./user/userSlice";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    courses: courseSlice.reducer,
  },
});
export default store;
