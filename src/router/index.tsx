import { HomePage } from "@/pages";
import { createBrowserRouter, RouterProvider } from "react-router";
import JobSearchResults from "@/pages/JobSearchResults";
import TalentSearchResults from "@/pages/TalentSearchResults";
import Dashboard from "@/pages/Jobseeker-dashboard/Dashboard-Jobseeker";

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
    {
      path: "/Dashboard-Jobseeker",
      element: <Dashboard />,
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
