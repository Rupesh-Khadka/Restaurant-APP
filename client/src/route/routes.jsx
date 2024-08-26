import Home from "../pages/Home";
import Menu from "../pages/Menu";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Favourite from "../pages/Favourite";
import Order from "../pages/Order";
import Admin from "../admin/Admin";
import AdminAll from "../admin/AdminAll";
import AdminAdd from "../admin/AdminAdd";
import AdminEdit from "../admin/AdminEdit";
import AdminDelete from "../admin/AdminDelete";
import AdminOrder from "../admin/AdminOrder";
import AdminContact from "../admin/AdminContact";
import AdminLogin from "../admin/AdminLogin";

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
  }
];

export const adminRoutes = [
  {
    lable: "admin",
    path: "/admin",
    element: <Admin />,
  },
  {
    label: "all",
    path: "admin/all",
    element: <AdminAll />,
  },
  {
    label: "add",
    path: "admin/add",
    element: <AdminAdd />,
  },
  {
    label: "edit",
    path: "admin/edit",
    element: <AdminEdit />,  
  },
  {
    label: "delete",
    path: "admin/delete",
    element: <AdminDelete />,
  },
  {
    label: "order",
    path: "admin/order",
    element: <AdminOrder />,
  },
  {
    label: "contact",
    path: "admin/contact",
    element: <AdminContact />,
  },
  {
    label: "adminLogin ",
    path: "admin/login",
    element: <AdminLogin />,
  },  
];
