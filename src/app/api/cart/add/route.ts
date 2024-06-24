import { CartDTO } from "@/models/cart";
import prisma from "@/db/prisma";

export const POST = async (req: Request) => {
	const data = (await req.json()) as CartDTO;
	const userId = (
		await prisma.apiKey.findUnique({
			where: {
				key: data.key,
			},
			select: {
				userId: true,
			},
		})
	)?.userId;
	if (!userId)
		return new Response(null, {
			status: 401,
			statusText: "Unauthorized",
		});

	const user = prisma.user.findUnique({
		where: {
			id: userId,
		},
	});
	if (!user)
		return new Response(null, {
			status: 401,
			statusText: "Unauthorized",
		});

	return prisma.cart
		.create({
			data: {
				items: JSON.stringify({ items: data.items }),
				userId: userId,
			},
		})
		.then(
			(cart) =>
				new Response(JSON.stringify(cart), {
					status: 200,
					headers: {
						"Content-Type": "application/json",
					},
				})
		)
		.catch(
			() =>
				new Response(null, {
					status: 500,
					statusText: "Internal Server Error",
				})
		);
};
