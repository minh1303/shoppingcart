import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Product from "./Components/pages/Products/Product";
import { useState } from "react";
const Router = () => {
  const [cartCounter, setCartCounter] = useState(0);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <App cartCounter={cartCounter} setCartCounter={setCartCounter} />
      ),
    },
    {
      path: "/products",
      element: (
        <Product cartCounter={cartCounter} setCartCounter={setCartCounter} />
      ),
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
