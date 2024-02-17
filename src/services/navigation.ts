import { NavigateFunction, NavigateProps } from "react-router-dom";

let navigateRef: NavigateFunction | null = null;

let STACKED_NAVIGATION_ROUTE: string | null = null;

const init = (navigate: NavigateFunction) => {
	navigateRef = navigate;
};

const navigate = (to: string, props?: NavigateProps) => {
	if (navigateRef) navigateRef(to, props);
};

const stackNavigationToRoute = (url: string): void => {
	STACKED_NAVIGATION_ROUTE = url;
};

const clearStackedNavigation = (): void => {
	STACKED_NAVIGATION_ROUTE = null;
};

const getStackedNavigation = () => {
	return STACKED_NAVIGATION_ROUTE;
};

export default {
	init,
	navigate,
	stackNavigationToRoute,
	clearStackedNavigation,
	getStackedNavigation,
};
