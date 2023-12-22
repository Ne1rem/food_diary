import { toast } from 'react-toastify';
import { createSlice } from '@reduxjs/toolkit';
import { signIn, signUp, forgotPassword, logOut } from './authThunks';

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
  accessToken: null,
  isLoggedIn: false,
  isLoading: false,
  isError: null
};

const handlePending = (state) => {
  state.isError = null;
  state.isLoading = true;
};

const handleRejected = (state, payload) => {
  state.isLoggedIn = false;
  state.isLoading = false;
  state.accessToken = null;
  state.isError = payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        handlePending(state);
      })
      .addCase(signIn.pending, (state) => {
        handlePending(state);
      })
      .addCase(forgotPassword.pending, (state) => {
        handlePending(state);
      })

      .addCase(signUp.rejected, (state, { payload }) => {
        handleRejected(state, payload);
      })
      .addCase(signIn.rejected, (state, { payload }) => {
        handleRejected(state, payload);
      })
      .addCase(forgotPassword.rejected, (state, { payload }) => {
        handleRejected(state, payload);
      })
      // .addCase(refresh.rejected, (state, { payload }) => {
      //   handleRejected(state, payload);
      // })

      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.accessToken = payload.accessToken;
        state.isLoading = false;
        // state.isLoggedIn = true;
        toast.success(`Successful Registration.`);
      })

      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.accessToken = payload.accessToken;
        state.isLoading = false;
        state.isLoggedIn = true;
        toast.success(`Successful Loginned.`);
      })

      // .addCase(refresh.fulfilled, (state, { payload }) => {
      //   state.user = payload;
      //   state.isLoading = false;
      //   state.isLoggedIn = true;
      // })
      .addCase(forgotPassword.fulfilled, (state) => {
        state.isLoading = false;
        toast.success('Request successful');
      })

    // .addCase(checkEmail.fulfilled, (state, { payload }) => {})
    // .addCase(checkEmail.rejected, (state, { payload }) => {})

    .addCase(logOut.pending, (state) => {
      handlePending(state);
    })
    .addCase(logOut.fulfilled, (state) => {
      state.accessToken = null;
      state.isLoggedIn = false;
    })
    .addCase(logOut.rejected, (state, { payload }) => {
      handleRejected(state, payload);
    });

    //CheckEmail
    // .addCase(forgotPassword.pending, () => {
    // })

    //UpdateUser
    // .addCase(updateUser.pending, (state, { payload }) => {})
    // .addCase(updateUser.fulfilled, (state, { payload }) => {})
    // .addCase(updateUser.rejected, (state, { payload }) => {})
  },
});

export const authReducer = authSlice.reducer;
