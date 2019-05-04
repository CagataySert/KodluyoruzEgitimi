import {
    GET_TODO_LIST,
    ADD_TODO_LIST,
    DELETE_TODO_LIST,
    UPDATE_TODO_LIST
} from './types';
import _storeData from '../components/StoreData';
import _retrieveData from '../components/RetrieveData';


export const getToDoList = () => {
    return (dispatch) => {
        const response = _retrieveData();
        response.then(data => {
            dispatch({
                type: GET_TODO_LIST,
                payload: data
            })
        });
    }
}

export const addNewNote = (data) => {
    return (dispatch) => {
        _storeData(data);
        dispatch({
            type: ADD_TODO_LIST,
            payload: data
        });
    }
};

export const deleteNote = id => {
    return (dispatch) => {
        try {
            const response = _retrieveData();

            response.then(data => {
                const newData = data.filter(attachedNote => attachedNote.id !== id);
                dispatch({
                    type: DELETE_TODO_LIST,
                    payload: newData
                });
            });
        } catch (error) {
            console.log(error.message);
        }
    }
};