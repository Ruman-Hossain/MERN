import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../state/counter/counterSlice';
export default configureStore({
    reducer:{
        counter:counterReducer
    }
});