import React from "react";
import { isShopLoggedContext, isCustomerLoggedInContext } from "../Context/Contexts";
import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";

function LoginProtectRoutee() {
  const { isCustomerLogged } = useContext(isCustomerLoggedInContext);
  const { isShopLogged } = useContext(isShopLoggedContext);

  return isShopLogged || isCustomerLogged ? <Navigate to={isShopLogged ? "/shop" : "/"} /> : <Outlet />;
}

export default LoginProtectRoutee;
