"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
	getCartItems,
	increaseQuantity,
	decreaseQuantity,
	removeItem,
	addItem,
} from "@/lib/features/cart/cartSlice";
import { CartCard } from "@/components/cart/cartCard";
import { getCart } from "@/db/actions/getCart";
import data from "@/data.json";
import { warnToast } from "@/utils/alert";

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

	const getDBCart = async () => {
		const items = await getCart();
		if (!items || items.length === 0) {
			warnToast("장바구니에 담긴 상품이 없습니다.");
			return;
		}

		items.map((item: number) => {
			const product = data.products.find(
				(product) => product.id === item
			);

			if (product) dispatch(addItem(product));
		});
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
			<button
				onClick={getDBCart}
				className=" px-8 py-4 m-4 bg-gray-300 hover:bg-gray-400 rounded-lg shadow-lg"
			>
				장바구니 불러오기
			</button>
		</div>
	);
}
