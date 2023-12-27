import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { requestFoodIntakeThunk,
    addFoodIntakeThunk,
    updateFoodIntakeThunk,
    deleteFoodIntakeThunk
     } from "./diaryThunks";

const initialState = {
         intake:[],
         isLoading: false,
         error: null,
      }
    const handlePending = (state) => {
        state.isLoading = true;
        state.error = null;
    }

    const handleFulfilledGet = (state,{ payload }) => {
        state.isLoading = false;
        state.intake = payload;
    }

    const handleFulfilledPost = (state,{ payload }) => {
        state.isLoading = false;
        state.intake = payload;
    }

    const handleFulfilledPut = (state,{ payload }) => {
        state.isLoading = false;
        state.intake = payload;
    }

    const handleFulfilledDelete = (state,{ payload }) => {
        state.isLoading = false;
        state.intake = payload;
    }

    const handleRejected = (state,{ payload }) => {
        state.isLoading = false;
        state.error = payload;
    }

    const intakeSlice = createSlice({
        name: 'intake',
        initialState,
        extraReducers:
        (builder) => {
            builder.addCase(requestFoodIntakeThunk.fulfilled, handleFulfilledGet)
            .addCase(addFoodIntakeThunk.fulfilled, handleFulfilledPost)
            .addCase(updateFoodIntakeThunk.rejected, handleFulfilledPut)
            .addCase(deleteFoodIntakeThunk.rejected, handleFulfilledDelete)
            .addMatcher(
                isAnyOf(
                    requestFoodIntakeThunk.pending,
                    addFoodIntakeThunk.pending,
                    updateFoodIntakeThunk.pending,
                    deleteFoodIntakeThunk.pending,
                ),handlePending)
            .addMatcher(
                isAnyOf(
                    requestFoodIntakeThunk.rejected,
                    addFoodIntakeThunk.rejected,
                    updateFoodIntakeThunk.rejected,
                    deleteFoodIntakeThunk.rejected,
                ),handleRejected)
        }
    })

    export const intakeReducer = intakeSlice.reducer;


