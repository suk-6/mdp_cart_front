"use server";
import prisma from "@/db/prisma";
import { getCurrentUser } from "@/db/actions/getCurrentUser";

export const getCart = async () => {
	const user = await getCurrentUser();
	if (!user) return null;

	const items: number[] = [];
	const cart = await prisma.cart.findMany({
		where: {
			userId: user.id,
		},
	});
	if (!cart) return null;

	for (const item of cart) {
		items.push(...JSON.parse(item.items).items);
	}

	await prisma.cart.deleteMany({
		where: {
			userId: user.id,
		},
	});

	return items;
};
