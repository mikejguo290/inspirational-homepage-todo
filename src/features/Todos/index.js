import Todo from '../../components/Todo';

function TodosList(props){

    const todos = [
        {id:1, text:'play guitar', isCompleted: false},
        {id:2, text:'meal plan', isCompleted: false},
        {id:3, text:'read', isCompleted: false},
        {id:1, text:'draw', isCompleted: true},
        {id:2, text:'learn Spanish', isCompleted: true},
        {id:3, text:'gym', isCompleted: true},
    ];

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