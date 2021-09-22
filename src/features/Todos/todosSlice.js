import { createSlice } from "@reduxjs/toolkit";

const options = {
    name:'todos',
    initialState:{todos:[]}, // store todo in array.  // state.todos.todos allow state.todos to be extended later if we decide to.
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

// export selectors - pure functions that select a part of state to return
export const selectTodos = state => state.todos.todos; // returns list of todos.

// export actions and reducers
export const { addTodo, removeTodo, completeTodo } = todosSlice.actions;
export default todosSlice.reducer;