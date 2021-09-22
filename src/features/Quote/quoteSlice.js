import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


const options = {
    name: 'quote',
    initialState:{ quote: {
        text:'Beep … beep … beep.',
        author:'Sputnik',
    }},
    reducers: {
        
    },
    extraReducers:{}
}

const quoteSlice = createSlice(options);

export const selectQuote = state => state.quote.quote; 

export default quoteSlice.reducer;