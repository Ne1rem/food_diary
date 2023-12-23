import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const requestFoodIntakeThunk = createAsyncThunk(
    'foodIntake/get',
    async (_, thunkApi) => {
        try {
            const { data } = await axios.get('user/food-intake');
            return data;
            
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);  
        }
    });

export const addFoodIntakeThunk = createAsyncThunk(
    'foodIntake/post',
    async (intakeData, thunkApi) => {
        try {
            const { data } = await axios.post('user/food-intake', intakeData);
            return data;
            
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);  
        }
});

export const updateFoodIntakeThunk = createAsyncThunk(
    'foodIntake/update',
);

export const deleteFoodIntakeThunk = createAsyncThunk(
    'foodIntake/delete',
);