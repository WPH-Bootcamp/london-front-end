import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import AddProduct from "../pages/AddProduct";
import DetailById from "../pages/DetailById";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/add",
    element: <AddProduct />,
  },

  {
    path: "/detail/:id",
    element: <DetailById />,
  },
]);

export default router;
