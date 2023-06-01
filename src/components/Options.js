import { useDispatch,  } from 'react-redux'
import {changeActiveFilter, removeAll} from "../redux/todo-slice/todoSlice"

function Options() {

  const dispatch = useDispatch();

 
  

  return (
    <div style={{width: 500, heigh: 150}}>

      <div className='colorScheme'>
        <div>Black</div>
        <div>Red</div>
        <div>Green</div>
        <div>Purple</div>
      </div>

      <div>
        <button onClick={() => dispatch(changeActiveFilter("all"))}>All</button>
        <button onClick={() => dispatch(changeActiveFilter("active"))}>Active</button>
        <button onClick={() => dispatch(changeActiveFilter("completed"))}>Completed</button>
        <button onClick={() => dispatch(removeAll())}>Clear All</button>
      </div>
      
    </div>
  )
}

export default Options