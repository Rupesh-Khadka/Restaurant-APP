import Home from "../pages/Home";
import Menu from "../pages/Menu";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Favourite from "../pages/Favourite";
import Order from "../pages/Order";

export const frontendRoutes = [
  {
    lable: "home",
    path: "/home",
    element: <Home />,
  },
  {
    lable: "menu",
    path: "/menu",
    element: <Menu />,
  },
  {
    lable: "aboutus",
    path: "/aboutus",
    element: <AboutUs />,
  },
  {
    lable: "contactus",
    path: "/contactus",
    element: <ContactUs />,
  },
  {
    lable: "favourite",
    path: "/favourite",
    element: <Favourite />,
  },
  {
    lable: "order",
    path: "/order",
    element: <Order />,
  },
  {
    lable: "signup",
    path: "/signup",
    element: <SignUp />,
  },
  {
    lable: "login",
    path: "/login",
    element: <Login />,
  },
];
