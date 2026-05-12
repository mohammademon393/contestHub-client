import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import AllContests from "../pages/allContests/AllContests";
import Leaderboard from "../pages/leaderboard/Leaderboard";


const router = createBrowserRouter([
  // main layout
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/contests",
        Component: AllContests,
      },
      {
        path: "/leaderboard",
        Component: Leaderboard,
      },
      {
        path: "/about",
        Component: AllContests,
      },
      {
        path: "/contact",
        Component: AllContests,
      },
    ],
  },

  // others layouts here
]);

export default router;
