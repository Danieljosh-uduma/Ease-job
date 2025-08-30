import { HomePage } from "@/pages";
import { createBrowserRouter, RouterProvider } from "react-router";

export default function AppRouter() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <HomePage />,
		},
		{
			path: "/login",
			element: <div>Login Page</div>,
		},
	]);
	return <RouterProvider router={router} />;
}
