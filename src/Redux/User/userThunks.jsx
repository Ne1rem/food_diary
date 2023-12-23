import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ErrorToast, SuccessToast } from './toast';
// import instance from '../Auth/authThunks';
import axios from 'axios';
// import { selectToken } from '../Auth/selectors';
axios.defaults.baseURL = 'https://food-diary-backend-kr1b.onrender.com/api/';

const currentUser = createAsyncThunk(
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

// const currentUser = createAsyncThunk(
//   'user/current',
//   async (_, thunkAPI) => {
//     try {
//       const persistedToken = selectToken(thunkAPI.getState())

//       const axiosInstance = axios.create({
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${persistedToken}`,
//         },
//       });

//       const response = await axios.get('/user/current');
//       return response.data;
//     } catch (e) {
//       console.error('Error fetching user data:', e);
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

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

        const { data } = await axios.put('user/update', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        toast.success('Data was updated!', SuccessToast);
        console.log(formData);
        return data;
      } else {
        const { data } = await axios.put('user/update', values);
        return data;
      }
    } catch (e) {
      toast.error('Update failed', ErrorToast);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);


const updateUserGoal = createAsyncThunk(
  'user/goal',
  async (newGoal, { rejectWithValue, getState }) => {
    try {
      const persistedToken = getState().auth.token;
      if (!persistedToken) {
        throw new Error('Token not found');
      }

      const axiosInstance = axios.create({
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${persistedToken}`,
        },
      });

      const response = await axiosInstance.put('/user/goal', { goal: newGoal });

      return response.data;
    } catch (error) {
      console.error('Error updating goal:', error);
      toast.error('Error updating goal');
      return rejectWithValue(error.message);
    }
  }
);

const addUserWeight = createAsyncThunk(
  'user/weight',
  async (enteredWeight, { rejectWithValue, getState }) => {
    try {
      const persistedToken = getState().auth.token;

      if (!persistedToken) {
        throw new Error('Token not found');
      }

      const axiosInstance = axios.create({
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${persistedToken}`,
        },
      });

      const response = await axiosInstance.post('/user/weight', { weight: enteredWeight });

      return response.data;
    } catch (error) {
      console.error('Error updating weight:', error);
      toast.error('Error updating weight');
      return rejectWithValue(error.message);
    }
  }
);


const userStatistics = createAsyncThunk(
  'user/statistics',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('user/statistics');
      return response.data;
    } catch (e) {
      console.error('Error in userStatistics:', e);
      toast.error(e.response.statusText);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);



export { currentUser, updateUser, updateUserGoal, addUserWeight, userStatistics }