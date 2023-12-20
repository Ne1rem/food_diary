import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://food-diary-backend-kr1b.onrender.com/api/';


export const addContactThunk = createAsyncThunk(
    'user/food-intake',
    async (intakeData, thunkApi) => {
        try {
            const { data } = await axios.post('/food-intake', intakeData);
            return data;
            
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);  
        }
});