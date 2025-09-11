import { HomePage } from "@/pages";
import { createBrowserRouter, RouterProvider } from "react-router";
import JobSearchResults from "@/pages/JobSearchResults";
import TalentSearchResults from "@/pages/TalentSearchResults";
import SignUp from "@/pages/sign-up2";
import Login from "@/pages/login";

export default function AppRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/sign-up2",
      element: <SignUp />,
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
