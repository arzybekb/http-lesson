import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isAuthorized: false,
  accessToken: "",
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    logIn(state, { payload }) {
      state.accessToken = payload.accessToken;
      state.isAuthorized = true;
    },
    logOut() {
      return initialState;
    },
  },
});
export const userActions = userSlice.actions;

export default userSlice;
