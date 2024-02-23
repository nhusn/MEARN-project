import React, { useEffect, useState } from "react";
import "./Profile.css";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { updateUserAPI } from "../Services/allAPI";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Profile() {
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
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    setUserInfo(JSON.parse(sessionStorage.getItem("existingUser")));
  }, []);

  const handleUpdateUser = async (e) => {
    e.preventDefault()
    const result = await updateUserAPI(userInfo)
    if(result.status === 200){
        success("User updated")
        setUserInfo(result.data)
        sessionStorage.removeItem("existingUser")
        sessionStorage.setItem("existingUser",JSON.stringify(result.data))
    }else{
        console.log(result);
    }
  }
  return (
    <div style={{ paddingTop: "100px" }} className="profile-div">
      <Row style={{ margin: "auto" }}>
        <Col lg={4}></Col>
        <Col lg={4} className="">
          <div
            style={{ height: "80vh" }}
            className="d-flex justify-content-center align-items-center flex-column w-100"
          >
            <div className="profile-style-div">
              <div className="pro-heading-div">
                <h4>CUSTOMER PROFILE</h4>
              </div>
              <div className="form-div">
                { userInfo &&
                <form>
                  <div className="profile-inputs">
                    <input
                      type="text"
                      placeholder="Name"
                      value={userInfo.name}
                      onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                      required
                    />
                    <label>
                      <i className="fa-solid fa-user"></i>
                    </label>
                    <div className="profile-form-underline"></div>
                  </div>
                  <div className="profile-inputs mt-3">
                    <input
                      type="number"
                      placeholder="Mobile No"
                      value={userInfo.mobno}
                      onChange={(e) => setUserInfo({ ...userInfo, mobno: e.target.value })}
                      required
                    />
                    <label>
                      <i className="fa-solid fa-mobile"></i>
                    </label>
                    <div className="profile-form-underline"></div>
                  </div>
                  <div className="profile-inputs mt-3">
                    <input
                      type="text"
                      placeholder="Email ID"
                      value={userInfo.email}
                      onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                      required
                    />
                    <label>
                      <i className="fa-solid fa-envelope"></i>
                    </label>
                    <div className="profile-form-underline"></div>
                  </div>
                  <div className="profile-inputs mt-3">
                    <input
                      type="text"
                      placeholder="Password"
                      value={userInfo.password}
                      onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
                      required
                    />
                    <label>
                      <i className="fa-solid fa-lock"></i>
                    </label>
                    <div className="profile-form-underline"></div>
                  </div>
                  {/* <div className='mt-3' style={{ textAlign: "right" }}><Link style={{ textDecoration: "none", color: 'grey' }} to={'/login'}>back to login</Link></div> */}
                  <div className="text-center">
                    <button className="mt-3" type="submit" onClick={(e)=>handleUpdateUser(e)}>
                      UPDATE
                    </button>
                  </div>
                </form>}
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

export default Profile;
