import { createSlice } from '@reduxjs/toolkit';
import { saveUserWaterIntake, deleteWaterIntakeCurrentDate } from './FoodThunks'

const initialState = {
    water: [],
    isLoading: false,
    isError: null,
  };
  
  const handlePending = (state) => {
    state.isError = null;
    state.isLoading = true;
  };
  
  const handleRejected = (state, payload) => {
    state.isError = payload;
    state.isLoading = false;
  };


  const foodSlice = createSlice({
    name: 'water',
    initialState,
    extraReducers: (builder) => {
      builder
      .addCase(saveUserWaterIntake.pending, (state) => {
        handlePending(state);
      })
      .addCase(deleteWaterIntakeCurrentDate.pending, (state) => {
        handlePending(state);
      })


      .addCase(saveUserWaterIntake.rejected, (state, { payload }) => {
        handleRejected(state, payload);
      })
      .addCase(deleteWaterIntakeCurrentDate.rejected, (state, { payload }) => {
        handleRejected(state, payload);
      })



      .addCase(saveUserWaterIntake.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = null;
        state.water = payload;
      })
      .addCase(deleteWaterIntakeCurrentDate.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = null;
        state.water = payload;
      })
    },
});

export const foodReducer = foodSlice.reducer;