import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import weatherAPI from '../../api/weatherAPI';

export const fetchWeather = createAsyncThunk(
    'weather/fetchWeather',
    async(arg, thunkAPI)=>{// payload creator makes async request to get data from API
        const fetchedWeather = await weatherAPI.fetchWeather();
        return fetchedWeather;
    }
)

const options = {
    name: 'Weather',
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

        [fetchWeather.rejected]:(state)=>{
            state.isLoading = false;
            state.hasError = true;
        }
    }
}

const weatherSlice = createSlice(options);
export const selectWeather = state => state.weather.weather;
export const { setWeather } = weatherSlice.actions;
export default weatherSlice.reducer;