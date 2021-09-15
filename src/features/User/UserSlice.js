import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  profilePhoto: "",
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.profilePhoto = action.payload.profilePhoto;
    },
    logout: (state) => {
      state.name = "";
      state.email = "";
      state.profilePhoto = "";
    },
  },
});

export const { login, logout } = UserSlice.actions;

export const selectName = (state) => state.user.name;
export const selectEmail = (state) => state.user.email;
export const profilePhoto = (state) => state.user.profilePhoto;

export default UserSlice.reducer;
