import React from 'react'
import './Footer.css'
import Logo from '../Asset/Logo_LenMotors.png'
import { Col, Row } from 'react-bootstrap'

function Footer() {
    return (
        <div> 
            <Row style={{margin:"auto"}} className='p-5'>
                <Col lg={3} sm={12}>
                    <img className='w-75 ms-3 mt-3' src={Logo} alt="" />
                    <p style={{ color: "white" }} className='ms-5'>Every service is rigorously screened and constantly rated to ensure you get the best service.</p>
                    <div className='ms-5'>
                        <p className=''>Support Center 24/7</p>
                        <h5>+91 7356288805</h5>
                    </div>
                </Col>
                <Col lg={6} >
                    <Row>
                        <Col lg={3} sm={4} xs={12}>
                            <h5 style={{ marginTop: "60px", fontSize: "20px" }} className=''>ABOUT US</h5>
                            <div className='About-list'>
                                <h6>ABOUT US</h6>
                                <h6>OUR TEAM</h6>
                                <h6>OUR WORK</h6>
                                <h6>FAQ</h6>
                            </div>
                        </Col>
                        <Col lg={5} sm={4}>
                            <h5 style={{ marginTop: "60px", fontSize: "20px" }} className=''>POPULAR SERVICES</h5>
                            <div className='About-list'>
                                <h6>TIRE REPAIR</h6>
                                <h6>BRAKE REPAIR</h6>
                                <h6>ENGINE REPAIR</h6>
                                <h6>STEERING REPAIR</h6>
                            </div>
                        </Col>
                        <Col lg={4} sm={4}>
                            <div style={{ marginTop: "145px" }} className='About-list'>
                                <h6>COOLING SYSTEM</h6>
                                <h6>WHEEL ALIGNMENT</h6>
                                <h6>BATTERY STARTING</h6>
                                <h6>SUPSPENSION REPAIR</h6>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col lg={3} sm={12} className='sub-email pe-5'>
                    <h5 style={{ marginTop: "60px", fontSize: "20px" }} className=''>SUBSCRIBE</h5>
                    <div className='Subscibe'>
                        <h6>YOUR EMAIL</h6>
                        <input type="email" placeholder='Enter Your Email Address' /><br />
                        <div className="underline"></div>
                    </div>
                    <button>GET SERVICE</button>
                </Col>
            </Row>
        </div>
    )
}

export default Footer