"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "@/lib/store";
import { initializeProduct } from "@/lib/features/cart/cartSlice";

export default function StoreProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const storeRef = useRef<AppStore | null>(null);
	if (!storeRef.current) {
		storeRef.current = makeStore();
		storeRef.current.dispatch(initializeProduct());
	}

	return <Provider store={storeRef.current}>{children}</Provider>;
}
