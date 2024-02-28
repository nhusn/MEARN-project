import React, { useEffect, useState } from "react";
import "./forgetPassword.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { forgotEmailVerifyAPI, updatePasswordAPI } from "../Services/allAPI";
import { useNavigate, useParams } from "react-router-dom";

function ForgotPassword() {
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

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const params = useParams();
  const [validUrl, setValidUrl] = useState(false);

  var token = "";
  const tokenVerify = async () => {
    const result = await forgotEmailVerifyAPI(params.id, params.token);
    if (result.data) {
      setValidUrl(true);
      token = result.data.token;
    } else {
      setValidUrl(false);
    }
  };
  useEffect(() => {
    tokenVerify();
  }, []);

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    const regex =
      /^(?=.*[0-9])(?=.*[!@#$%^&*()_+{}|:"<>?`~\[\]\;',./\\])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*()_+{}|:"<>?`~\[\]\;',./\\]{8,}$/;

    if (newPassword.length >= 8) {
      if (regex.test(newPassword)) {
        if (newPassword === confirmPassword) {
          const result = await updatePasswordAPI(token, newPassword);
          if (result.status === 200) {
            success("Password Updated");
            navigate("/");
          } else {
            info(result.response.data);
          }
        } else {
          info("Password doesn't match");
        }
      } else {
        info("Password must contain atleast one english alphabet one digit and a special character");
      }
    } else {
      info("minimum 8 character required");
    }
  };

  return (
    <>
      {validUrl ? (
        <form onSubmit={(e) => handlePasswordChange(e)} style={{ paddingTop: "100px" }} className="pass-div">
          <div className="bg-inf w-50">
            <h6>New Password</h6>
            <input
              className="new-pass"
              type="text"
              placeholder="Create new password"
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <div className="new-pass-underline"></div>
          </div>
          <div className="bg-warnig w-50 mt-5">
            <h6>Confirm Password</h6>
            <input
              className="new-pass"
              type="password"
              placeholder="Confirm new password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <div style={{ height: "2.1px" }} className="new-pass-underline"></div>
          </div>
          <button className="pass-btn">Change</button>
          <ToastContainer />
        </form>
      ) : (
        <h1 style={{ marginTop: "100px" }} className="text-center">
          Invalid Url
        </h1>
      )}
    </>
  );
}

export default ForgotPassword;
