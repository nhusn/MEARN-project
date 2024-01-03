import React from 'react'
import './Login.css'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div style={{ paddingTop: "100px" }} className='login-div'>
            <Row style={{ margin: "auto" }}>
                <Col lg={4}></Col>
                <Col lg={4} className=''>
                    <div style={{ height: "80vh" }} className='d-flex justify-content-center align-items-center flex-column w-100'>
                        <div className='login-style-div'>
                            <div className='heading-div'><h4>CUSTOMER LOGIN</h4></div>
                            <div className='form-div'>
                                <form>
                                    <div className='login-inputs'>
                                        <input type="text" placeholder='Email ID' required/>
                                        <label ><i class="fa-solid fa-envelope"></i></label>
                                        <div className='login-form-underline'></div>
                                    </div>
                                    <div className='login-inputs mt-5'>
                                        <input type="password" placeholder='Password' required/>
                                        <label ><i class="fa-solid fa-lock"></i></label>
                                        <div className='login-form-underline'></div>
                                    </div>
                                    <div className='mt-3' style={{ textAlign: "right" }}><Link style={{ textDecoration: "none", color: 'grey' }} to={'/register'}>create new account ?</Link></div>
                                    <div className='text-center'><button className='mt-3' type='submit'>LOGIN</button></div>
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

export default Login