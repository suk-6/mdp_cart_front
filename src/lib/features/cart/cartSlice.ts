import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/lib/store";
import { Product, ProductInCart } from "@/models/product";
import { Slide, toast } from "react-toastify";

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
		addItem: (state, action: PayloadAction<Product>) => {
			if (state.items.find((item) => item.id === action.payload.id)) {
				state.items = state.items.map((item) =>
					item.id === action.payload.id
						? { ...item, quantity: item.quantity + 1 }
						: item
				);
			} else state.items.push({ ...action.payload, quantity: 1 });

			toast.info("장바구니에 추가되었습니다.", {
				position: "bottom-right",
				autoClose: 3000,
				hideProgressBar: true,
				progress: 0,
				theme: "light",
				transition: Slide,
			});
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
