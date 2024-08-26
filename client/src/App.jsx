import React from "react";
import "./App.css";
import Navbar from "./assets/partials/Navbar";
import Footer from "./assets/partials/Footer";

import { Navigate, Route, Routes } from "react-router-dom";

import { frontendRoutes, adminRoutes } from "./route/routes";

function App() {
  return (
    <>
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
