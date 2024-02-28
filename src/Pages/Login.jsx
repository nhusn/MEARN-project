import React, { useContext, useState } from "react";
import "./Login.css";
import { Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { loginAPI } from "../Services/allAPI";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { isCustomerLoggedInContext } from "../Context/Contexts";
import { isShopLoggedContext } from "../Context/Contexts";

function Login() {
  const info = (message) => {
    toast.info(`${message}`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const warning = (message) => {
    toast.warn(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const success = (message) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const error = (message) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const navigate = useNavigate();
  const { isShopLogged, setIsShopLogged } = useContext(isShopLoggedContext);
  const { isCustomerLogged, setIsCustomerLogged } = useContext(isCustomerLoggedInContext);
  const [isShopLoggIn, setIsShopLoggIn] = useState(false);
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    const passRegex =
      /^(?=.*[0-9])(?=.*[!@#$%^&*()_+{}|:"<>?`~\[\]\;',./\\])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*()_+{}|:"<>?`~\[\]\;',./\\]{8,}$/;
    if (!userDetails.email == "" || !userDetails.password == "") {
      if (emailRegex.test(userDetails.email) && passRegex.test(userDetails.password)) {
        const result = await loginAPI(userDetails);
        console.log(result);
        if (result.status === 200) {
          sessionStorage.setItem("existingUser", JSON.stringify(result.data.existingUser));
          sessionStorage.setItem("token", result.data.token);
          setIsCustomerLogged(true);
          setUserDetails({
            email: "",
            password: "",
          });
          navigate("/");
        } else {
          warning(result.response.data);
        }
      }else{
        info("Invalid email or password")
      }
    } else {
      info("Please fill the form completely");
    }
  };

  const shopUser = {
    email: "lenmotor@gmail.com",
    password: "123",
  };
  const [shopDetail, setShopDetails] = useState({
    email: "",
    password: "",
  });
  const handleShopLogin = (e) => {
    e.preventDefault();
    const { email, password } = shopDetail;
    if (!email || !password) {
      warning("Please fill the form");
    } else if (email == shopUser.email && password == shopUser.password) {
      sessionStorage.setItem("shopUser", shopDetail.email);
      setShopDetails({
        email: "",
        password: "",
      });
      setIsShopLogged(true);
      navigate("/shop");
    } else {
      info("Username or Password is incorrect");
    }
  };

  return (
    <div style={{ paddingTop: "100px" }} className="login-div">
      {isShopLoggIn ? (
        <Row style={{ margin: "auto" }}>
          <Col lg={4}></Col>
          <Col lg={4} className="">
            <div
              style={{ height: "80vh" }}
              className="d-flex justify-content-center align-items-center flex-column w-100"
            >
              <div className="login-style-div">
                <div className="heading-div">
                  <h4 className="text-center">SHOP LOGIN</h4>
                  <div className="mt-3" style={{ textAlign: "right" }}>
                    <p onClick={() => setIsShopLoggIn(false)} style={{ color: "grey", cursor: "pointer" }}>
                      <i className="fa-solid fa-user"></i> Customer
                    </p>
                  </div>
                </div>
                <div className="form-div">
                  <form onSubmit={(e) => handleShopLogin(e)}>
                    <div className="login-inputs">
                      <input
                        type="text"
                        placeholder="Email ID"
                        value={shopDetail.email}
                        onChange={(e) => setShopDetails({ ...shopDetail, email: e.target.value })}
                        required
                      />
                      <label>
                        <i className="fa-solid fa-envelope"></i>
                      </label>
                      <div className="login-form-underline"></div>
                    </div>
                    <div className="login-inputs mt-5">
                      <input
                        type="password"
                        placeholder="Password"
                        value={shopDetail.password}
                        onChange={(e) => setShopDetails({ ...shopDetail, password: e.target.value })}
                        required
                      />
                      <label>
                        <i className="fa-solid fa-lock"></i>
                      </label>
                      <div className="login-form-underline"></div>
                    </div>

                    <div className="text-center">
                      <button className="mt-3" type="submit">
                        LOGIN
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4}></Col>
        </Row>
      ) : (
        <Row style={{ margin: "auto" }}>
          <Col lg={4}></Col>
          <Col lg={4} className="">
            <div
              style={{ height: "80vh" }}
              className="d-flex justify-content-center align-items-center flex-column w-100"
            >
              <div className="login-style-div">
                <div className="heading-div">
                  <h4 className="text-center">CUSTOMER LOGIN</h4>
                  <div className="mt-3" style={{ textAlign: "right" }}>
                    <p onClick={() => setIsShopLoggIn(true)} style={{ color: "grey", cursor: "pointer" }}>
                      <i className="fa-solid fa-store"></i> Shop
                    </p>
                  </div>
                </div>
                <div className="form-div">
                  <form>
                    <div className="login-inputs">
                      <input
                        type="text"
                        placeholder="Email ID"
                        required
                        value={userDetails.email}
                        onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
                      />
                      <label>
                        <i className="fa-solid fa-envelope"></i>
                      </label>
                      <div className="login-form-underline"></div>
                    </div>
                    <div className="login-inputs mt-5">
                      <input
                        type="password"
                        placeholder="Password"
                        required
                        value={userDetails.password}
                        onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })}
                      />
                      <label>
                        <i className="fa-solid fa-lock"></i>
                      </label>
                      <div className="login-form-underline"></div>
                    </div>
                    <div className="mt-3 d-flex justify-content-between">
                      <Link style={{ textDecoration: "none", color: "grey" }} to={"/forgot-password"}>
                        forgot password ?
                      </Link>
                      <Link style={{ textDecoration: "none", color: "grey" }} to={"/register"}>
                        create new account ?
                      </Link>
                    </div>
                    <div className="text-center">
                      <button className="mt-3" type="submit" onClick={(e) => handleLogin(e)}>
                        LOGIN
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4}></Col>
        </Row>
      )}
      <ToastContainer />
    </div>
  );
}

export default Login;
