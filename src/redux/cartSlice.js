import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		productsCart: [],
		totalPrice: 0,
	},
	reducers: {
		addProductToCart(state, action) {
			state.productsCart.push(action.payload);
			state.totalPrice = state.totalPrice + action.payload.price;
		},
		removeProductCart(state, action) {
			state.productsCart = state.productsCart.filter(product => product.id !== action.payload.id);
			state.totalPrice = state.totalPrice - action.payload.price
		},
	},
});

export const { addProductToCart, removeProductCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
