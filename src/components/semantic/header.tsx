import Link from "next/link";

const pages = [
	{ name: "홈", href: "/" },
	{ name: "제품", href: "/product" },
	{ name: "소개", href: "/about" },
	{ name: "문의", href: "/contact" },
	{ name: "로그인", href: "/login" },
	{ name: "회원가입", href: "/register" },
];

export const Header = () => {
	return (
		<header className="w-full h-16 bg-[#333] text-white flex items-center justify-between p-6 px-10">
			<Link href={"/"}>
				<h1 className="text-3xl font-bold">🛒통통카트</h1>
			</Link>
			<nav className=" flex flex-row gap-3">
				{pages.map((page) => (
					<Link key={page.href} href={page.href}>
						<div>{page.name}</div>
					</Link>
				))}
			</nav>
		</header>
	);
};
