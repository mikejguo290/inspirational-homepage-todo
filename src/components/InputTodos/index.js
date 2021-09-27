import { useState } from 'react';
import { addTodo } from '../../features/Todos/todosSlice'; // import action creator
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

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
        const payload = {
            id:uuidv4(), 
            text:userInput, 
            isCompleted:false
        }
        
        dispatch(addTodo(payload));
        // test code. 
        console.log(`add todo - ${userInput}`);
        // clear userInput after submission
        setUserInput('');
    }

    return (
        <section className = "add-todo">
            <form onSubmit={handleSubmit}>
                <label htmlFor="input-todos">
                    {/* specify input's value to control the element */}
                    <input 
                        id="input-todos" 
                        type ='text' 
                        placeholder="What's on your mind?"
                        value = {userInput}
                        onChange = {handleChange}
                    />
                </label>
            </form>
        </section>
    );
}

export default InputTodos;