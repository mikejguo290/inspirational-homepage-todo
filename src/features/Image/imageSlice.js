import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import imageAPI from '../../api/imageAPI';

export const fetchImage = createAsyncThunk(
    'image/fetchImage',
    async(page)=>{
        const fetchedImageData = await imageAPI.fetchImage(page);  
        return fetchedImageData; 
        // action.payload is going to fetch more than a list of image objs. 
    }
);

const options = {
    name:'image',
    initialState: {
        // mountain image 
        // 'https://images.unsplash.com/photo-1631551831518-b5b32d35f248'
        images : [], // array of image objects - [ {urls: {regular: 'url to use for background'}} ]

        pageToFetch: 2, // page fetched by api is 1 by default, if nothing is specified. starting on page 2 is better!
        imageIndex: 0, // index of image url to get. 
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
export const selectLoadingStatus = state => state.image.isLoading;
export const selectErrorStatus = state => state.image.isError;
export default imageSlice.reducer;