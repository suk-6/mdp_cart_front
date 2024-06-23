"use client";

import { Product } from "@/models/product";
import formatter from "@/utils/formatter";

interface ProductCardProps {
	product: Product;
	onRemoveToCart: (productId: number) => void;
}

export const CartCard = ({ product, onRemoveToCart }: ProductCardProps) => {
	return (
		<div className=" w-96 h-32 bg-gray-100 rounded-lg shadow-lg float-left">
			<div className=" flex flex-col gap-2 p-4">
				<div className=" text-lg font-bold">{product.name}</div>
				<div className=" text-sm">₩{formatter(product.price)}원</div>
				<button
					onClick={() => onRemoveToCart(product.id)}
					className=" bg-gray-500 hover:bg-gray-600 text-white rounded-lg py-1"
				>
					장바구니에서 제거
				</button>
			</div>
		</div>
	);
};
