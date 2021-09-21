
function InputTodos(){
    return (
        <section className = "add-todo">
            <form >
                <label for="input-todos">
                    {/* specify input's value to control the element */}
                    <input id="input-todos" type ='text' placeholder="What's on your mind?"/>
                </label>
            </form>
        </section>
    );
}

export default InputTodos;