import { HomePage } from "@/pages";
import { createBrowserRouter, RouterProvider } from "react-router";
import JobSearchResults from "@/pages/JobSearchResults";

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
    //added to see page on UI for dev
    {
      path: "/job-search-results",
      element: <JobSearchResults />,
    },
  ]);
  return <RouterProvider router={router} />;
}
