"use client";

import { addItem } from "@/lib/features/cart/cartSlice";
import { useAppDispatch } from "@/lib/hooks";
import { Product } from "@/models/product";
import formatter from "@/utils/formatter";
import Image from "next/image";

export const HomeCard = ({ product }: { product: Product }) => {
	const dispatch = useAppDispatch();
	const handleAddToCart = (item: Product) => dispatch(addItem(item));
	return (
		<div
			key={product.id}
			className=" w-72 h-fit flex flex-col items-center p-8 gap-4 shadow-xl cursor-pointer"
			onClick={() => handleAddToCart(product)}
		>
			<Image
				src={`${process.env.NEXT_PUBLIC_URL}/${product.image}`}
				width={512}
				height={512}
				alt={product.name}
			/>
			<div className=" text-lg font-bold">{product.name}</div>
			<div className=" text-lg">₩{formatter(product.price)}원</div>
		</div>
	);
};
