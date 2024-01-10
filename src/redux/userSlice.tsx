import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: UserState = {
  loading: false,
  user: {
    name: "",
    email: "",
  },
};

export const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    getRegisterRequest: (state) => {
      state.loading = true;
    },
    getRegisterSuccess: (state, action: PayloadAction<UserType>) => {
      state.loading = false;
      state.user = action.payload;
    },
    getRegisterFail: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    getLoginRequest: (state) => {
      state.loading = true;
    },
    getLoginSuccess: (state, action: PayloadAction<UserType>) => {
      state.loading = false;
      state.user = action.payload;
    },
    getLoginFail: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getLoginRequest,
  getLoginSuccess,
  getLoginFail,
  getRegisterFail,
  getRegisterRequest,
  getRegisterSuccess,
} = userSlice.actions;
export default userSlice.reducer;
