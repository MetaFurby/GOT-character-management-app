import React from "react";
import mergeClassNames from "../../utilites/mergeClassNames";

export interface LabelProps
	extends React.LabelHTMLAttributes<HTMLLabelElement>{}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
	({ className, htmlFor, ...props }, ref) => {
		return (
			<label
				ref={ref}
				htmlFor={htmlFor ?? props.id}
				className={mergeClassNames(className, 'text-[14px] font-medium text-black')}
				{...props}
			/>
		);
	},
);

Label.displayName = "Label";

export default Label;
