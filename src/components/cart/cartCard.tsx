"use client";

import { ProductInCart } from "@/models/product";
import formatter from "@/utils/formatter";

interface ProductCardProps {
	product: ProductInCart;
	onincreaseQuantity: (productId: number) => void;
	ondecreaseQuantity: (productId: number) => void;
	onRemoveToCart: (productId: number) => void;
}

export const CartCard = ({
	product,
	onRemoveToCart,
	onincreaseQuantity,
	ondecreaseQuantity,
}: ProductCardProps) => {
	return (
		<div className=" w-96 h-40 bg-gray-100 rounded-lg shadow-lg float-left">
			<div className=" flex flex-col gap-2 p-4">
				<div className=" text-lg font-bold">{product.name}</div>
				<div className=" text-sm">₩{formatter(product.price)}원</div>
				<div className=" text-sm">{product.quantity}개</div>
				<div className=" flex flex-row gap-4 w-full h-full mt-1">
					<button
						onClick={() => onincreaseQuantity(product.id)}
						className=" w-1/2 text-xl bg-gray-500 hover:bg-gray-600 text-white rounded-lg py-1"
					>
						+
					</button>
					<button
						onClick={() => ondecreaseQuantity(product.id)}
						className=" w-1/2 text-xl bg-gray-500 hover:bg-gray-600 text-white rounded-lg py-1"
					>
						-
					</button>
					<button
						onClick={() => onRemoveToCart(product.id)}
						className=" w-full bg-gray-500 hover:bg-gray-600 text-white rounded-lg py-1"
					>
						제거
					</button>
				</div>
			</div>
		</div>
	);
};
