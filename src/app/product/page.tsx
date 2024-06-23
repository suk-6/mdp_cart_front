"use client";

import { ProductCard } from "@/components/product/productCard";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
	addItem,
	getCartItems,
	increaseQuantity,
} from "@/lib/features/cart/cartSlice";
import { Product, ProductInCart } from "@/models/product";
import data from "@/data.json";

export default function ProductPage() {
	const cartItems = useAppSelector(getCartItems);
	const dispatch = useAppDispatch();
	const handleAddToCart = (item: Product) => {
		if (cartItems.find((cartItem) => cartItem.id === item.id)) {
			dispatch(increaseQuantity(item.id));
		} else {
			const productInCart: ProductInCart = {
				id: item.id,
				name: item.name,
				price: item.price,
				quantity: 1,
			};

			dispatch(addItem(productInCart));
		}
	};

	return (
		<div className=" w-full h-fit flex flex-col items-center gap-6 pt-10 ">
			<div className="text-center text-3xl font-bold">제품 목록</div>
			<div className=" w-full flex flex-wrap gap-6 justify-center items-center p-20">
				{data.products.map((product: Product) => (
					<ProductCard
						key={product.id}
						product={product}
						onAddToCart={handleAddToCart}
					/>
				))}
			</div>
		</div>
	);
}
