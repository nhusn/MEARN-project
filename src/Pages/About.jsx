import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import aboutSideImg from '../Asset/About-side-image.jpg'
import HTService from '../Components/HTService'
import './About.css'

function About() {
    return (
        <div style={{paddingTop:"100px"}}>
            <div className='service-banner'>
                <div className='d-flex'>
                    <Link style={{ textDecoration: "none", color: "white" }} to={'/'}>HOME</Link>
                    <h6 style={{ color: "#d16527" }} className='ms-3 nav-serv'>ABOUT</h6>
                </div>
                <h1>ABOUT</h1>
            </div>
            <Row style={{margin:"auto"}} className='about-progress-bar'>
                <Col style={{padding:"50px",paddingRight:"120px"}} lg={6}>
                    <h2 style={{fontSize:"48px"}}className='mt-3'>WE MAKE AUTO REPAIR MORE CONVENIENT</h2>
                    <p style={{color:"white"}}>Lenmotors has 2 locations across the Kerala to provide car maintenance and car repair services wherever you are.</p>
                    <div className='mt-5'>
                        <div className='d-flex justify-content-between mb-3'>
                            <h6 style={{fontSize:"18px"}}>HIGHLY QUALIFIED EXPERTS</h6>
                            <h6 style={{fontSize:"18px"}}>90%</h6>
                        </div>
                        <div className="progress-bar-expert"></div>
                    </div>
                    <div className='mt-4'>
                        <div className='d-flex justify-content-between mb-3'>
                            <h6 style={{fontSize:"18px"}}>CLEAN, MODERN FACILITY</h6>
                            <h6 style={{fontSize:"18px"}}>99%</h6>
                        </div>
                        <div className="progress-bar-facility"></div>
                    </div>
                </Col>
                <Col style={{padding:"0px"}} lg={6} className=' side-image-div'>
                    <div  className='me-5'>
                        <img src={aboutSideImg} alt="Disk Disk" />
                    </div>
                </Col>
            </Row>

            <div> 
                <HTService/>
            </div>

            <Row style={{margin:"auto"}} className='bookYourService'>
                <Col lg={3}></Col>
                <Col lg={6} style={{zIndex:"1"}} className='text-center'>
                    <h3>BOOK YOUR SERVICE TODAY</h3>
                    <div style={{padding:"0px 15%"}}>
                        <p>With quality parts to meet every budget, friendly staff trained to make your visit informative and hassle free.</p>
                    </div>
                    <button>BOOK SERVICE NOW</button>
                </Col>
                <Col lg={3}></Col>
            </Row>

        </div>
    )
}

export default About