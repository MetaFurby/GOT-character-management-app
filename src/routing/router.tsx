import { createBrowserRouter, redirect } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary"
import Layout from "./Layout";
import routes from "./routes";
import { PublicRoutes } from "../constants";

export default function createRouter() {
	return createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			errorElement: <ErrorBoundary />,
			children: [
				{
					index: true,
					loader: () => redirect(PublicRoutes.HOME),
				},
				...routes,
			],
		},
	]);
}
