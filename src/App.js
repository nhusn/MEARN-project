import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Service from "./Pages/Service";
import About from "./Pages/About";
import Packages from "./Pages/Packages";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ViewHistory from "./Pages/ViewHistory";
import Profile from "./Pages/Profile";
import ShopHome from "./Pages/ShopHome";
import ShopBill from "./Pages/ShopBill";
import EmailVerify from "./Pages/EmailVerify";
import { isCustomerLoggedInContext, isShopLoggedContext } from "./Context/Contexts";
import { useContext } from "react";
import CustomerRouteProtect from "./Protect Routh/CustomerRouteProtect";
import ShopRouteProtect from "./Protect Routh/ShopRouteProtect";
import LoginProtectRoutee from "./Protect Routh/LoginProtectRoutee";

function App() {
  const { isCustomerLogged, setIsCustomerLogged } = useContext(isCustomerLoggedInContext);
  const { isShopLogged, setIsShopLogged } = useContext(isShopLoggedContext);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />

        <Route element={<CustomerRouteProtect />}>
          <Route path="/view/:id" element={<ViewHistory />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route element={<ShopRouteProtect />}>
          <Route path="/shop" element={<ShopHome />} />
          <Route path="/billing/:email/:_id" element={<ShopBill />} />
        </Route>
        <Route path="/users/:id/verify/:token" element={<EmailVerify />} />

        <Route element={<LoginProtectRoutee/>}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
