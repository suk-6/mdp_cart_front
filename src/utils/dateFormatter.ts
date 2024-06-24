export default new Intl.DateTimeFormat("ko-KR", {
	year: "numeric",
	month: "long",
	day: "numeric",
	hour: "numeric",
	minute: "numeric",
	second: "numeric",
}).format;
