import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../state/todo/todoSlice'
export default configureStore({
    reducer:{
        todo:todoReducer
    }
});