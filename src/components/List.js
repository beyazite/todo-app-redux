import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {   removeItem, selectFiltered, toggleCompleted } from '../redux/todo-slice/todoSlice'

function List() {
  
  const dispatch = useDispatch();

  // 0 const todoItems = useSelector(state => state.todos.items)
  
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



  return (
    <div>
      
     
        {  /* 0 <div>
          {
          todoItems
       .filter((item) => {
        return !searching ? item 
        : item.title.toLowerCase().includes(searching.toLowerCase());
       })
       .map((item) => (
        
        <div key={item.id} style={{backgroundColor: "purple"}}>
          <p  onClick={() => isCompl(item.id)} style={{textDecoration: item.completed ? "line-through" : "none"}}>{item.title}</p>
          <button>Edit</button>
          <button onClick={() => handleDestroy(item.id)}>X</button>

        </div>
        
        
       ))
         }
        </div>  */}

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
          <button>Edit</button>
          <button onClick={() => handleDestroy(item.id)}>X</button>

        </div>
        
        
       ))
         }
        </div>
      
      
    </div>
  )
}

export default List