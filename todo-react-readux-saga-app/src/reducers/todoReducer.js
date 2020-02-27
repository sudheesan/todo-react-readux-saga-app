import {ADD_TODO} from '../actions/actionTypes'


const initialState = {
     todos : ['get up','to work','go home']
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            // All done: set loading "true"
           return  {
                ...state,
                todos: [...state.todos, action.payload]
            }

        default:
            return state;
    }
}
export default todoReducer;
