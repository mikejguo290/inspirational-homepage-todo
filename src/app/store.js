import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/Todos/todosSlice';
import weatherReducer from '../features/Weather/weatherSlice';
import quoteReducer from '../features/Quote/quoteSlice';
import imageReducer from '../features/Image/imageSlice';

const rootReducer = {
    image: imageReducer,
    quote: quoteReducer,
    todos: todosReducer,
    weather: weatherReducer,
}

const store = configureStore({reducer: rootReducer});

export default store;
