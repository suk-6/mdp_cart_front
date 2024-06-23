"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { getCartItems, removeItem } from "@/lib/features/cart/cartSlice";
import { CartCard } from "@/components/cart/CartCard";

export default function CartPage() {
	const cartItems = useAppSelector(getCartItems);

	const dispatch = useAppDispatch();
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
							onRemoveToCart={handleRemoveToCart}
						/>
					))
				)}
			</div>
		</div>
	);
}
