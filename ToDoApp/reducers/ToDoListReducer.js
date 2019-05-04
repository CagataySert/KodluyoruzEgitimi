import { GET_TODO_LIST, UPDATE_TODO_LIST, DELETE_TODO_LIST, ADD_TODO_LIST } from '../actions/types';

const INITIAL_STATE = {
    data: []
}

export const ToDoListReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case GET_TODO_LIST:
            return { ...state, data: [...state.data, payload] };
        case ADD_TODO_LIST:
            return { ...state, data: [payload] };
        case DELETE_TODO_LIST:
            return { ...state, data: [payload] };
        default:
            return state;
    }
}