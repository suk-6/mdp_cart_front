"use client";

import { ProductCard } from "@/components/product/productCard";
import data from "@/data.json";

export default function ProductPage() {
	return (
		<div className=" w-full h-fit flex flex-col gap-6 pt-10">
			<div className="text-center text-3xl font-bold">제품 목록</div>
			<div className=" flex flex-col p-10 gap-6">
				{data.products.map((product) => (
					<ProductCard
						key={product.id}
						product={product}
						onAddToCart={() => {}}
					/>
				))}
			</div>
		</div>
	);
}
