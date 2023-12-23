import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../Auth/authThunks';

const saveUserFoodIntake = createAsyncThunk(
    'user/food-intake',
    async (credentials, { rejectWithValue }) => {
      try {
        const { data } = await instance.post('user/food-intake', credentials);
        return data;
      } catch (e) {
        toast.error('Invalid email!');
        return rejectWithValue(e.message);
      }
    }
  );
  
  const userFoodIntakeById = createAsyncThunk(
    "user/food-intakeById",
    async ({value, id}, thunkAPI) => {
      try {
        const { data } = await instance.put(`user/food-intake/${id}`, value);
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
        const { data } = await instance.delete(`user/food-intake/${id}`);
        return data;
      } catch (e) {
        toast.error(e.response.statusText);
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );

  export { saveUserFoodIntake, userFoodIntakeById, deleteFoodIntakeCurrentDate }