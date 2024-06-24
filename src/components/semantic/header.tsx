"use client";
import { signOut, useSession } from "next-auth/react";
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
	{ name: "마이페이지", href: "/mypage" },
	{ name: "로그아웃", func: signOut },
];

export const Header = () => {
	const session = useSession();
	const isAuthenticated = session.status === "authenticated";

	return (
		<header className="w-full h-16 bg-[#333] text-white flex items-center justify-between p-6 px-20 text-nowrap">
			<Link href={"/"}>
				<h1 className="text-3xl font-bold">🛒통통카트</h1>
			</Link>
			<nav className=" flex flex-row gap-6">
				{pages.map((page, i) => (
					<Link key={i} href={page.href}>
						<div>{page.name}</div>
					</Link>
				))}
				{!isAuthenticated &&
					unauthenticatedPages.map((page, i) => (
						<Link key={i} href={page.href}>
							<div>{page.name}</div>
						</Link>
					))}
				{isAuthenticated &&
					authenticatedPages.map((page, i) =>
						page.href ? (
							<Link key={i} href={page.href}>
								<div>{page.name}</div>
							</Link>
						) : (
							page.func && (
								<div
									key={i}
									onClick={() => page.func()}
									className=" cursor-pointer"
								>
									{page.name}
								</div>
							)
						)
					)}
			</nav>
		</header>
	);
};
