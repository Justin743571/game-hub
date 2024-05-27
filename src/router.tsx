import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import GameDetail from "./pages/GameDetail";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement:<ErrorPage/>,
    children: [
      { path: "", element: <HomePage /> },
      { path: "games/:id", element: <GameDetail /> },
    ],
  },
]);

export default router;
