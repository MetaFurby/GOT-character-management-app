import { type ClassValue, clsx } from "clsx";

export default function mergeClassNames(...inputs: ClassValue[]) {
	return clsx(inputs);
}
