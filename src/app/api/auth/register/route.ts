import bcrypt from "bcrypt";
import prisma from "@/db/prisma";
import { RegisterDTO } from "@/models/user";

export async function POST(request: Request) {
	const data = (await request.json()) as RegisterDTO;

	const hashedPassword = await bcrypt.hash(data.password, 10);

	return await prisma.user
		.create({
			data: {
				id: data.id,
				email: data.email,
				password: hashedPassword,
				name: data.name,
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
				new Response(JSON.stringify({ message: "fail" }), {
					status: 400,
					headers: {
						"Content-Type": "application/json",
					},
				})
		);
}
