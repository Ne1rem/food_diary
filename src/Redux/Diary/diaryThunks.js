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
    async ({ id, intakeData }, thunkApi) => {
        try{
           const { data } = await axios.put(`/user/food-intake/${id}`, intakeData);
           return data;
        }catch (error) {
            return thunkApi.rejectWithValue(error.message); 
        }
    }
);

export const deleteFoodIntakeThunk = createAsyncThunk(
    'foodIntake/delete',
    async (intakeId, thunkApi) => {
        try{
            const { data } = await axios.delete('user/food-intake', intakeId);
            return data;
        }catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);
