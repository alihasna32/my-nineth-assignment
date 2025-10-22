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
      
    ],
  },
]);

export default router;
