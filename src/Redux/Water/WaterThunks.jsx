import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://food-diary-backend-kr1b.onrender.com/api/';

const saveUserWaterIntake = createAsyncThunk(
  'user/water-intake',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('user/water-intake', credentials);
      return data;
    } catch (e) {
      toast.error('Invalid email!');
      return rejectWithValue(e.message);
    }
  }
);


const deleteWaterIntakeCurrentDate = createAsyncThunk(
  "user/deleteWater-intake",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`user/water-intake/${id}`);
      return data;
    } catch (e) {
      toast.error(e.response.statusText);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export { saveUserWaterIntake, deleteWaterIntakeCurrentDate }