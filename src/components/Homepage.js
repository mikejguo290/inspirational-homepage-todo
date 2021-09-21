import Weather from './Weather';
import InputTodos from './InputTodos';
import TodosList from './TodosList';
import Quote from './Quote';

function Homepage () {
    return (
        <section className="homepage">
            <Weather />
            <InputTodos />
            <TodosList />
            <br />
            <TodosList />
            <Quote />
        </section>
    );
}

export default Homepage; 
