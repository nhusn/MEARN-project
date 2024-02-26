import React, { useContext, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Logo from "../Asset/Logo_LenMotors.png";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { isCustomerLoggedInContext } from "../Context/Contexts";
import { isShopLoggedContext } from "../Context/Contexts";

function Header() {
  const { isCustomerLogged, setIsCustomerLogged } = useContext(isCustomerLoggedInContext);
  const { isShopLogged, setIsShopLogged } = useContext(isShopLoggedContext);
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    navigate("/login");
    sessionStorage.clear();
    setIsCustomerLogged(false);
    setIsShopLogged(false);
  };
  const [barClicked, setBarClicked] = useState(false);
  const headerNavStyle = {
    position: "absolute",
    left: barClicked ? "0" : "-1000px",
    backgroundColor: "black",
    width: "100%",
    transition: "all .5s ease-in-out",
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div className="head">
      <Row className="header-respo">
        <Col xl={4} lg={3} md={3} sm={3} xs={5} className="">
          <Link to={"/"}>
            {" "}
            <img src={Logo} alt="LENMOTOR" className="nav-logo" />
          </Link>
        </Col>

        <Col xl={4} lg={6} md={6} sm={5} xs={2} className="">
          {isShopLogged ? (
            <div style={{ gap: "20px" }} className="d-flex justify-content-center mt-5">
              {/* <Link style={{ textDecoration: "none" }} to={'/shop'}><p className='navi'>HOME</p></Link>
                <Link style={{ textDecoration: "none" }} to={'/billing'}><p className='navi'>BILL</p></Link> */}
            </div>
          ) : (
            <div className="header-nav">
              <Link style={{ textDecoration: "none" }} to={"/"}>
                <p className="navi">HOME</p>
              </Link>
              <Link style={{ textDecoration: "none" }} to={"/service"}>
                <p className="navi">SERVICES</p>
              </Link>
              <Link style={{ textDecoration: "none" }} to={"/packages"}>
                <p className="navi">PACKAGES</p>
              </Link>
              <Link style={{ textDecoration: "none" }} to={"/about"}>
                <p className="navi">ABOUT</p>
              </Link>
              <Link style={{ textDecoration: "none" }} to={"/contact"}>
                <p className="navi">CONTACT</p>
              </Link>
              {isCustomerLogged && (
                <Link style={{ textDecoration: "none" }} to={"/profile"}>
                  <p className="navi">PROFILE</p>
                </Link>
              )}
            </div>
          )}
        </Col>
        <Col xl={4} lg={3} md={2} sm={1} xs={2} className="">
          {isCustomerLogged || isShopLogged ? (
            <div className="login-butt">
              <Link onClick={(e) => handleLogout(e)}>
                <button>LOGOUT</button>
              </Link>
            </div>
          ) : (
            <div className="login-butt">
              <Link to={"/login"}>
                <button>LOGIN</button>
              </Link>
            </div>
          )}
        </Col>
      </Row>
      <div className="mob-div">
        <div className="mob-logo">
          <img src={Logo} alt="LENMOTOR" />
        </div>
        <div className="mob-bar">
          <i
            style={{ cursor: "pointer" }}
            onClick={() => setBarClicked(!barClicked)}
            className="fa-solid fa-bars fa-xl"
          ></i>
        </div>
      </div>

      {/* <div>
        <div style={headerNavStyle}>
          <Link style={{ textDecoration: "none" }} to={"/"}>
            <p className="mob-navi">HOME</p>
          </Link>
          <Link style={{ textDecoration: "none" }} to={"/service"}>
            <p className="mob-navi">SERVICES</p>
          </Link>
          <Link style={{ textDecoration: "none" }} to={"/packages"}>
            <p className="mob-navi">PACKAGES</p>
          </Link>
          <Link style={{ textDecoration: "none" }} to={"/about"}>
            <p className="mob-navi">ABOUT</p>
          </Link>
          <Link style={{ textDecoration: "none" }} to={"/contact"}>
            <p className="mob-navi">CONTACT</p>
          </Link>
          {isCustomerLogged && (
            <Link style={{ textDecoration: "none" }} to={"/profile"}>
              <p className="mob-navi">PROFILE</p>
            </Link>
          )}
        </div>
      </div> */}
    </div>
  );
}

export default Header;
