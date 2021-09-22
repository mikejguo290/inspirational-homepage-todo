import configureStore from '@reduxjs/toolkit';
import todosReducer from '../features/Todos/todosSlice';
import weatherReducer from '../features/Weather/weatherSlice';

const rootReducer = {
    todos: todosReducer,
    weather: weatherReducer,
}

const store = configureStore(rootReducer);

export default store;
