import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import quotesAPI from '../../api/quotesAPI';

export const fetchQuote = createAsyncThunk(
    'quote/fetchQuote', // name the action types created 
     async(arg, thunkAPI)=>{ // async call back to run 
        try{
            const fetchedQuote = await quotesAPI.fetchQuoteOfTheDay();
            return fetchedQuote;
        }catch(error){
            const err = {}
            err.name = 'quotes API request failed'
            err.message = 'quotes API request failed'
            return thunkAPI.rejectWithValue(err);
        }    
    }
);

const options = {
    name: 'quote',
    initialState:{ quote: {
        text:'Beep … beep … beep.',
        author:'Sputnik',
        },
        // states created to track loading status
        isLoading:false, 
        hasError:false,
    },

    reducers: {
        
    },
    extraReducers:{
        [fetchQuote.fulfilled]:(state,action)=>{
            state.isLoading = false;
            state.hasError = false;
            // on fufilled, dispatch action to store to update state
            const { text, author } = action.payload;
            state.quote = {
                text:text,
                author:author
            }
        },

        [fetchQuote.pending]:(state)=>{
            state.isLoading = true;
            state.hasError = false;
        },
        [fetchQuote.rejected]:(state,action)=>{
            state.isLoading = false;
            state.hasError = action.payload;
        },
    }
}

const quoteSlice = createSlice(options);

export const selectQuote = state => state.quote.quote; 
export const selectLoadingStatus = state => state.quote.isLoading;
export const selectErrorStatus = state => state.quote.hasError;

export default quoteSlice.reducer;