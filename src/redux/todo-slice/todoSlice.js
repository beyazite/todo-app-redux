import { createSlice , nanoid} from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "todos",
    initialState: {
        items: [
            {
                id: nanoid(),
                title: "Prank Frank!",
                completed: false,
                colorGroup: "black",
                
            },
            {
                id: nanoid(),
                title: "Conclude Redux Todo App until thursday night.",
                completed: false,
                colorGroup: "red"
            },
            
        ],
        
    activeFilter: "all",
    },
    searching: false,
    done: false,
        reducers: {
            // addTodo: (state,action) => {
            //     state.items.push(action.payload);
            // },
            addTodo: (state,action) => {
                localStorage.setItem("todos",JSON.stringify(action.payload));
                state.items.push(action.payload);
            },

            removeItem: (state,action) => {
                const id = action.payload;
                const filtered = state.items.filter((item) => item.id !== id);
                state.items = filtered;
            },

            searchWord: (state, action) => {
                state.searching = action.payload;
            },

            toggleCompleted: (state, action) => {
                const {id} = action.payload;
                const item = state.items.find(it => it.id === id);
                item.completed = !item.completed;
            },
            
            changeActiveFilter: (state,action) => {
                state.activeFilter = action.payload;
            },
            removeAll: (state) => {
                state.items = [];
            }
            
        
    }
});

export const selectFiltered = state => {
    if(state.todos.activeFilter === "all") {
        return state.todos.items;
    } 
    return state.todos.items.filter((todo) => state.todos.activeFilter === "active" ? todo.completed === false : todo.completed === true);
}


export const {addTodo,  removeItem, searchWord, toggleCompleted , changeActiveFilter, removeAll } = todoSlice.actions;

export default todoSlice.reducer;