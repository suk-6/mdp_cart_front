import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/semantic/header";
import { Footer } from "@/components/semantic/footer";
import { Provider } from "react-redux";
import StoreProvider from "./StoreProvider";

export const metadata: Metadata = {
	title: "🛒통통카트",
	description: "최고의 제품을 최고의 가격에 통통카트에서 쇼핑하세요",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ko">
			<body>
				<StoreProvider>
					<Header />
					{children}
					<Footer />
				</StoreProvider>
			</body>
		</html>
	);
}
