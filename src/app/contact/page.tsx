"use client";

export default function ContactPage() {
	return (
		<div className=" w-full h-fit flex flex-col gap-0 pt-10">
			<div className=" text-center font-bold text-2xl">문의하기</div>
			<div className=" flex flex-col gap-2 px-14 py-6">
				<div>문의 사항이 있으시면 아래의 정보로 연락해주세요.</div>
				<div>Email: info@tongtongcart.com</div>
				<div>전화번호: 010-1234-5678</div>
			</div>
		</div>
	);
}
