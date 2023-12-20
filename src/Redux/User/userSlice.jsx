import { createSlice } from '@reduxjs/toolkit';
import { currentUser, updateUser } from './userThunks';


const initialState = {
  user: [],
  isLoading: false,
  isError: null,
};

const handlePending = (state) => {
  state.error = null;
  state.isLoading = true;
};

const handleRejected = (state, payload) => {
  state.isError = payload;
  state.isLoading = false;
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder

      .addCase(currentUser.pending, (state) => {
        handlePending(state);
      })
      .addCase(currentUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = null;
        state.user = payload;
      })
      .addCase(currentUser.rejected, (state, { payload }) => {
        handleRejected(state, payload);
      })


      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = null;
        state.user = payload;
      })
      .addCase(updateUser.pending, (state) => {
        handlePending(state);
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        handleRejected(state, payload);
      })
  },
});

export const userReducer = userSlice.reducer;
