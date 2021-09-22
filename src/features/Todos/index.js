import Todo from '../../components/Todo';
import { useSelector } from 'react-redux'
import { selectTodos } from './todosSlice';

function TodosList(props){

    const todos = useSelector(selectTodos);

    // either get all todos and filter later, or useSelectors conditionally 
    const filteredItems = todos.filter(( todo )=> props.isCompleted === todo.isCompleted).map((todo)=>{
        const {id, text, isCompleted } = todo;
        return (
            <li key={id}><Todo id={id} text={text} isCompleted={isCompleted}/></li>
        )
    });

    return (
        <ul> 
            {/* replace with dynamically generated list when there is real data */}
            {filteredItems}
        </ul>
    );
}

export default TodosList;