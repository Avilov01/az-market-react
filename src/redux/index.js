import { configureStore } from '@reduxjs/toolkit';
import { productReducer } from './productSlice';
import { combineReducers } from 'redux';
import { cartReducer } from './cartSlice';

const rootReducer = combineReducers({
	products: productReducer,
	cart: cartReducer,
});

export const store = configureStore({
	reducer: rootReducer,
});
