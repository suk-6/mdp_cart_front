import Link from "next/link";

export const Header = () => {
	return (
		<header className="w-full h-16 bg-[#333] text-white flex items-center justify-between p-4">
			<Link href={"/"}>
				<h1 className="text-2xl">🛒통통카트</h1>
			</Link>
			<nav className=" flex flex-row gap-3">
				<Link href={"/"}>
					<div>홈</div>
				</Link>
				<Link href={"/product"}>
					<div>제품</div>
				</Link>
				<Link href={"/about"}>
					<div>소개</div>
				</Link>
				<Link href={"/contact"}>
					<div>문의</div>
				</Link>
				<Link href={"/login"}>
					<div>로그인</div>
				</Link>
				<Link href={"/register"}>
					<div>회원가입</div>
				</Link>
			</nav>
		</header>
	);
};
