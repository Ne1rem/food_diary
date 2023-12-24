import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://food-diary-backend-kr1b.onrender.com/api/';

const getStatistics = createAsyncThunk(
  'user/statistics',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('user/statistics');
      return response.data;
    } catch (e) {
      toast.error(e.response.statusText);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export { getStatistics };