import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		products: [],
	},
	reducers: {
		addProductToCart(state, action) {
			state.products = action.payload;
		},
	},
});

export const { addProductToCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
