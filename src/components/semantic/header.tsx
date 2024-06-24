"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";

const pages = [
	{ name: "홈", href: "/" },
	{ name: "제품", href: "/product" },
	{ name: "장바구니", href: "/cart" },
	{ name: "소개", href: "/about" },
	{ name: "문의", href: "/contact" },
];

const unauthenticatedPages = [
	{ name: "로그인", href: "/login" },
	{ name: "회원가입", href: "/register" },
];

const authenticatedPages = [
	{ name: "로그아웃", href: "/logout" },
	{ name: "마이페이지", href: "/mypage" },
];

export const Header = () => {
	const session = useSession();
	const isAuthenticated = session.data;

	return (
		<header className="w-full h-16 bg-[#333] text-white flex items-center justify-between p-6 px-20 text-nowrap">
			<Link href={"/"}>
				<h1 className="text-3xl font-bold">🛒통통카트</h1>
			</Link>
			<nav className=" flex flex-row gap-6">
				{pages.map((page) => (
					<Link key={page.href} href={page.href}>
						<div>{page.name}</div>
					</Link>
				))}
				{isAuthenticated &&
					authenticatedPages.map((page) => (
						<Link key={page.href} href={page.href}>
							<div>{page.name}</div>
						</Link>
					))}
				{!isAuthenticated &&
					unauthenticatedPages.map((page) => (
						<Link key={page.href} href={page.href}>
							<div>{page.name}</div>
						</Link>
					))}
			</nav>
		</header>
	);
};
