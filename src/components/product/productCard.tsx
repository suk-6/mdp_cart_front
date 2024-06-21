"use client";

import { Product } from "@/models/product";
import formatter from "@/utils/formatter";

interface ProductCardProps {
	product: Product;
	onAddToCart: (product: Product) => void;
}

export const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
	return (
		<div className=" w-96 h-32 bg-gray-100 rounded-lg shadow-lg float-left">
			<div className=" flex flex-col gap-2 p-4">
				<div className=" text-lg font-bold">{product.name}</div>
				<div className=" text-sm">₩{formatter(product.price)}원</div>
				<button
					onClick={() => onAddToCart(product)}
					className=" bg-[#ff6b6b] hover:bg-[#ff4b4b] text-white rounded-lg py-1"
				>
					장바구니에 담기
				</button>
			</div>
		</div>
	);
};
