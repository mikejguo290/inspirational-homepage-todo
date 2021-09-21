import Weather from './Weather';
import InputTodos from './InputTodos';
import TodosList from './TodosList';
import Quote from './Quote';

function Homepage () {
    /* homepage will have to have images state */
    return (
        <section className="homepage">
            <Weather />
            <InputTodos />
            <TodosList />
            <button>Previous Image</button> 
            <button>Next Image</button> 
            <br />
            <TodosList />
            <Quote />
        </section>
    );
}

export default Homepage; 
