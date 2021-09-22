import { createSlice } from '@reduxjs/toolkit';

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