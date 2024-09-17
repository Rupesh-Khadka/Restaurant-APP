import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./assets/partials/Navbar";
import Footer from "./assets/partials/Footer";

import { Navigate, Route, Routes } from "react-router-dom";

import { frontendRoutes, adminRoutes } from "./route/routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "./store/modules/auth/login/action";

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("frontendToken");
  useEffect(() => {
    if (token) {
      localStorage.setItem("frontendToken", token);
      dispatch(setToken(token));
    }
  }, [token, dispatch]);
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
        {adminRoutes.map((v, key) => (
          <Route path={v.path} element={<>{v.element}</>} key={key} />
        ))}
      </Routes>
    </>
  );
}

export default App;
