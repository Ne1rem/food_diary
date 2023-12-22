import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const instance = axios.create({
  baseURL: "https://food-diary-backend-kr1b.onrender.com/api/"
});


const setToken = (token) => {
  if (token) {
    return instance.defaults.headers.common.authorization = `Bearer ${token}`;
  }

  instance.defaults.headers.common.authorization = "";
}

instance.interceptors.response.use(response => response, async (error) => {
if (error.response.status === 401) {
  const refreshToken = localStorage.getItem('refreshToken');
try {
  const { data } = await instance.post("auth/refresh", {refreshToken});
  setToken(data.accessToken)
  localStorage.setItem('refreshToken', data.refreshToken);
  return instance(error.config);
} catch (error) {
  toast.error('User 401!');
  return Promise.reject(error);
}
}
return Promise.reject(error);
});


const signUp = createAsyncThunk(
  'auth/signup',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await instance.post('auth/signup', credentials);
      // setToken(data.accessToken);
      return data;
    } catch (e) {
      toast.error('User creation error!');
      return rejectWithValue(e.message);
    }
  }
);

const signIn = createAsyncThunk(
  'auth/signin',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await instance.post('auth/signin', credentials);
      setToken(data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken)
      return data;
    } catch (e) {
      toast.error('Invalid email or password!');
      return rejectWithValue(e.message);
    }
  }
);

const forgotPassword = createAsyncThunk(
  'auth/forgot-password',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await instance.post('auth/forgot-password', credentials);
      return data;
    } catch (e) {
      toast.error('Invalid email!');
      return rejectWithValue(e.message);
    }
  }
);

const logOut = createAsyncThunk('auth/signout', async () => {
  try {
    const { data } = await instance.post('auth/signout');
    setToken();
    return data;
  } catch (e) {
    toast.error(e);
  }
});

// const refresh = createAsyncThunk('user/current', async (_, thunkAPI) => {
//   const state = thunkAPI.getState();
//   const persistedToken = state.auth.token;

//   if (persistedToken === null) {
//     return thunkAPI.rejectWithValue();
//   }

//   setToken(persistedToken);
//   try {
//     const response = await instance.get('user/current');

//     return response.data;
//   } catch (e) {
//     return thunkAPI.rejectWithValue(e.message);
//   }
// });

export { signUp, signIn,  forgotPassword, logOut };
export default instance;
