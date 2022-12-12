import { useRoutes } from "react-router-dom";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import AllProducts from "./components/AllProducts";

const AppRoutes = () => {
  const elements = useRoutes([
    { path: "/", element: <AllProducts /> },
    { path: "/cart", element: <Cart /> },
    { path: "/checkout", element: <Checkout /> },
  ]);
  return elements;
};
export default AppRoutes;
