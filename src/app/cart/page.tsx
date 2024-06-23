"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
	getCartItems,
	increaseQuantity,
	decreaseQuantity,
	removeItem,
} from "@/lib/features/cart/cartSlice";
import { CartCard } from "@/components/cart/cartCard1";

export default function CartPage() {
	const cartItems = useAppSelector(getCartItems);

	const dispatch = useAppDispatch();
	const handleIncreaseQuantity = (itemId: number) => {
		dispatch(increaseQuantity(itemId));
	};
	const handleDecreaseQuantity = (itemId: number) => {
		if (
			cartItems.find((cartItem) => cartItem.id === itemId)?.quantity === 1
		) {
			dispatch(removeItem(itemId));
			return;
		}
		dispatch(decreaseQuantity(itemId));
	};
	const handleRemoveToCart = (itemId: number) => {
		dispatch(removeItem(itemId));
	};

	return (
		<div className=" w-full h-fit flex flex-col items-center gap-6 pt-10 ">
			<div className="text-center text-3xl font-bold">장바구니 목록</div>
			<div className=" w-full flex flex-wrap gap-6 justify-center items-center p-20">
				{cartItems.length === 0 ? (
					<div>장바구니에 담긴 상품이 없습니다.</div>
				) : (
					cartItems.map((product) => (
						<CartCard
							key={product.id}
							product={product}
							onincreaseQuantity={handleIncreaseQuantity}
							ondecreaseQuantity={handleDecreaseQuantity}
							onRemoveToCart={handleRemoveToCart}
						/>
					))
				)}
			</div>
		</div>
	);
}
