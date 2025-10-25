import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import SignIn from "../Components/SignIn";
import SignUp from "../Components/SignUp";
import error404 from "../assets/error-404.png";
import Loading from "../Components/Loading";
import HomePage from "../Pages/HomePage";
import AllGames from "../Pages/AllGames";
import GamesDetails from "../Components/GamesDetails";
import PrivateRoutes from "../Contexts/PrivateRoutes";
import AboutgameHub from "../Pages/AboutGamehub";
import ForgotPassword from "../Components/ForgotPassword";

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
        path: "/",
        element: <HomePage />,
        loader: () => fetch("/Games.json"),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/allgames",
        element: <AllGames></AllGames>,
        loader: () => fetch("/Games.json"),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/allgames/:id",
        element: <AllGames></AllGames>,
        loader: () => fetch("/Games.json"),
      },
      {
          path: "/gamesdetails/:id",
          element: <PrivateRoutes>
            <GamesDetails></GamesDetails>
          </PrivateRoutes>,
          loader: () => fetch("/Games.json"),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/aboutgameHub",
        element: <AboutgameHub></AboutgameHub>
      },
      {
        path: "/forgotPassword",
        element: <ForgotPassword></ForgotPassword>
      },
      {
        path: "/*",
        element: (
          <div className="flex flex-col justify-center items-center min-h-screen gap-5">
            <img className="w-[400px]" src={error404} alt="404 Not Found" />
            <h1 className="text-6xl font-black">Page not found</h1>
          </div>
        ),
      },
    ],
  },
]);

export default router;
