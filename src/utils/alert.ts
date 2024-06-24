import { Slide, toast } from "react-toastify";

export const infoToast = (message: string) => {
	toast.info(message, {
		position: "bottom-right",
		autoClose: 3000,
		hideProgressBar: true,
		progress: 0,
		theme: "light",
		transition: Slide,
	});
};

export const warnToast = (message: string) => {
	toast.warn(message, {
		position: "bottom-right",
		autoClose: 3000,
		hideProgressBar: true,
		progress: 0,
		theme: "light",
		transition: Slide,
	});
};
