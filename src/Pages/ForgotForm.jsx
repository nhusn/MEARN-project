import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { forgotPassCheckAPI } from "../Services/allAPI";

function ForgotForm() {
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

  const [email, setEmail] = useState("");
  const handdleEmail = async (e) => {
    e.preventDefault();
    const regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    if (regex.test(email)) {
      const result = await forgotPassCheckAPI(email);
      if (result.status === 200) {
        success(result.data);
        setEmail("");
      } else {
        info(result.response.data);
      }
    } else {
      info("Incorrect Email, Please Check");
    }
  };

  return (
    <div
      style={{ height: "100vh" }}
      className="login-div w-100 d-flex flex-column justify-content-center align-items-center"
    >
      <Row style={{ margin: "auto", marginTop: "120px" }} className="w-100">
        <Col lg={4}></Col>
        <Col lg={4} className="">
          <div
            style={{ height: "80vh" }}
            className="d-flex justify-content-center align-items-center flex-column w-100"
          >
            <div className="login-style-div">
              <div className="heading-div" style={{ paddingBottom: "30px" }}>
                <h4 className="text-center">FORGOT PASSWORD</h4>
              </div>
              <div className="form-div">
                <form onSubmit={(e) => handdleEmail(e)}>
                  <div className="login-inputs">
                    <input type="text" placeholder="Email ID" required onChange={(e) => setEmail(e.target.value)} />
                    <label>
                      <i className="fa-solid fa-envelope"></i>
                    </label>
                    <div className="login-form-underline"></div>
                  </div>
                  <div className="mt-3" style={{ textAlign: "right" }}>
                    <Link style={{ textDecoration: "none", color: "grey" }} to={"/login"}>
                      back to login
                    </Link>
                  </div>
                  <div className="text-center">
                    <button className="mt-3" type="submit">
                      FIND
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={4}></Col>
      </Row>
      <ToastContainer />
    </div>
  );
}

export default ForgotForm;
