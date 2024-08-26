import React, { useEffect } from "react";
import { HeaderMegaMenu } from "./Navbar/HeaderMegaMenu";
import { useSelector } from "react-redux";
import { setToken } from "../../store/modules/auth/login/action";

const Navbar = () => {
  const token = useSelector((state) => state.authReducer.token);

  useEffect(() => {
    // @TODO: Decode JWT token & check token expiry to actually logout
    if (!token) {
      localStorage.removeItem("frontendToken");
      setToken(undefined);
    }
  }, [token]);

  return <HeaderMegaMenu />;
};

export default Navbar;
