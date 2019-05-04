import { combineReducers } from 'redux';
import { ToDoListReducer } from './ToDoListReducer';


export default combineReducers({
    toDoListResponse: ToDoListReducer
});