import React from 'react'
import './Register.css'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Register() {
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
                                        <input type="text" placeholder='Name' required/>
                                        <label><i class="fa-solid fa-user"></i></label>
                                        <div className='register-form-underline'></div>
                                    </div>
                                    <div className='register-inputs mt-3'>
                                        <input type="text" placeholder='Mobile No' required/>
                                        <label><i class="fa-solid fa-mobile"></i></label>
                                        <div className='register-form-underline'></div>
                                    </div>
                                    <div className='register-inputs mt-3'>
                                        <input type="text" placeholder='Email ID' required/>
                                        <label ><i class="fa-solid fa-envelope"></i></label>
                                        <div className='register-form-underline'></div>
                                    </div>
                                    <div className='register-inputs mt-3'>
                                        <input type="password" placeholder='Password' required/>
                                        <label ><i class="fa-solid fa-lock"></i></label>
                                        <div className='register-form-underline'></div>
                                    </div>
                                    <div className='mt-3' style={{ textAlign: "right" }}><Link style={{ textDecoration: "none", color: 'grey' }} to={'/login'}>back to login</Link></div>
                                    <div className='text-center'><button className='mt-3' type='submit'>REGISTER</button></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={4}></Col>
            </Row>
        </div>
    )
}

export default Register