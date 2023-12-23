import { createSlice } from '@reduxjs/toolkit';
import { saveUserFoodIntake, userFoodIntakeById, deleteFoodIntakeCurrentDate } from './FoodThunks'

const initialState = {
    intake: [],
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
    name: 'food',
    initialState,
    extraReducers: (builder) => {
      builder
      .addCase(saveUserFoodIntake.pending, (state) => {
        handlePending(state);
      })
      .addCase(userFoodIntakeById.pending, (state) => {
        handlePending(state);
      })
      .addCase(deleteFoodIntakeCurrentDate.pending, (state) => {
        handlePending(state);
      })

      .addCase(saveUserFoodIntake.rejected, (state, { payload }) => {
        handleRejected(state, payload);
      })
      .addCase(userFoodIntakeById.rejected, (state, { payload }) => {
        handleRejected(state, payload);
      })
      .addCase(deleteFoodIntakeCurrentDate.rejected, (state, { payload }) => {
        handleRejected(state, payload);
      })


      .addCase(saveUserFoodIntake.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = null;
        state.intake = payload;
      })
      .addCase(userFoodIntakeById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = null;
        state.intake = payload;
      })
      .addCase(deleteFoodIntakeCurrentDate.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = null;
        state.intake = payload;
      })
    },
});

export const foodReducer = foodSlice.reducer;
