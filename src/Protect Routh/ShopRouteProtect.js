import React,{  useContext } from 'react'
import { isShopLoggedContext } from "../Context/Contexts"
import { Navigate, Outlet } from 'react-router-dom';

function ShopRouteProtect() {
    const { isShopLogged } = useContext(isShopLoggedContext);

    return isShopLogged ? <Outlet/> : <Navigate to={'/login'}/>
}

export default ShopRouteProtect