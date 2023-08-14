import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {   removeItem, selectFiltered, toggleCompleted } from '../redux/todo-slice/todoSlice'
import { openModal } from '../redux/todo-slice/modalSlice';
// import moment from 'moment';

function List() {
  
  const dispatch = useDispatch();

  
  const todoItems = useSelector(selectFiltered);
 

  const searching = useSelector(state => state.todos.searching);


  const handleDestroy = (id) => {
   if(window.confirm("Are you sure?")) {
    dispatch(removeItem(id));
   };
  };

  const isCompl = (id) => {
    dispatch(toggleCompleted({id: id}))
  }

  const editHandle = (item) => {
    dispatch(openModal({
      name: item.id,
      data: item
    }))
  }



  return (
    <div>
      

<div>
          {
          todoItems
          .filter((item) => {
        return !searching ? item 
        : item.title.toLowerCase().includes(searching.toLowerCase());
       })
       .map((item) => (
        
        <div key={item.id} style={{backgroundColor: "purple"}}>
          <p  onClick={() => isCompl(item.id)} style={{textDecoration: item.completed ? "line-through" : "none"}}>{item.title}</p>
          <button onClick={() => editHandle(item)}>Edit</button>
          <button onClick={() => handleDestroy(item.id)}>X</button>

        </div>
        

        
       ))
           
       
       }


        </div>
      
      
    </div>
  )
}

export default List