import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import imageAPI from '../../api/imageAPI';

export const fetchImage = createAsyncThunk(
    'image/fetchImage',
    async(newPage, thunkAPI)=>{
        try {
            const fetchedImageData = await imageAPI.fetchImage(newPage);  

            const store = thunkAPI.getState();
            const previousPage = store.image.previousPage;
    
            const maxIndex = fetchedImageData.images.length-1;
    
            // set imageIndex and also updates page prior to populating store with new image objects. 
            if (newPage < previousPage){
                // newPage is smaller than page
                // dispatch action to set index to last index of previous page's images, and also set page
                const payload = {
                    imageIndex: maxIndex,
                }
                thunkAPI.dispatch(setIndex(payload)); // you can dispatch an action creator defined in the same file lower down!
    
            }else if (newPage > previousPage){
                // dispatch action to set index to index 0 (first image of new page), and also set page
                const payload = {
                    imageIndex: 0,
                }
                thunkAPI.dispatch(setIndex(payload));
            }
            return fetchedImageData; 
            // action.payload is going to fetch more than a list of image objs. 

        }catch(error){
            const err = {
                name:'image request failed',
                message:'unsplash api request has failed',
            }
            return thunkAPI.rejectWithValue(err);
        }
    }
);

const options = {
    name:'image',
    initialState: {
        // mountain image 
        // 'https://images.unsplash.com/photo-1631551831518-b5b32d35f248'
        images : [], // array of image objects - [ {urls: {regular: 'url to use for background'}} ]

        previousPage: 1,
        page: 2, // page fetched by api is 1 by default, if nothing is specified. starting on page 2 is better!
        imageIndex: 0, // index of image url to get. 
        totalPages: 0, // total pages of results that can be fetched from query. pageToFetch cannot exceed this. 

        isLoading:false,
        hasError:false,
    },
    reducers:{
        getNextImage : (state) => {
            // increase imageIndex by 1.
            state.imageIndex +=1;
        },
        
        getPreviousImage : (state) => {
            // decrease imageIndex by 1.
            state.imageIndex -=1;
        },

        setPage : (state, action)=>{
            state.previousPage = state.page;
            state.page = action.payload.page;
        },

        setIndex : (state, action)=>{
            state.imageIndex = action.payload.imageIndex;
        }
    },
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
        [fetchImage.rejected]:(state, action)=>{
            state.isLoading = false;
            state.hasError = action.payload;
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
export const selectImages = state => state.image.images;
export const selectPage = state => state.image.page;
export const selectTotalPages = state => state.image.totalPages;
export const selectLoadingStatus = state => state.image.isLoading;
export const selectErrorStatus = state => state.image.isError;

export const { getNextImage, getPreviousImage, setIndex, setPage } = imageSlice.actions;
export default imageSlice.reducer;