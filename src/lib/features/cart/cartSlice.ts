import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { AppDispatch, RootState } from "@/lib/store";
import { Product } from "@/models/product";

export interface CartState {
	items: Product[];
}

const initialState: CartState = {
	items: [],
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		initializeProduct: (state) => {
			state.items = [];
		},
		addItem: (state, action: PayloadAction<Product>) => {
			state.items.push(action.payload);
		},
		removeItem: (state, action: PayloadAction<number>) => {
			state.items = state.items.filter(
				(item) => item.id !== action.payload
			);
		},
	},
});

export const { initializeProduct, addItem, removeItem } = cartSlice.actions;

export const getCartItems = (state: RootState) => state.cart.items;

export default cartSlice.reducer;
