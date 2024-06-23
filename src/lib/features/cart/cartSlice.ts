import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/lib/store";
import { ProductInCart } from "@/models/product";

export interface CartState {
	items: ProductInCart[];
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
		addItem: (state, action: PayloadAction<ProductInCart>) => {
			state.items.push(action.payload);
		},
		removeItem: (state, action: PayloadAction<number>) => {
			state.items = state.items.filter(
				(item) => item.id !== action.payload
			);
		},
		increaseQuantity: (state, action: PayloadAction<number>) => {
			const item = state.items.find((item) => item.id === action.payload);
			if (item) item.quantity += 1;
		},
		decreaseQuantity: (state, action: PayloadAction<number>) => {
			const item = state.items.find((item) => item.id === action.payload);
			if (item) item.quantity -= 1;
		},
	},
});

export const {
	initializeProduct,
	addItem,
	removeItem,
	increaseQuantity,
	decreaseQuantity,
} = cartSlice.actions;

export const getCartItems = (state: RootState) => state.cart.items;

export default cartSlice.reducer;
