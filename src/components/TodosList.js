import Todo from './Todo';

function TodosList(){
    const numbers = [1,2,3]
    const listItems = numbers.map(()=><li><Todo/></li>);
    return (
        <ul> 
            {/* replace with dynamically generated list when there is real data */}
            {listItems}
        </ul>
    );
}

export default TodosList;