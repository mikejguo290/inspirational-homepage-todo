
function Todo(props){
    const { text, isComplete } = props;
    const completionClass = isComplete? 'todo completed': 'todo current';
    return (
        <article className={completionClass}>
            {/* replace with actual data*/}
            <h3>{text}</h3>
            <button>Remove</button>
            <button>Done</button>
        </article>
    )
}

export default Todo;