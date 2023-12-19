import { createSlice } from '@reduxjs/toolkit';
import { currentUser } from './userThunks';


const initialState = {
  user: [],
  token: null,
  isLoading: false,
  isError: null
};

const handlePending = (state) => {
  state.error = null;
  state.isLoading = true;
};

const handleRejected = (state, payload) => {
  state.error = payload;
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
      state.error = null;
      state.user = payload;
    })
    .addCase(currentUser.rejected, (state, { payload }) => {
      handleRejected(state, payload);
    })
  },
});

export const userReducer = userSlice.reducer;