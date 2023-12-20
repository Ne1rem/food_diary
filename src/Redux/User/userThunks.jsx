import { toast } from 'react-toastify';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://food-diary-backend-kr1b.onrender.com/api/';

export const currentUser = createAsyncThunk(
  'user/current',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('user/current');
      return response.data;
    } catch (e) {
      toast.error(e.response.statusText);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// export const updateUser = createAsyncThunk(
//   "user/update",
//   async (value, thunkAPI) => {
//     try {
//       const { data } = await axios.put(`user/update`, value);
//       return data;
//     } catch (e) {
//       toast.error(e.response.statusText);
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

export const updateUser = createAsyncThunk(
  'user/update',
  async (values, thunkAPI) => {
    try {
      if (values.avatarURL.startsWith('blob:')) {
        const file = await fetch(values.avatarURL).then((res) => res.blob());

        const formData = new FormData();
        formData.append('avatarURL', file);
        formData.append('name', values.name);
        formData.append('age', values.age);
        formData.append('gender', values.gender);
        formData.append('weight', values.weight);
        formData.append('height', values.height);
        formData.append('activity', values.activity);

        const { data } = await axios.put('/user/update', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log(formData);
        return data;
      } else {
        const { data } = await axios.put('/user/update', values);
        return data;
      }
    } catch (e) {
      toast.error(e.response.statusText);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
