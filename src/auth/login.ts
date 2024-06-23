"use server";

import { signIn } from "next-auth/react";

export default async function handler(id: string, password: string) {
	return await signIn("credentials", {
		id,
		password,
		redirect: true,
		callbackUrl: "/",
	});
}
