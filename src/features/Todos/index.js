import Todo from '../../components/Todo';
import { useSelector } from 'react-redux'
import { selectTodos } from './todosSlice';
import './Todos.css';

function TodosList(props){

    const todos = useSelector(selectTodos);
    
    const colors = [
        'rgba(55, 98, 126, 0.6)',
        'rgba(164, 21, 31, 0.6)',
        'rgba(48, 52, 54, 0.6)',
        'rgba(247, 127, 0, 0.6)'
    ]; 
    
    // fn maps todos indices to a set of colors
    const colorMapper = (index) => { 
        //[0,1,2,3,4,5,6,7,8,9,10,11] => [0,1,2,3] [4,5,6,7] [8,9,10,11]. 
        //the pattern is modulus of 4, the remainder when index is divided by 4.
        
        if(index%4===3){
            return colors[3];
        }else if(index%4===2){
            return colors[2];
        }else if(index%4===1){
            return colors[1];
        }else{
            return colors[0];
        }
    }

    // add background color attribute to each todo, have to create new object as todo cannot be extended in strict mode.

    const todosExt = todos.map((todo, index)=>{
        return {
            ...todo,
            bgColor: colorMapper(index),
        }
    });


    // either get all todos and filter later, or useSelectors conditionally 
    const filteredItems = todosExt.filter(( todo )=> props.isCompleted === todo.isCompleted).map((todo)=>{
        const {id, text, isCompleted , bgColor } = todo;
        return (
            <li key={id}><Todo id={id} text={text} isCompleted={isCompleted} bgColor={bgColor} /></li>
        )
    });

    return (
        <section className='todosContainer'>
            <ul className="todos"> 
                {/* replace with dynamically generated list when there is real data */}
                {filteredItems}
            </ul>
        </section>
    );
}

export default TodosList;