import { createSlice } from '@reduxjs/toolkit';
// import { currentUser } from './userThunks';


const initialState = {
  user: [],
  token: null,
  isLoading: false,
  isError: null
};

// const handlePending = (state) => {
//   state.error = null;
//   state.isLoading = true;
// };

// const handleRejected = (state, payload) => {

// };

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder

    // .addCase(yourThunk.pending, (state, { payload }) => {})
    // .addCase(yourThunk.fulfilled, (state, { payload }) => {})
    // .addCase(yourThunk.rejected, (state, { payload }) => {})
  },
});

export const userReducer = userSlice.reducer;