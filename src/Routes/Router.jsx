import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import SignIn from "../Components/SignIn";
import SignUp from "../Components/SignUp";
import error404 from "../assets/error-404.png";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/*",
        element: (
          <div className="flex justify-center items-center min-h-screen">
            <img className="w-[400px]" src={error404} alt="404 Not Found" />
          </div>
        ),
      },
    ],
  },
]);

export default router;
