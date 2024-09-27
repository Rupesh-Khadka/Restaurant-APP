import Admin from "../admin/Admin";
import AdminAll from "../admin/AdminAll";
import AdminAdd from "../admin/AdminAdd";
import AdminEdit from "../admin/AdminEdit";
import AdminContact from "../admin/AdminContact";
import AdminOrder from "../admin/AdminOrder";
import AdminLogin from "../admin/AdminLogin";

export const adminRoutes = [
  {
    lable: "admin",
    path: "/admin",
    element: <Admin />,
  },
  {
    label: "all",
    path: "/admin/all",
    element: <AdminAll />,
  },
  {
    label: "add",
    path: "/admin/add",
    element: <AdminAdd />,
  },
  {
    label: "edit",
    path: "/admin/edit",
    element: <AdminEdit />,
  },

  {
    label: "adminorder",
    path: "/admin/order",
    element: <AdminOrder />,
  },
  {
    label: "admincontact",
    path: "/admin/contact",
    element: <AdminContact />,
  },
  {
    label: "adminLogin ",
    path: "/admin/login",
    element: <AdminLogin />,
  },
];
