import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, completeTodo } from '../../features/Todos/todosSlice';
import './Todo.css'

function Todo(props){
    const [ activeTodo, setActiveTodo ] = useState(false); // allow Todo to track hover events, expressed with mouseEnter and mouseLeave.
    const { id, text, isCompleted, bgColor } = props;
    const completionClass = isCompleted? 'completed': 'current';
    
    const dispatch = useDispatch();

    const handleDelete=()=>{
        dispatch(deleteTodo({id:id}));
    }

    const handleComplete=()=>{
        dispatch(completeTodo({id:id}));
    }

    const handleMouseEnter = () => {
        setActiveTodo(true);
    }

    const handleMouseLeave = () => {
        setActiveTodo(false);
    }

    const styles = {
        background: bgColor,
    }

    return (
        <div className="todoContainer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {activeTodo && <button className={`deleteButton ${completionClass}`} onClick={handleDelete}>Remove</button>}
            {activeTodo && <button className={`completeButton ${completionClass}`} onClick={handleComplete}>Done</button>}
            <article className={`todo ${completionClass}`} style={styles}>
                <p>{text}</p>
            </article>
        </div>
    )
}

export default Todo;