import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/semantic/header";
import { Footer } from "@/components/semantic/footer";

export const metadata: Metadata = {
	title: "🛒통통카트",
	description: "🛒통통카트",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ko">
			<body>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
