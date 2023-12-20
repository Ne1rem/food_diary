import { toast } from 'react-toastify';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://food-diary-backend-kr1b.onrender.com/api/';


export const currentUser = createAsyncThunk(
    "user/current",
    async (_, thunkAPI) => {
      try {
        const response = await axios.get("user/current");
        return response.data;
      } catch (e) {
        toast.error(e.response.statusText);
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );

  export const updateUser = createAsyncThunk(
    "user/update",
    async (value, thunkAPI) => {
      try {
        const { data } = await axios.put(`user/update`, value);
        return data;
      } catch (e) {
        toast.error(e.response.statusText);
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );