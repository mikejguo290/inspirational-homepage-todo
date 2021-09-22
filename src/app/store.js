import configureStore from '@reduxjs/toolkit';
import todosReducer from '../features/Todos/todosSlice';

const rootReducer = {
    todos: todosReducer,
}

const store = configureStore(rootReducer);