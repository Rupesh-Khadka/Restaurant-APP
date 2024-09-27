import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./assets/partials/Navbar";
import Footer from "./assets/partials/Footer";

import { Navigate, Route, Routes } from "react-router-dom";
import { frontendRoutes } from "./route/routes";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { setToken } from "./store/modules/auth/login/action";
import { adminRoutes } from "./route/routesAdmin";
import { setAdminToken } from "./store/modules/auth/adminLogin/action";
function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("frontendToken");
  const adminToken = localStorage.getItem("admintoken");

  useEffect(() => {
    if (token) {
      localStorage.setItem("frontendToken", token);
      dispatch(setToken(token));
    }
    else if (adminToken){
      localStorage.setItem("adminToken", adminToken);
      dispatch(setAdminToken(adminToken));
    }
  }, [token, adminToken, dispatch]);
  
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Navigate to='/home' />} />

        {frontendRoutes.map((v, key) => (
          <Route
            path={v.path}
            element={
              <>
                <Navbar />
                {v.element}
                <Footer />
              </>
            }
            key={key}
          />
        ))}
        {adminRoutes.map((v, index) => (
          <Route path={v.path} element={v.element} key={index} />
        ))}
      </Routes>
    </>
  );
}

export default App;
