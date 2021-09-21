import { useState } from 'react';
function InputTodos(){
    const [userInput, setUserInput ] = useState(''); // import useState hook and set default userInput to '';
    const handleChange = (event) =>{
        const input = event.target.value; 
        setUserInput(input); // update UserInput with capture value from the event. 
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        // dispatch action to TodosSlice to add new todos

        // test code. 
        console.log(`add todo - ${userInput}`);
        // clear userInput after submission
        setUserInput('');
    }

    return (
        <section className = "add-todo">
            <form onSubmit={handleSubmit}>
                <label for="input-todos">
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