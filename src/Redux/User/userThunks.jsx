import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ErrorToast, SuccessToast } from './toast';
import instance from '../Auth/authThunks';

// axios.defaults.baseURL = 'https://food-diary-backend-kr1b.onrender.com/api/';

const currentUser = createAsyncThunk(
  'user/current',
  async (_, thunkAPI) => {
    try {
      const response = await instance.get('user/current');
      return response.data;
    } catch (e) {
      toast.error(e.response.statusText);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);


const updateUser = createAsyncThunk(
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

        for (var pair of formData.entries()) {
          console.log(pair[0] + ', ' + pair[1]);
        }

        const { data } = await instance.put('user/update', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        toast.success('Data was updated!', SuccessToast);
        console.log(formData);
        return data;
      } else {
        const { data } = await instance.put('user/update', values);
        return data;
      }
    } catch (e) {
      toast.error('Update failed', ErrorToast);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);


const updateUserGoal = createAsyncThunk(
  "user/goal",
  async (value, thunkAPI) => {
    try {
      const { data } = await instance.put(`user/goal`, value);
      return data;
    } catch (e) {
      toast.error(e.response.statusText);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);


const addUserWeight = createAsyncThunk(
  'user/weight',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await instance.post('user/weight', credentials);
      return data;
    } catch (e) {
      toast.error('Invalid email!');
      return rejectWithValue(e.message);
    }
  }
);


const userStatistics = createAsyncThunk(
  'user/statistics',
  async (_, thunkAPI) => {
    try {
      const response = await instance.get('user/statistics');
      return response.data;
    } catch (e) {
      toast.error(e.response.statusText);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);


export { currentUser, updateUser, updateUserGoal, addUserWeight, userStatistics }