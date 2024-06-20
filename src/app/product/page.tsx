"use client";

import { ProductCard } from "@/components/product/productCard";

export default function ProductPage() {
	return (
		<div className=" w-full h-fit flex flex-col gap-6 pt-10">
			<div className="text-center text-3xl font-bold">제품 목록</div>
			<div className=" flex flex-col p-10 gap-6">
				<ProductCard
					product={{ id: 1, name: "제품1", price: 10000 }}
					onAddToCart={() => {}}
				/>
				<ProductCard
					product={{ id: 2, name: "제품2", price: 10000 }}
					onAddToCart={() => {}}
				/>
				<ProductCard
					product={{ id: 3, name: "제품3", price: 10000 }}
					onAddToCart={() => {}}
				/>
			</div>
		</div>
	);
}
