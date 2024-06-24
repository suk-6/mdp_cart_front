"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Slide, toast } from "react-toastify";

export default function LoginPage() {
	const router = useRouter();
	const login = () => {
		const id = document.getElementById("id") as HTMLInputElement;
		const password = document.getElementById(
			"password"
		) as HTMLInputElement;

		if (id.value === "" || password.value === "") {
			alert("모든 항목을 입력해주세요");
			return;
		}

		return signIn("credentials", {
			id: id.value,
			password: password.value,
			redirect: false,
		}).then((res) => {
			if (res?.ok) {
				router.push("/");
			} else {
				toast.warn("로그인에 실패했습니다.", {
					position: "bottom-right",
					autoClose: 3000,
					hideProgressBar: true,
					progress: 0,
					theme: "light",
					transition: Slide,
				});
			}
		});
	};

	return (
		<div className=" w-full h-fit flex flex-col pt-10">
			<div className=" flex justify-center items-center w-full h-full p-10 my-20">
				<div className=" p-36 flex flex-col">
					<div className=" text-center font-bold text-xl">로그인</div>
					<div className=" w-96 flex flex-col gap-4 mt-10">
						<input
							type="text"
							id="id"
							name="id"
							placeholder="아이디"
							className=" p-2 border border-gray-300 rounded-md"
							onKeyDown={(e) => {
								if (e.key === "Enter") {
									login();
								}
							}}
						/>
						<input
							type="password"
							id="password"
							name="password"
							placeholder="비밀번호"
							className=" p-2 border border-gray-300 rounded-md"
							onKeyDown={(e) => {
								if (e.key === "Enter") {
									login();
								}
							}}
						/>
						<button
							className=" bg-[#ff6b6b] hover:bg-[#ff4b4b] text-white rounded-lg py-2"
							onClick={login}
						>
							로그인
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
