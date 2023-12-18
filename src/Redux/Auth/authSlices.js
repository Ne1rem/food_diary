import { toast } from 'react-toastify';
import { createSlice } from '@reduxjs/toolkit';
import { signIn, signUp,  refresh, forgotPassword } from './authThunks';



const initialState = {
  user: {
    name: null,
    email: null,
    goal: null,
    gender: null,
    age: null,
    height: null,
    weight: null,
    activity: null,
    avatarUrl: null,
    BMR: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      //signUP
      // .addCase(signUp.pending, (state, { payload }) => {})
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        // state.isLoggedIn = true;
        toast.success(`Successful Registration.`);
      })
      // .addCase(signUp.rejected, (state, { payload }) => {})

      //signIn
      // .addCase(signIn.pending, (state, { payload }) => {})
      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        toast.success(`Successful Loginned.`);
      })

          // .addCase(signIn.rejected, (state, { payload }) => {})

      //Refresh
      .addCase(refresh.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
      })
    // .addCase(refresh.rejected, (state, { payload }) => {})

    // .addCase(forgotPassword.pending, (state, { payload }) => {
    //   // state.isLoggedIn = true;
    // })
    // .addCase(checkEmail.fulfilled, (state, { payload }) => {})
    // .addCase(checkEmail.rejected, (state, { payload }) => {})
    

    //LogOut
    // .addCase(logOut.pending, (state, { payload }) => {})
    // .addCase(logOut.fulfilled, (state, { payload }) => {})
    // .addCase(logOut.rejected, (state, { payload }) => {})



    //CheckEmail
    .addCase(forgotPassword.pending, () => {
      toast.success("Request successful")
    })
    // .addCase(checkEmail.fulfilled, (state, { payload }) => {})
    // .addCase(checkEmail.rejected, (state, { payload }) => {})



    //UpdateUser
    // .addCase(updateUser.pending, (state, { payload }) => {})
    // .addCase(updateUser.fulfilled, (state, { payload }) => {})
    // .addCase(updateUser.rejected, (state, { payload }) => {})
  },
});

export const authReducer = authSlice.reducer;
