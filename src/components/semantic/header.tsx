export const Header = () => {
	return (
		<header className="w-full h-16 bg-[#333] text-white flex items-center justify-between p-4">
			<h1 className="text-2xl">🛒통통카트</h1>
			<nav className=" flex flex-row gap-3">
				<div>홈</div>
				<div>제품</div>
				<div>소개</div>
				<div>문의</div>
				<div>로그인</div>
				<div>회원가입</div>
			</nav>
		</header>
	);
};
