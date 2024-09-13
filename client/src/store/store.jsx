import { thunk } from 'redux-thunk';
import rootReducer from './root'
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});