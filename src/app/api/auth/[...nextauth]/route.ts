import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/db/prisma";
import bcrypt from "bcrypt";
import { UserModel } from "@/models/user";

const handler = NextAuth({
	pages: {
		signIn: "login",
	},
	providers: [
		CredentialsProvider({
			name: "Login",
			credentials: {
				id: {
					label: "ID",
					type: "text",
				},
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials, req): Promise<UserModel | null> {
				if (!credentials) return null;

				const user = await prisma.user.findUnique({
					where: {
						id: credentials.id,
					},
				});
				if (!user) return null;

				const passwordMatched = await bcrypt.compare(
					credentials.password,
					user.password!
				);
				if (!passwordMatched) return null;

				return {
					id: user.id,
					email: user.email,
					name: user.name,
				};
			},
		}),
	],
});

export { handler as GET, handler as POST };
