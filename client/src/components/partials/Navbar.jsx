import React, { useEffect } from "react";
import { HeaderMegaMenu } from "./Navbar/HeaderMegaMenu";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../store/modules/auth/login/action";

const Navbar = () => {
  const token = useSelector((state) => state.authReducer.token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) {
      localStorage.removeItem("frontendToken");
      dispatch(setToken(undefined));
    }
  }, [token, dispatch]);

  return <HeaderMegaMenu />;
};

export default Navbar;
