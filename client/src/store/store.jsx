import rootReducer from './root'
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
    reducer: rootReducer,
});