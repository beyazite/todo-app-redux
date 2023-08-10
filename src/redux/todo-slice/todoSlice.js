import { createSlice , } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

let abc = {...localStorage};
console.log(abc);
// get localStorage values starts
let localS = [];
for (let i = 0; i < localStorage.length; i++) {
     localS.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
  }
  console.log(localS);

// get localStorage values ends

// initial state declaration starts
  var c = [];
  var d =[];
  for (var i = 0; i < localStorage.length; i++) {

    // set iteration key name
    var key = localStorage.key(i);
  
    // use key name to retrieve the corresponding value
    var value = localStorage.getItem(key);
  
  
   
    c.push(value);

   d.push(JSON.parse(c[i]));


   d.sort((a,b) => new Date(b.time) - new Date(a.time));
   
  }
const initialState = {items: d, activeFilter: "all"};
// initial state declaration ends

export const todoSlice = createSlice({
    name: "todos",
     initialState
    //  {
    //     items: [
    //         {
    //             id: nanoid(),
    //             title: "Prank Frank!",
    //             completed: false,
    //             colorGroup: "black",
                
    //         },
    //         {
    //             id: nanoid(),
    //             title: "Conclude Redux Todo App until thursday night.",
    //             completed: false,
    //             colorGroup: "red"
    //         },
            
    //     ],
        
    // activeFilter: "all",
    // }
     ,
    searching: false,
    done: false,
        reducers: {
            // addTodo: (state,action) => {
            //     state.items.push(action.payload);
            // },
            addTodo: (state,action) => {
                localStorage.setItem(action.payload.id,JSON.stringify(action.payload));
                //state.items.unshift(action.payload);
                state.items = [action.payload, ...state.items]
            },

            // removeItem: (state,action) => {
            //     const id = action.payload;
            //     const filtered = state.items.filter((item) => item.id !== id);
            //     state.items = filtered;
            // },

              removeItem: (state,action) => {
                 const id = action.payload;
                const filtered = state.items.filter((item) => item.id !== id);
                 state.items = filtered;
                localStorage.removeItem(id);
               },

               editTodo: (state, action) => {
                let id = action.payload.id;
                let editedTodo = JSON.parse(localStorage.getItem(action.payload.id));
                editedTodo.title = action.payload.title;
                editedTodo.completed = action.payload.completed;
                localStorage.setItem(action.payload.id, JSON.stringify(editedTodo));
                const filtered = state.items.filter((item)=> item.id !== id);
                state.items = filtered;
                state.items = [action.payload, ...state.items];
                //state.items = [action.payload, ...todos];
               },

            searchWord: (state, action) => {
                state.searching = action.payload;
            },

            toggleCompleted: (state, action) => {
                const {id} = action.payload;
                const item = state.items.find(it => it.id === id);
                item.completed = !item.completed;
                let toggleLocal = localStorage.getItem(id);
                toggleLocal = JSON.parse(toggleLocal);
                toggleLocal["completed"] = !toggleLocal["completed"];
                localStorage.setItem(id,JSON.stringify(toggleLocal));
            },
            
            changeActiveFilter: (state,action) => {
                state.activeFilter = action.payload;
                // const activeFil = action.payload;
                // localStorage.setItem("activeFilter",activeFil);
                
            },
            // removeAll: (state) => {
            //     state.items = [];
            // }
            removeAll: (state) => {
                localStorage.clear();
                state.items = [];
            }
            
        
    }
});

    
export const selectFiltered = state => {
    if(state.todos.activeFilter === "all") {
        //console.log(state.todos.items);
        return state.todos.items;
    } 
    return state.todos.items.filter((todo) => state.todos.activeFilter === "active" ? todo.completed === false : todo.completed === true);
}


export const {addTodo,  removeItem, editTodo, searchWord, toggleCompleted , changeActiveFilter, removeAll } = todoSlice.actions;

export default todoSlice.reducer;