import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login";



const routes = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },


]);

export default function Router() {
  return <RouterProvider router={routes} />;
}
