import Weather from './Weather';
import InputTodos from './InputTodos';
import TodosList from './TodosList';
import Quote from './Quote';

function HomePage () {
    return (
        <section className="homepage">
            <Weather />
            <InputTodos />
            <TodosList />
            <TodosList />
            <Quote />
        </section>
    );
}

export default HomePage; 
