import { createSlice } from '@reduxjs/toolkit';
import {intakeFood, saveUserFoodIntake, updateFoodIntakeById, deleteFoodIntakeCurrentDate } from './FoodThunks'

const initialState = {
    intakeFood: [],
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
      .addCase(updateFoodIntakeById.pending, (state) => {
        handlePending(state);
      })
      .addCase(deleteFoodIntakeCurrentDate.pending, (state) => {
        handlePending(state);
      })
        .addCase(intakeFood.pending, (state) => {
        handlePending(state);
      })

      .addCase(saveUserFoodIntake.rejected, (state, { payload }) => {
        handleRejected(state, payload);
      })
      .addCase(updateFoodIntakeById.rejected, (state, { payload }) => {
        handleRejected(state, payload);
      })
      .addCase(deleteFoodIntakeCurrentDate.rejected, (state, { payload }) => {
        handleRejected(state, payload);
      })
      .addCase(intakeFood.rejected, (state, { payload }) => {
        handleRejected(state, payload);
      })


      .addCase(saveUserFoodIntake.fulfilled, (state) => {
        state.isLoading = false;
        state.isError = null;
        // state.intake = payload;
      })
      .addCase(updateFoodIntakeById.fulfilled, (state) => {
        state.isLoading = false;
        state.isError = null;
        // state.intake = payload;
      })
      .addCase(deleteFoodIntakeCurrentDate.fulfilled, (state) => {
        state.isLoading = false;
        state.isError = null;
        // state.intake = payload;
      })
      .addCase(intakeFood.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = null;
        state.intakeFood = payload;
      })
    },
});

export const foodReducer = foodSlice.reducer;
