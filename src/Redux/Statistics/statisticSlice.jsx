import { createSlice } from '@reduxjs/toolkit';
import { getStatistics } from './statisticThunks';
import { currentMonth } from './utilities/currentMonth';

const initialState = {
  totalCalories: null,
  totalWater: null,
  totalWeight: null,
  month: null,
  requestMonth: currentMonth(),
  isLoading: false,
  error: null,
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleStatisticsFullfilled = (state, { payload }) => {
  state.isLoading = false;
  state.totalCalories = payload.totalCalories;
  state.totalWater = payload.totalWater;
  state.totalWeight = payload.totalWeight;
  state.month = payload.month;
};

const statisticsSlice = createSlice({
  name: 'statistics',
  initialState,
  reducers: {
    setRequiredMonth(state, { payload }) {
      state.requestMonth = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStatistics.pending, handlePending)
      .addCase(getStatistics.fulfilled, handleStatisticsFullfilled)
      .addCase(getStatistics.rejected, handleRejected);
  },
});

export default statisticsSlice.reducer;
export const { setRequiredMonth } = statisticsSlice.actions;