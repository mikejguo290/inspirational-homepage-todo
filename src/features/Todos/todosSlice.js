import { createSlice } from "@reduxjs/toolkit";

const options = {
    name:'todos',
    initialState:{todos:[]}, // store todo in array. 
    reducers: {
        addTodo: (state, action)=>{
            // Q.when to dispatch action? A. when someone clicks add action and the action type is addTodo.
            // Q.intended effect on state? A. create a new todo object with the data in action.payload
            
            const { id, text, isCompleted } = action.payload;
            state.todos.push({id: id, text:text, isCompleted:isCompleted});
        }, 
        removeTodo: (state, action)=>{
            // Q.intended effect on state? A. delete todo object with the id in action.payload
            const { id } = action.payload;
            state.todos.filter(todo=> todo.id !== id );
        },
        completeTodo: (state, action)=>{
            //  set todo object's isCompleted attribute to true, with the id in action.payload
            const { id } = action.payload;
            // want to identify the todo obj, and then change it. don't mutate any other todos. 
            const index = state.todos.findIndex( todo => todo.id===id );
            state.todos[index].isCompleted = true;
        }
    }
}

const todosSlice = createSlice(options);

export const { addTodo, removeTodo, completeTodo } = todosSlice.actions;
export default todosSlice.reducer;