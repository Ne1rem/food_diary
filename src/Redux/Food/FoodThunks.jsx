import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import instance from '../Auth/authThunks';
import axios from 'axios';

axios.defaults.baseURL = 'https://food-diary-backend-kr1b.onrender.com/api/';


const intakeFood = createAsyncThunk(
  'user/food-intake', async (_, thunkAPI) => {
  try {
    const response = await axios.get('user/food-intake');
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

const saveUserFoodIntake = createAsyncThunk(
    'user/saveFood-intake',
    async (credentials, { rejectWithValue }) => {
      try {
        const { data } = await axios.post('user/food-intake', credentials);
        return data;
      } catch (e) {
        toast.error('Invalid email!');
        return rejectWithValue(e.message);
      }
    }
  );
  
  const updateFoodIntakeById = createAsyncThunk(
    "user/food-intakeById",
    async ({value, id}, thunkAPI) => {
      try {
        const { data } = await axios.put(`user/food-intake/${id}`, value);
        return data;
      } catch (e) {
        toast.error(e.response.statusText);
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
  
  
  const deleteFoodIntakeCurrentDate = createAsyncThunk(
    "user/deleteFoodIntake",
    async (id, thunkAPI) => {
      try {
        const { data } = await axios.delete(`user/food-intake/${id}`);
        return data;
      } catch (e) {
        toast.error(e.response.statusText);
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );

  export {intakeFood, saveUserFoodIntake, updateFoodIntakeById, deleteFoodIntakeCurrentDate }