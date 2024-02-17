import * as React from "react";
import mergeClassNames from "../../utilites/mergeClassNames";

export interface InputProps
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "color"> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, ...props }, ref) => {
		return (
			<input
				type={type}
				className={mergeClassNames(
					"text-black border-ashes bg-white w-full h-full border-[1px] rounded-[5px] p-[5px]",
					"placeholder:text-muted-foreground",
					"focus-visible:outline-none",
					"disabled:cursor-not-allowed disabled:bg-gray-500",
					className,
				)}
				ref={ref}
				{...props}
			/>
		);
	},
);

Input.displayName = "Input";

export default Input;
