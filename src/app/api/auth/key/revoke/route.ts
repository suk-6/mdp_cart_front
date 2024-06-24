import prisma from "@/db/prisma";
import { getCurrentUser } from "@/db/actions/getCurrentUser";

export const GET = async () => {
	const user = await getCurrentUser();
	if (!user) {
		return new Response(null, {
			status: 401,
			statusText: "Unauthorized",
		});
	}

	return prisma.apiKey
		.deleteMany({
			where: {
				userId: user.id,
			},
		})
		.then(
			() =>
				new Response(JSON.stringify({ message: "success" }), {
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
