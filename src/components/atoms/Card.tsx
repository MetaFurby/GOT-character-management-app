import * as React from "react";
import mergeClassNames from "../../utilites/mergeClassNames";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className, ...props }, ref) => {
	return (
		<div
			ref={ref}
			className={mergeClassNames(
				"rounded border border-ashes bg-white p-[16px]",
				"aria-disabled:cursor-not-allowed aria-disabled:border-gray-500 aria-disabled:bg-gray-500",
				className,
			)}
			{...props}
		/>
	);
});

Card.displayName = "Card";

export default Card;
