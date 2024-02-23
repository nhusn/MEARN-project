import React, { useContext } from "react";
import { isCustomerLoggedInContext } from "../Context/Contexts";
import { Navigate, Outlet } from "react-router-dom";

function CustomerRouteProtect() {
  const { isCustomerLogged } = useContext(isCustomerLoggedInContext);

  return isCustomerLogged ? <Outlet /> : <Navigate to={"/login"} />;

}

export default CustomerRouteProtect;
