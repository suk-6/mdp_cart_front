import bcrypt from "bcrypt";
import prisma from "@/db/prisma";
import { getCurrentUser } from "@/db/actions/getCurrentUser";

export const GET = async () => {
	const key = await bcrypt.hash(Date.now().toString(), 16);
	const user = await getCurrentUser();
	if (!user) {
		return new Response(null, {
			status: 401,
			statusText: "Unauthorized",
		});
	}

	return prisma.apiKey
		.create({
			data: {
				key,
				userId: user.id,
			},
		})
		.then(
			() =>
				new Response(JSON.stringify({ key }), {
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
