import prisma from "@/db/prisma";
import crypto from "crypto";
import { getCurrentUser } from "@/db/actions/getCurrentUser";

export const GET = async () => {
	const randomBytes = crypto.randomBytes(16);
	const key = randomBytes.toString("hex");
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
