import { createSlice } from '@reduxjs/toolkit';

const options = {
    name: 'Weather',
    initialState: { weather:{} },
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

export const { setWeather } = weatherSlice.actions;
export default weatherSlice.reducer;