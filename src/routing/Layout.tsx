import { useEffect } from "react";
import Navigation from "../services/navigation";
import { Outlet, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/molecules/Header";

function Layout() {
	const navigate = useNavigate();
	/**
	 * Initialize navigationService to be able
	 * to use `react-router-dom` navigate function imperatively
	 * outside of react components.
	 */
	useEffect(() => {
		Navigation.init(navigate);
	}, []);
	return (
		<>
			<Header />
			<Outlet />
			<ToastContainer />
		</>
	);
}

export default Layout;
