import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import imageAPI from '../../api/imageAPI';

export const fetchImage = createAsyncThunk(
    'image/fetchImage',
    async()=>{
        const fetchedImageData = await imageAPI.fetchImage();  
        return fetchedImageData; 
        // action.payload is going to fetch more than a list of image objs. 
    }
);

const options = {
    name:'image',
    initialState: {
        // mountain image 
        // 'https://images.unsplash.com/photo-1631551831518-b5b32d35f248'
        images : [{url:'https://images.unsplash.com/photo-1631551831518-b5b32d35f248'}], // array of image objects

        pageToFetch: 1, // page fetched is 1 by default with the api, if nothing is specified. 
        imageIndex: 0, // index of image url to get. maybe
        totalPages: 0, // total pages of results that can be fetched from query. pageToFetch cannot exceed this. 

        isLoading:false,
        hasError:false,
    },
    reducers:{},
    extraReducers:{
        [fetchImage.fulfilled]:(state,action)=>{
            state.isLoading = false;
            state.hasError = false;
            state.images = action.payload.images; 
            state.totalPages = action.payload.totalPages; 
        },
        [fetchImage.pending]:(state)=>{
            state.isLoading = true;
            state.hasError = false;
        },
        [fetchImage.rejected]:(state)=>{
            state.isLoading = false;
            state.hasError = true;
        },
    },
}


// which actions? 
// fetchImage - fetches images
// getNextImage - get next Image in response, fetch Image if at end of 
// getPreviousImage - get previousImage in response. 
// initial state needs to track list of images, as well as page number and index of image within list of fetched images. 

const imageSlice = createSlice(options);

export const selectImageIndex = state => state.image.imageIndex;
export const selectPageToFetch = state => state.image.pageToFetch;
export const selectImage = state => state.image.images[state.image.imageIndex];
export default imageSlice.reducer;