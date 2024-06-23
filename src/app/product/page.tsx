"use client";

import { ProductCard } from "@/components/product/productCard";
import data from "@/data.json";
import { addItem } from "@/lib/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Product } from "@/models/product";

export default function ProductPage() {
	const dispatch = useAppDispatch();
	const handleAddToCart = (item: Product) => {
		dispatch(addItem(item));
	};
	const cartItems = useAppSelector((state) => state.cart.items);

	return (
		<div className=" w-full h-fit flex flex-col items-center gap-6 pt-10 ">
			<div className="text-center text-3xl font-bold">제품 목록</div>
			<div className=" w-full flex flex-wrap gap-6 justify-center items-center p-20">
				{data.products.map((product) => (
					<ProductCard
						key={product.id}
						product={product}
						onAddToCart={handleAddToCart}
					/>
				))}
				{cartItems.map((product: Product) => (
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
