"use client";

import { useRouter } from "next/navigation";
import { Slide, toast } from "react-toastify";

export default function RegisterPage() {
	const router = useRouter();
	const register = () => {
		const id = document.getElementById("id") as HTMLInputElement;
		const password = document.getElementById(
			"password"
		) as HTMLInputElement;
		const email = document.getElementById("email") as HTMLInputElement;
		const name = document.getElementById("name") as HTMLInputElement;

		if (
			id.value === "" ||
			password.value === "" ||
			email.value === "" ||
			name.value === ""
		) {
			alert("모든 항목을 입력해주세요");
			return;
		}

		fetch("/api/auth/register", {
			method: "POST",
			body: JSON.stringify({
				id: id.value,
				password: password.value,
				email: email.value,
				name: name.value,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => {
				if (res.ok) {
					toast.info("회원가입에 성공했습니다.", {
						position: "bottom-right",
						autoClose: 3000,
						hideProgressBar: true,
						progress: 0,
						theme: "light",
						transition: Slide,
					});
					router.push("/login");
				} else {
					toast.warn("회원가입에 실패했습니다.", {
						position: "bottom-right",
						autoClose: 3000,
						hideProgressBar: true,
						progress: 0,
						theme: "light",
						transition: Slide,
					});
				}
			})
			.catch(() => {
				toast.warn("회원가입에 실패했습니다.", {
					position: "bottom-right",
					autoClose: 3000,
					hideProgressBar: true,
					progress: 0,
					theme: "light",
					transition: Slide,
				});
			});
	};

	return (
		<div className=" w-full h-fit flex flex-col pt-10">
			<div className=" flex justify-center items-center w-full h-full p-10 my-20">
				<div className=" p-36 flex flex-col">
					<div className=" text-center font-bold text-xl">
						회원가입
					</div>
					<div className=" w-96 flex flex-col gap-4 mt-10">
						<input
							type="text"
							id="id"
							name="id"
							placeholder="아이디"
							className=" p-2 border border-gray-300 rounded-md"
							onKeyDown={(e) => {
								if (e.key === "Enter") {
									register();
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
									register();
								}
							}}
						/>
						<input
							type="email"
							id="email"
							name="email"
							placeholder="이메일"
							className=" p-2 border border-gray-300 rounded-md"
							onKeyDown={(e) => {
								if (e.key === "Enter") {
									register();
								}
							}}
						/>
						<input
							type="text"
							id="name"
							name="name"
							placeholder="이름"
							className=" p-2 border border-gray-300 rounded-md"
							onKeyDown={(e) => {
								if (e.key === "Enter") {
									register();
								}
							}}
						/>
						<button
							className=" bg-[#ff6b6b] hover:bg-[#ff4b4b] text-white rounded-lg py-2"
							onClick={register}
						>
							회원가입
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
