import React from 'react'
import './Service.css'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import wheelImg from '../Asset/Wheel.png'
import engineImg from '../Asset/Engine.png'
import bodyImg from '../Asset/body.png'
import seatImg from '../Asset/seat.png'
import axilImg from '../Asset/axil.png'
import Footer from '../Components/Footer'

function Service() {
  return (
    <div className='Service-page'>
      <div className='service-banner'>
        <div className='d-flex'>
          <Link style={{ textDecoration: "none", color: "white" }} to={'/'}>HOME</Link>
          <h6 style={{ color: "#d16527" }} className='ms-3 nav-serv'>SERVICE</h6>
        </div>
        <h1>SERVICES</h1>
      </div>
      <Row style={{margin:'auto'}}>
        <Col style={{ paddingLeft: "90px", paddingTop: "150px" }}>

          <Row className='cardOfService'>
            <div className='service-horiz'></div>
            <div className='bg-image-effect'>
              <img width={'300px'} className='img-fluid' src={wheelImg} alt="" />
            </div>
            <div style={{ zIndex: "1" }} className='d-flex justify-content-between mb-3'>
              <h5>CLUTCH SET REPLACEMENT</h5>
              <h5><span>from</span> $ 150</h5>
            </div>
            <hr />
            <Col style={{ zIndex: "1" }} lg={6} >
              <div className='dot mt-3'><p>Clutch Cable / Wire, Release Bearing / Clutch Cylinder</p></div>
              <div className='dot'><p>Clutch Set OES (Clutch Plate + Pressure Plate) Replacement</p></div>
            </Col>
            <Col>

            </Col>
            <Col style={{ zIndex: "1" }} lg={4}>
              <div className='dot mt-3'><p>Free Pickup & Drop</p></div>
              <div className='dot'><p>Clutch Oil, Gear Oil Additional</p></div>
              <div className='dot'><p>Opening & Fitting of Clutch Set</p></div>
            </Col>
          </Row>

          <Row className='cardOfService mt-5'>
            <div className='service-horiz'></div>
            <div className='bg-image-effect'>
              <img width={'300px'} className='img-fluid' src={engineImg} alt="" />
            </div>
            <div style={{ zIndex: "1" }} className='d-flex justify-content-between mb-3'>
              <h5>FLYWHEEL REPLACEMENT</h5>
              <h5><span>from</span> $ 190</h5>
            </div>
            <hr />
            <Col style={{ zIndex: "1" }} lg={6} >
              <div className='dot mt-3'><p>Clutch Set, Clutch Bearing, Clutch Cable / Wire,Clutch Cylinder</p></div>
              <div className='dot'><p>Automatic Transmission Clutch rates may vary</p></div>
            </Col>
            <Col>

            </Col>
            <Col style={{ zIndex: "1" }} lg={4}>
              <div className='dot mt-3'><p>Flywheel OES Replacement</p></div>
              <div className='dot'><p>Spare Part Price Only</p></div>
              <div className='dot'><p>Free Pickup & Drop</p></div>
            </Col>
          </Row>

          <Row className='cardOfService mt-5'>
            <div className='service-horiz'></div>
            <div className='bg-image-effect'>
              <img style={{transform:"scale(1.5)"}} width={'300px'} className='img-fluid' src={bodyImg} alt="" />
            </div>
            <div style={{ zIndex: "1" }} className='d-flex justify-content-between mb-3'>
              <h5>DOOR LATCH REPLACEMENT</h5>
              <h5><span>from</span> $ 150</h5>
            </div>
            <hr />
            <Col style={{ zIndex: "1" }} lg={6} >
              <div className='dot mt-3'><p>Inner Door Latch Mechanism Part Replacement</p></div>
              <div className='dot'><p>Outside Door Handle Cost Additional ( If Needed )</p></div>
            </Col>
            <Col>
            </Col>
            <Col style={{ zIndex: "1" }} lg={4}>
              <div className='dot mt-3'><p>Free Pickup & Drop</p></div>
              <div className='dot'><p>OES Spare Part Cost Only</p></div>
              <div className='dot'><p>Paint/Trim Cost Additional</p></div>
            </Col>
          </Row>

          <Row className='cardOfService mt-5'>
            <div className='service-horiz'></div>
            <div className='bg-image-effect'>
              <img style={{transform:"scale(1.4)"}} width={'300px'} className='img-fluid' src={seatImg} alt="" />
            </div>
            <div style={{ zIndex: "1" }} className='d-flex justify-content-between mb-3'>
              <h5>CAR RUBBING & POLISHING</h5>
              <h5><span>from</span> $ 70</h5>
            </div>
            <hr />
            <Col style={{ zIndex: "1" }} lg={6} >
              <div className='dot mt-3'><p>Pressure Washing</p></div>
              <div className='dot'><p>Every 6 Months (Recommended)</p></div>
              <div className='dot'><p>Rubbing with 3M™ Compound</p></div>
            </Col>
            <Col>

            </Col>
            <Col style={{ zIndex: "1" }} lg={4}>
              <div className='dot mt-3'><p>Tyre Dressing and Alloy Polishing</p></div>
              <div className='dot'><p>3M™ Wax Polishing</p></div>
            </Col>
          </Row>

          <Row className='cardOfService mt-5'>
            <div className='service-horiz'></div>
            <div className='bg-image-effect'>
              <img width={'300px'} style={{transform:"scale(1.7)"}}  className='img-fluid' src={axilImg} alt="" />
            </div>
            <div style={{ zIndex: "1" }} className='d-flex justify-content-between mb-3'>
              <h5>FRONT BUMPER REPLACEMENT</h5>
              <h5><span>from</span> $ 90</h5>
            </div>
            <hr />
            <Col style={{ zIndex: "1" }} lg={6} >
              <div className='dot mt-3'><p>Opening & Fitting of Front Bumper</p></div>
              <div className='dot'><p>Front Bumper Replacement (Black Colour)</p></div>
              <div className='dot'><p>Paint Cost Addtional</p></div>
            </Col>
            <Col>

            </Col>
            <Col style={{ zIndex: "1" }} lg={4}>
              <div className='dot mt-3'><p>Brackets, Grills, Cladding Additional</p></div>
              <div className='dot'><p>Free Pickup & Drop</p></div>
            </Col>
          </Row>

        </Col>
        <Col lg={4}>
          <div className='fixed-cols'>
            <div className='info-card'>
              <h3>ADDRESS</h3>
              <p>12th block civil line road kakkanad,Ernakulam 682042 Kerala India</p>
              <p>Kadarali Stadium  perinthalmanna,Malappuram 679321 Kerala India</p>
            </div>
  
            <div className='info-cards'>
              <h3>CONTACT US</h3>
              <p>+9187654321</p>
              <p>+9112345678</p>
              <p>lenmotors@gmail.com</p>
            </div>
  
            <div className='info-cards'>
              <h3>OPEN HOURS</h3>
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
      <Footer/>
    </div>
  )
}

export default Service