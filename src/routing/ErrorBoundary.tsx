import { useRouteError } from "react-router-dom";
import Header from "../components/molecules/Header";

export default function NotFound() {
	const error = useRouteError();
	const message = (error as { statusText?: string })?.statusText || (error as Error)?.message;

	return (
		<>
			<Header />
			<div className="flex h-screen items-center justify-center text-white">
				<div>
					<h1 className="text-center">Oops!</h1>
					<p>Sorry, an unexpected error has occurred.</p>
					<p className="mt-2">
						<i>"{message}"</i>
					</p>
				</div>
			</div>
		</>
	);
}
