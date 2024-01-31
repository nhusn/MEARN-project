import React, { useState } from 'react'
import './Register.css'
import { Col, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { registerAPI } from '../Services/allAPI'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
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
        })
    }
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
    }
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
    }
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
    }
    const navigate = useNavigate()
    const [newUser, setNewUser] = useState({
        name: "",
        mobno: 0,
        email: "",
        password: ""
    })

    const handleRegister = async (e) => {
        e.preventDefault()
        const { name, mobno, email, password } = newUser
        if (name, !mobno == 0, email, password) {
            const result = await registerAPI(newUser)
            console.log(result);
            if (result.status === 200) {
                console.log(result);
                info(result.data)
                setNewUser({
                    name: "",
                    mobno: 0,
                    email: "",
                    password: ""
                })

            } else {
                warning(result.response.data);
            }
        }else{
            warning("Please fill the form")
        }
    }

    return (
        <div style={{ paddingTop: "100px" }} className='register-div'>
            <Row style={{ margin: "auto" }}>
                <Col lg={4}></Col>
                <Col lg={4} className=''>
                    <div style={{ height: "80vh" }} className='d-flex justify-content-center align-items-center flex-column w-100'>
                        <div className='register-style-div'>
                            <div className='reg-heading-div'><h4>CUSTOMER REGISTER</h4></div>
                            <div className='form-div'>
                                <form>
                                    <div className='register-inputs'>
                                        <input type="text" placeholder='Name' value={newUser.name} onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} required />
                                        <label><i className="fa-solid fa-user"></i></label>
                                        <div className='register-form-underline'></div>
                                    </div>
                                    <div className='register-inputs mt-3'>
                                        <input type="number" placeholder='Mobile No' value={newUser.mobno == 0 ? "" : newUser.mobno} onChange={(e) => setNewUser({ ...newUser, mobno: e.target.value })} required />
                                        <label><i className="fa-solid fa-mobile"></i></label>
                                        <div className='register-form-underline'></div>
                                    </div>
                                    <div className='register-inputs mt-3'>
                                        <input type="text" placeholder='Email ID' value={newUser.email} onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} required />
                                        <label ><i className="fa-solid fa-envelope"></i></label>
                                        <div className='register-form-underline'></div>
                                    </div>
                                    <div className='register-inputs mt-3'>
                                        <input type="password" placeholder='Password' value={newUser.password} onChange={(e) => setNewUser({ ...newUser, password: e.target.value })} required />
                                        <label ><i className="fa-solid fa-lock"></i></label>
                                        <div className='register-form-underline'></div>
                                    </div>
                                    <div className='mt-3' style={{ textAlign: "right" }}><Link style={{ textDecoration: "none", color: 'grey' }} to={'/login'}>back to login</Link></div>
                                    <div className='text-center'><button className='mt-3' type='submit' onClick={(e) => handleRegister(e)}>REGISTER</button></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={4}></Col>
            </Row>
            <ToastContainer />
        </div>
    )
}

export default Register