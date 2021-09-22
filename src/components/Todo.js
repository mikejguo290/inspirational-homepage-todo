import { useDispatch } from 'react-redux';
import { deleteTodo, completeTodo } from '../features/Todos/todosSlice';

function Todo(props){
    const { id, text, isComplete } = props;
    const completionClass = isComplete? 'todo completed': 'todo current';
    
    const dispatch = useDispatch();

    const handleDelete=()=>{
        dispatch(deleteTodo({id:id}));
    }

    const handleComplete=()=>{
        dispatch(completeTodo({id:id}));
    }

    return (
        <article className={completionClass}>
            {/* replace with actual data*/}
            <h3>{text}</h3>
            <button onClick={handleDelete}>Remove</button>
            <button onClick={handleComplete}>Done</button>
        </article>
    )
}

export default Todo;