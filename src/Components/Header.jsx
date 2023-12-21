import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Logo from '../Asset/Logo_LenMotors.png'
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='head'>
        <Row>
            <Col lg={4} md={6} sm={12}>
                <img src={Logo} alt="LENMOTOR" className='img-fluid w-50 ms-2'/>
            </Col>
               
            <Col lg={4} md={6} sm={12}>
                <div className='d-flex justify-content-around mt-5'>
                    <Link style={{textDecoration:"none"}} to={'/'}><p className='navi'>HOME</p></Link>
                    <Link style={{textDecoration:"none"}} to={'/service'}><p className='navi'>SERVICES</p></Link>
                    <Link style={{textDecoration:"none"}} to={'/packages'}><p className='navi'>PACKAGES</p></Link>
                    <Link style={{textDecoration:"none"}} to={'/about'}><p className='navi'>ABOUT</p></Link>
                    <Link style={{textDecoration:"none"}} to={'/contact'}><p className='navi'>CONTACT</p></Link>
                </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
                <div className='login-butt'>
                <Link to={'/login'}><button>LOGIN</button></Link>
                </div>
            </Col>
        </Row>
    </div>
  )
}

export default Header