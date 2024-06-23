import type { Metadata } from "next";
import { Header } from "@/components/semantic/header";
import { Footer } from "@/components/semantic/footer";
import StoreProvider from "./StoreProvider";
import { ToastContainer } from "react-toastify";

import "./globals.css";
import "react-toastify/dist/ReactToastify.min.css";
import AuthProvider from "./SessionProvider";

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
				<AuthProvider>
					<StoreProvider>
						<Header />
						{children}
						<Footer />
						<ToastContainer />
					</StoreProvider>
				</AuthProvider>
			</body>
		</html>
	);
}
