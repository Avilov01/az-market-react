import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
	name: 'product',
	initialState: {
		products: [],
		isLoaded: false,
	},
	reducers: {
		addProducts(state, action) {
			state.products = action.payload;
			state.isLoaded = true;
		},
	},
});

export const { addProducts } = productSlice.actions;
export const productReducer = productSlice.reducer;
