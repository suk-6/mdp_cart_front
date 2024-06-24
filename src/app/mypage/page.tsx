"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { getCurrentUser } from "@/db/actions/getCurrentUser";
import { useEffect, useState } from "react";
import { DBUserModel } from "@/models/user";
import dateFormatter from "@/utils/dateFormatter";

export default function MypagePage() {
	const router = useRouter();
	const [user, setUser] = useState<DBUserModel | null>(null);
	const {
		data: session,
		status,
		update,
	} = useSession({
		required: true,
		onUnauthenticated: () => {
			router.push("/login");
		},
	});

	useEffect(() => {
		getCurrentUser().then((user: DBUserModel | null) => {
			if (!user) {
				router.push("/login");
			}
			setUser(user);
		});
	}, [router, session]);

	if (status === "loading") return <div>로딩중...</div>;

	return (
		<div className="container mx-auto px-4 md:px-6 py-8">
			<div className="grid md:grid-cols-[1fr_2fr] gap-8">
				<div className="bg-background rounded-lg shadow-md p-6">
					<div className="flex items-center gap-4">
						<div>
							<h1 className="text-2xl font-bold">{user?.name}</h1>
							<p className="text-muted-foreground">
								{user?.email}
							</p>
						</div>
					</div>
					<div className=" w-full mt-[1%] border-[1px] border-gray-500 my-6" />
					<div className="grid gap-4">
						<div>
							<p className="text-sm font-medium">가입일</p>
							<p className="text-muted-foreground">
								{dateFormatter(user?.createdAt)}
							</p>
						</div>
						<div>
							<p className="text-sm font-medium">수정일</p>
							<p className="text-muted-foreground">
								{dateFormatter(user?.updatedAt)}
							</p>
						</div>
					</div>
				</div>
				<div className="bg-background rounded-lg shadow-md p-6">
					<h2 className="text-2xl font-bold mb-4">Order History</h2>
					<div className="grid gap-4">
						주문 내역이 없습니다.
						{/* {user.orders.map((order) => (
							<Card key={order.id}>
								<CardHeader>
									<CardTitle>Order #{order.id}</CardTitle>
									<CardDescription>
										{order.date}
									</CardDescription>
								</CardHeader>
								<CardContent>
									<Table>
										<TableHeader>
											<TableRow>
												<TableHead>Item</TableHead>
												<TableHead>Quantity</TableHead>
												<TableHead>Price</TableHead>
											</TableRow>
										</TableHeader>
										<TableBody>
											{order.items.map((item, index) => (
												<TableRow key={index}>
													<TableCell>
														{item.name}
													</TableCell>
													<TableCell>
														{item.quantity}
													</TableCell>
													<TableCell>
														${item.price.toFixed(2)}
													</TableCell>
												</TableRow>
											))}
										</TableBody>
									</Table>
									<div className="flex justify-end mt-4">
										<p className="text-lg font-bold">
											Total: ${order.total.toFixed(2)}
										</p>
									</div>
								</CardContent>
							</Card>
						))} */}
					</div>
				</div>
			</div>
		</div>
	);
}
