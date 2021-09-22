import { createSlice } from '@reduxjs/toolkit';

const options = {
    name:'image',
    initialState: { image: {
        url:'https://images.unsplash.com/photo-1631551831518-b5b32d35f248'
    }},
    reducers:{},
    extraReducers:{}
}

const imageSlice = createSlice(options);

export const selectImageUrl = state => state.image.image.url;
export default imageSlice.reducer;