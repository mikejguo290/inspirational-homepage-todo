import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import weatherAPI from '../../api/weatherAPI';
import weatherApi from '../../app/weatherAPI';

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
        temperature: '13 celsius',
        description: 'cloudy',
        weatherIcon: 'c()d'
    }},
    reducers: {
        setWeather:(state, action) => {
            // set state weather with action.payload
            const { temperature, description, weatherIcon } = action.payload;
            state.weather = {
                temperature: temperature,
                description: description,
                weatherIcon: weatherIcon,
            }
        }
    }
}

const weatherSlice = createSlice(options);
export const selectWeather = state => state.weather.weather;
export const { setWeather } = weatherSlice.actions;
export default weatherSlice.reducer;