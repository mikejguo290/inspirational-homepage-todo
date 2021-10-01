import { useState } from 'react';
import { addTodo } from '../../features/Todos/todosSlice'; // import action creator
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import './InputTodos.css';


function InputTodos(){
    const [userInput, setUserInput ] = useState(''); // import useState hook and set default userInput to '';
    const dispatch = useDispatch();
    const handleChange = (event) =>{
        const input = event.target.value; 
        setUserInput(input); // update UserInput with capture value from the event. 
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        // dispatch action to TodosSlice to add new todos
        if(userInput){
            const payload = {
                id:uuidv4(), 
                text:userInput, 
                isCompleted:false
            }
            dispatch(addTodo(payload));
            // clear userInput after submission
            setUserInput('');    
        }
    }

    return (
        <section className = "add-todo">
            <form onSubmit={handleSubmit}>
                <h2>What's on your mind today?</h2>
                    <input 
                        id="input-todos" 
                        type ='text' 
                        value = {userInput}
                        onChange = {handleChange}
                        autoComplete= "off"
                    />
            </form>
        </section>
    );
}

export default InputTodos;