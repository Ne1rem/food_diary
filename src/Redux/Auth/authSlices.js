import { createSlice } from "@reduxjs/toolkit";
import { signIn, signUp } from "./authThunks";

const initialState = {
  user: {
    name: null,
    email: null,
    goal: null,
    gender: null,
    age: null,
    height: null,
    weight: null,
    activity:null,
    avatarUrl:null,
    BMR:null
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};
  
  const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
      builder
        //signUP
        // .addCase(signUp.pending, (state, { payload }) => {})
        .addCase(signUp.fulfilled, (state, { payload }) => { 
             state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
        })
        // .addCase(signUp.rejected, (state, { payload }) => {})

        //signIn
        // .addCase(signIn.pending, (state, { payload }) => {})
        .addCase(signIn.fulfilled, (state, { payload }) => {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
        })
        // .addCase(signIn.rejected, (state, { payload }) => {})

        //LogOut
        // .addCase(logOut.pending, (state, { payload }) => {})
        // .addCase(logOut.fulfilled, (state, { payload }) => {})
        // .addCase(logOut.rejected, (state, { payload }) => {})

        //UpdateUser
        // .addCase(updateUser.pending, (state, { payload }) => {})
        // .addCase(updateUser.fulfilled, (state, { payload }) => {})
        // .addCase(updateUser.rejected, (state, { payload }) => {})

        //CheckEmail
        // .addCase(checkEmail.pending, (state, { payload }) => {})
        // .addCase(checkEmail.fulfilled, (state, { payload }) => {})
        // .addCase(checkEmail.rejected, (state, { payload }) => {})

        //Refresh
        // .addCase(refresh.fulfilled, (state, { payload }) => {})
        // .addCase(refresh.rejected, (state, { payload }) => {})
    },
  });
  
  export const authReducer = authSlice.reducer;