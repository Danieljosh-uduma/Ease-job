import { HomePage } from "@/pages";
import SignUp1 from "@/components/auth/signup1";
import { createBrowserRouter, RouterProvider } from "react-router";

export default function AppRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/signup1",
      element: <SignUp1 />,
    },
    {
      path: "/login",
      element: <div>Login Page</div>,
    },
  ]);
  return <RouterProvider router={router} />;
}
