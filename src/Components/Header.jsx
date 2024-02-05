import React, { useContext, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Logo from '../Asset/Logo_LenMotors.png'
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';
import { isCustomerLoggedInContext } from '../Context/Contexts';
import {  isShopLoggedContext  } from '../Context/Contexts'

function Header() {

    const {isCustomerLogged,setIsCustomerLogged} = useContext(isCustomerLoggedInContext)
    const {isShopLogged,setIsShopLogged} = useContext(isShopLoggedContext)
    const navigate = useNavigate()

    const handleLogout = (e)=>{
        e.preventDefault()
        navigate('/login')
        sessionStorage.clear()
        setIsCustomerLogged(false)
        setIsShopLogged(false)
    }

    return (
        <div className='head'>
            <Row>
                <Col lg={4} md={6} sm={12}>
                    <img src={Logo} alt="LENMOTOR" className='img-fluid w-50 ms-2' />
                </Col>

                <Col lg={4} md={6} sm={12}>
                    {isShopLogged ?
                        <div style={{gap:"20px"}} className='d-flex justify-content-center mt-5'>
                            {/* <Link style={{ textDecoration: "none" }} to={'/shop'}><p className='navi'>HOME</p></Link>
                            <Link style={{ textDecoration: "none" }} to={'/billing'}><p className='navi'>BILL</p></Link> */}
                        </div>

                        :
                        <div className='d-flex justify-content-around mt-5'>
                            <Link style={{ textDecoration: "none" }} to={'/'}><p className='navi'>HOME</p></Link>
                            <Link style={{ textDecoration: "none" }} to={'/service'}><p className='navi'>SERVICES</p></Link>
                            <Link style={{ textDecoration: "none" }} to={'/packages'}><p className='navi'>PACKAGES</p></Link>
                            <Link style={{ textDecoration: "none" }} to={'/about'}><p className='navi'>ABOUT</p></Link>
                            <Link style={{ textDecoration: "none" }} to={'/contact'}><p className='navi'>CONTACT</p></Link>
                            <Link style={{ textDecoration: "none" }} to={'/profile'}><p className='navi'>PROFILE</p></Link>
                        </div>}
                </Col>
                <Col lg={4} md={6} sm={12}>
                   {
                    isCustomerLogged || isShopLogged?   
                    <div className='login-butt'>
                        <Link onClick={(e)=>handleLogout(e)}><button>LOGOUT</button></Link>
                    </div>
                    :
                    <div className='login-butt'>
                        <Link to={'/login'}><button>LOGIN</button></Link>
                    </div>}
                </Col>
            </Row>
        </div>
    )
}

export default Header