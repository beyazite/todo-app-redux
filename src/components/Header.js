import {useState} from 'react'
import { useDispatch } from 'react-redux';
import { addTodo, searchWord } from "../redux/todo-slice/todoSlice";
import { nanoid } from '@reduxjs/toolkit';
// import moment from 'moment/moment';

function Header() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");


  const handleSubmit = (e) => {
    if(!title) return;

    e.preventDefault();

    dispatch(addTodo({ id: nanoid(), title, completed: false, colorGroup: "black", time: new Date() }));

    setTitle("");
  };
  
  const searchTodo = (e) => {
    dispatch(searchWord(e))
  }

  return (
    <div style={{width: 500}}>
      
      <form >
      <input placeholder='Search' onChange={(e) => searchTodo(e.target.value)} />

        <textarea type='text' autoFocus value={title} placeholder='What do you want to do?' onChange={(e) => setTitle(e.target.value)} />
        <button onClick={handleSubmit}>ADD</button>

      </form>
      
    </div>
  )
}

export default Header