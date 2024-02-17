import type { RouteObject } from "react-router-dom";
import { PublicRoutes } from "../constants";

/**
 * @description Public Routes
 */
export default [
	{
		path: PublicRoutes.HOME,
		lazy: () => import("../pages/Home"),
	},
	{
		path: PublicRoutes.CHARACTER_DETAILS,
		lazy: () => import("../pages/CharacterDetails"),
	},
] as RouteObject[];
