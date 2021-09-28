import { useDispatch } from 'react-redux';
import { deleteTodo, completeTodo } from '../../features/Todos/todosSlice';
import './Todo.css'

function Todo(props){
    const { id, text, isCompleted } = props;
    const completionClass = isCompleted? 'completed': 'current';
    
    const dispatch = useDispatch();

    const handleDelete=()=>{
        dispatch(deleteTodo({id:id}));
    }

    const handleComplete=()=>{
        dispatch(completeTodo({id:id}));
    }

    return (
        <div className="todoContainer">
            <button className={`deleteButton ${completionClass}`} onClick={handleDelete}>Remove</button>
            <button className={`completeButton ${completionClass}`} onClick={handleComplete}>Done</button>
            <article className={`todo ${completionClass}`}>
                <p>{text}</p>
            </article>
        </div>
    )
}

export default Todo;