import React from 'react'
import './Contact.css'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import Footer from '../Components/Footer'

function Contact() {
    return (
        <div style={{ paddingTop: "100px" }} className='contact-page'>
            <div className='service-banner'>
                <div className='d-flex'>
                    <Link style={{ textDecoration: "none", color: "white" }} to={'/'}>HOME</Link>
                    <h6 style={{ color: "#d16527" }} className='ms-3 nav-serv'>CONTACT</h6>
                </div>
                <h1>CONTACT</h1>
            </div>
            <div style={{padding:"50px"}}>
                <Row style={{ margin: "auto" }} className='px-5'>
                    <Col lg={4}>
                        <div className='contact-info-card'>
                            <div>
                                <h5>ADDRESS</h5>
                                <p>12th block civil line road kakkanad,Ernakulam 682042 Kerala India</p>
                                <p>Kadarali Stadium  perinthalmanna,Malappuram 679321 Kerala India</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className='contact-info-cards'>
                            <div>
                                <h5>CUSTOMER SUPPORT</h5>
                                <p>+9187654321</p>
                                <p>+9112345678</p>
                                <p>lenmotors@gmail.com</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className='contact-info-cardss'>
                            <div style={{ width: '80%' }}>
                                <h5 className='mb-4'>OPEN HOURS</h5>
                                <div className=''>
                                    <div className='d-flex justify-content-between'>
                                        <p>Monday - Thuesday</p>
                                        <p>8 am - 8 pm</p>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <p>Friday</p>
                                        <p>8 am - 6 pm</p>
                                    </div>          </div>
                                <div className='d-flex justify-content-between'>
                                    <p>Saturday</p>
                                    <p>9 am - 4 pm</p>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <p>Sunday</p>
                                    <p>Closed</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row style={{margin:"auto",color:"white"}} className='px-5'>
                    <Col lg={7}>
                    <h3 style={{marginTop:'70px'}}>REQUEST AN APPOINTMENT ONLINE</h3>
                    <p style={{fontSize:'18px'}}>After you submit the form, a representative will call you back with the information you’ll need to make an appointment.</p>
                    </Col>
                    <Col></Col>
                </Row>
                <Row style={{margin:"auto"}} className='p-5'>   
                    <Col lg={6} className='forms-col'>
                        <label htmlFor="uname">YOUR NAME</label><br />
                        <input type="text" name='uname' placeholder='Enter Your Name' />
                        <div className="form-underline"></div>
                    </Col>
                    <Col lg={6} className='forms-col'>
                        <label htmlFor="uname">YOUR EMAIL</label><br />
                        <input type="text"  name='uname' placeholder='Enter Your Email' />
                        <div className="form-underline"></div>
                    </Col>
                </Row>
                <Row style={{margin:"auto"}} className='px-5 mt-3'>   
                    <Col lg={6} className='forms-col'>
                        <label htmlFor="uname">SELECT DATE</label><br />
                        <input type="date" id='uname' />
                        <div className="form-underline"></div>
                    </Col>
                    <Col lg={6} className='forms-col'>
                        <label>SELECT TIME</label><br />
                        <input type="time" name='uname'/>
                        <div className="form-underline"></div>
                    </Col>
                </Row>
                <Row style={{margin:"auto"}} className='px-5 mt-5'>   
                    <Col lg={12} className='forms-col'>
                        <label htmlFor="uname">YOUR MESSAGE</label><br />
                        <input type="text" name='uname' placeholder='Describe Your Problem' />
                        <div style={{width:"98%"}} className="form-underline"></div>
                    </Col>
                </Row>
                <div className='p-5'><button>SEND MESSAGE</button></div>
            </div>
            <Footer/>
        </div>
    )
}

export default Contact