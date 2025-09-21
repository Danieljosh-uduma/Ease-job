import { HomePage } from "@/pages";
import { createBrowserRouter, RouterProvider } from "react-router";
import JobSearchResults from "@/pages/JobSearchResults";
import TalentSearchResults from "@/pages/TalentSearchResults";
import { SignupPage } from "@/pages/signup-page";
import SignUp1 from "@/components/auth/signup1";
import SignUp2 from "@/components/auth/sign-up2";

export default function AppRouter() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <HomePage />,
		},
		{
			path: "/signup",
			element: <SignupPage />,
			children: [
				{
					index: true,
					element: <SignUp1 />,
				},
				{
					path: "details",
					element: <SignUp2 />,
				},
			],
		},
		{
			path: "/login",
			element: <div>Login Page</div>,
		},
		//added to see page on UI for dev
		{
			path: "/job-search-results",
			element: <JobSearchResults />,
		},
		{
			path: "/talent-search-results",
			element: <TalentSearchResults />,
		},
	]);
	return <RouterProvider router={router} />;
}
