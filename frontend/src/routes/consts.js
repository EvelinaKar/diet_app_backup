import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import BasicLayout from "../layouts/BasicLayout";
import AuthLayout from "../layouts/AuthLayout";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";

export const ROUTES = {
  LOGIN: "/login",
  REGISTER: "/register",
  HOME: "/home",
  PRODUCTS: "/products",
};

export const routes = [
  {
    path: ROUTES.LOGIN,
    Component: Login,
    Layout: AuthLayout,
  },
  {
    path: ROUTES.REGISTER,
    Component: Register,
    Layout: AuthLayout,
  },
  {
    path: ROUTES.HOME,
    Component: Home,
    Layout: BasicLayout,
  },
  {
    path: ROUTES.PRODUCTS,
    Component: Products,
    Layout: BasicLayout,
  },
];

export const navigationBarLinks = [
  {
    title: "Home",
    path: ROUTES.HOME,
  },
];
