import { toast, type ToastOptions, type TypeOptions } from "react-toastify";

type ToastParameters = {
	message: string;
	title?: string;
	type?: TypeOptions;
	toastOptions?: Omit<ToastOptions, "type">;
	onClick?: () => void;
};

const getTitleColor = (type: TypeOptions) => {
	let result = "black";
	if (type === "error") result = "red";
	else if (type === "warning") result = "#FFDB58"
	else if (type !== "default") result = "green";

	return result;
};

export default function showToast(toastParameters: ToastParameters) {
	const {
		title,
		message,
		type = "info",
		toastOptions,
		onClick,
	} = toastParameters;

	const unsubscribe = toast.onChange(toast => {
		if (toast.status === "removed") {
			unsubscribe();
			onClick?.();
		}
	});

	return toast(<>
		{title && (
			<h2
				style={{color: getTitleColor(type)}}
				className="text-[18px] font-bold mb-[10px]"
			>
				{title}
			</h2>
		)}
		<p
			className="text-[14px] mb-[10px]"
		>
			{message}
		</p>
	</>, {
		autoClose: 1500,
		pauseOnHover: true,
		closeOnClick: true,
		theme: "light",
		type,
		...toastOptions,
	});
}
