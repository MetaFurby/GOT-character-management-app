import React from "react";
import mergeClassNames from "../../utilites/mergeClassNames";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className,
			onClick: onClickProp,
			disabled: disabledProp,
			type = "button",
			...props
		},
		ref,
	) => {
	
		const onClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
			if (onClickProp) onClickProp(event);
		};

		return (
			<button
				ref={ref}
				type={type}
				onClick={onClick}
				disabled={disabledProp}
				className={mergeClassNames(
					className,
					"text-black bg-primary border-ashes border-[1px] rounded-[5px] p-[5px]",
					"disabled:cursor-not-allowed disabled:border-gray-500 disabled:bg-gray-500",
				)}
				{...props}
			>
			</button>
		);
	},
);

Button.displayName = "Button";

export default Button;
