import { useDispatch } from 'react-redux';
import { deleteTodo, completeTodo } from '../../features/Todos/todosSlice';
import './Todo.css'

function Todo(props){
    const { id, text, isComplete } = props;
    const completionClass = isComplete? 'completed': 'current';
    
    const dispatch = useDispatch();

    const handleDelete=()=>{
        dispatch(deleteTodo({id:id}));
    }

    const handleComplete=()=>{
        dispatch(completeTodo({id:id}));
    }

    return (
        <div className="todoContainer">
            <button className="deleteButton" onClick={handleDelete}>Remove</button>
            <button className="completeButton" onClick={handleComplete}>Done</button>
            <article className={`todo ${completionClass}`}>
                <p>{text}</p>
            </article>
        </div>
    )
}

export default Todo;