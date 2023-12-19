import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

axios.defaults.baseURL = "https://food-diary-backend-kr1b.onrender.com/api/";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const signUp = createAsyncThunk("auth/signup", async (credentials, { rejectWithValue }) => {
  try {
    const { data } = await axios.post("auth/signup", credentials);
    token.set(data.token);
    return data;
  } catch (e) {
    toast.error("User creation error!");
    return rejectWithValue(e.message);
  }
});


const signIn = createAsyncThunk("auth/signin", async (credentials, { rejectWithValue }) => {
  try {
    const { data } = await axios.post("auth/signin", credentials);
    token.set(data.token);
    return data;
  } catch (e) {
    toast.error("Invalid email or password!");
    return rejectWithValue(e.message);
  }
});

const forgotPassword = createAsyncThunk("auth/forgot-password", async (credentials, { rejectWithValue }) => { 
try {
  const { data } = await axios.post("auth/forgot-password", credentials);
  return data;
} catch (e) {
  toast.error("Invalid email!");
  return rejectWithValue(e.message);
}
})

// const logOut = createAsyncThunk("auth/signout", async () => {
//   try {
//     const { data } = await axios.post("auth/signout");
//     token.unset();
//     return data;
//   } catch (e) {
//     throw e;
//   }
// });

const refresh = createAsyncThunk("auth/current", async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue();
  }

  token.set(persistedToken);
  try {
    const response = await axios.get("auth/current");
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export { signUp, signIn, refresh, forgotPassword };

