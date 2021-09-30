import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import weatherAPI from '../../api/weatherAPI';

export const fetchWeather = createAsyncThunk(
    'weather/fetchWeather',
    async(arg, thunkAPI)=>{// payload creator makes async request to get data from API
        try{
            const fetchedWeather = await weatherAPI.fetchWeather();
            return fetchedWeather;
        }catch(error){
            const err ={}
            err.name='weather API request failed';
            err.message='open weather API request failed'; // or error.message if that is good enough!
            return thunkAPI.rejectWithValue(err);
        }
    }
)

const options = {
    name: 'weather',
    initialState: { weather:{
            temperature: '',
            description: '',
            weatherIcon: ''
        },
        isLoading: false,
        hasError: false,
    },
    reducers: {
        
    },
    extraReducers: {
        [fetchWeather.fulfilled]:(state, action)=>{
            state.isLoading = false;
            state.hasError = false;
            state.weather = action.payload;
        },

        [fetchWeather.pending]: (state)=>{
            state.isLoading = true;
            state.hasError = false;
        },

        [fetchWeather.rejected]:(state, action)=>{
            state.isLoading = false;
            state.hasError = action.payload;
        }
    }
}

const weatherSlice = createSlice(options);
export const selectWeather = state => state.weather.weather;
export const { setWeather } = weatherSlice.actions;

export const selectLoadingStatus = state => state.weather.isLoading;
export const selectErrorStatus = state => state.weather.hasError;

export default weatherSlice.reducer;