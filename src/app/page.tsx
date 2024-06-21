import Link from "next/link";
import data from "@/data.json";
import formatter from "@/utils/formatter";

export default function Home() {
	return (
		<main className=" w-full h-fit flex flex-col gap-y-28">
			<div className=" w-full h-full flex flex-col justify-center items-center p-16 gap-6">
				<div className=" text-center">
					<div className=" text-2xl font-bold mb-1">
						최고의 제품을 최고의 가격에
					</div>
					<div className=" text-lg">통통카트에서 쇼핑하세요</div>
				</div>
				<Link
					href="/products"
					className="py-2 px-8 bg-[#ff6b6b] hover:bg-[#ff4b4b] text-white rounded-lg"
				>
					지금 쇼핑하기
				</Link>
			</div>
			<div className=" w-full h-full flex flex-col gap-6 mb-5">
				<div className=" text-center font-bold text-2xl">추천 제품</div>
				<div className=" flex flex-row gap-10 px-12">
					{data.products
						.sort(() => 0.5 - Math.random())
						.filter((_, i) => i < 3)
						.map((product, i) => (
							<div
								key={product.id}
								className=" w-72 h-52 flex flex-col items-center p-8 gap-4 bg-gray-100 shadow-xl"
							>
								<div className=" text-lg font-bold">
									{product.name}
								</div>
								<div className=" text-lg">
									₩{formatter(product.price)}원
								</div>
							</div>
						))}
				</div>
			</div>
		</main>
	);
}
