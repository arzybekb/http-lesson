import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  courses: [],
};
const courseSlice = createSlice({
  name: "courseSlice",
  initialState,
  reducers: {
    setCourse(state, { payload }) {
      state.courses = payload;
    },
  },
});

export const courseActions = courseSlice.actions;

export default courseSlice;
