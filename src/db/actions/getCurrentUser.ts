"use server";
import { getServerSession } from "next-auth";
import prisma from "@/db/prisma";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const getCurrentUser = async () => {
	try {
		const session = await getServerSession(authOptions);
		if (!session?.user?.email) {
			return null;
		}

		const currentUser = await prisma.user.findUnique({
			where: {
				email: session.user.email,
			},
		});

		if (!currentUser) {
			return null;
		}

		return await {
			id: currentUser.id,
			email: currentUser.email,
			name: currentUser.name,
			createdAt: currentUser.createdAt,
			updatedAt: currentUser.updatedAt,
		};
	} catch (error) {
		return null;
	}
};
