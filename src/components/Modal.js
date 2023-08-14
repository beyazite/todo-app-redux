import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { closeModal } from '../redux/todo-slice/modalSlice';
import { editTodo, toggleCompleted} from '../redux/todo-slice/todoSlice';

function Modal() {
    const dispatch = useDispatch();

    const {data} = useSelector(state => state.modal);
    
    const [todo, setTodo] = useState(data.title);

    const [completed, setCompleted] = useState(data.completed);

    

    const submitHandle = (e) => {
      e.preventDefault();
      dispatch(editTodo({ id: data.id, title: todo, completed: completed, colorGroup: "black", time: new Date() }));
      close();
    };


    const close = () => {
      dispatch(closeModal());
    };


    //onClick={() => isCompl(data.id)}

  return (
    <div className='modal'>
      <div className='modal-inner'>
        <form onSubmit={submitHandle}>
          <input type='text' value={todo} onChange={e => setTodo(e.target.value)} />
          <br/>
          <label>
            <input type='checkbox' onChange={e => setCompleted(e.target.checked)  } />
            Check as completed.
          </label>
          <br/>
          <button type='submit' >Save</button>
        </form>
        <button onClick={close}>Close</button>
      </div>
    </div>
  )
}

export default Modal