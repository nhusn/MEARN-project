import React from 'react'
import './HTService.css'
import { Col, Row } from 'react-bootstrap'

function HTService() {
    return (
        <div className='HTS-container'>
            <Row style={{margin:"auto"}} className='px-5'>
                <Col className='p-5' lg={4} sm={12}>
                    <h3>HOW TO SERVICE YOUR CAR</h3>
                    <p className='mt-5'>Rather than letting your services go by, take these steps to keep your car in good shape until you can afford a full service.</p>
                </Col>
                <Col lg={8} sm={12}>
                    <Row>
                        <Col lg={6} sm={12}>
                            <div className='pt-5 HTS-steps'>
                                <div className="horizo-line"></div>
                                <h5><span>01</span> MAKE AN APPOINTMENT</h5>
                                <p>Lenmotors has made it easy to schedule an appointment online at a location near you in a few simple steps, easy schedule for customers.</p>
                            </div>
                        </Col>
                        <Col lg={6} sm={12}>
                            <div className='pt-5 HTS-steps'>
                                <div className="horizo-line"></div>
                                <h5><span>02</span> SELECT SERVICE</h5>
                                <p>We specialize in car services and have more than 20 years of experience in cars. We are car guys from day one. We love and respect cars.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} sm={12}>
                            <div className='pt-5 HTS-steps'>
                                <div className="horizo-line"></div>
                                <h5><span>03</span> CONFIRM REQUEST</h5>
                                <p>Has your request been confirmed?
                                    Reduce no-shows, save time, and focus on serving clients is our top criterion.</p>
                            </div>
                        </Col>
                        <Col lg={6} sm={12}>
                            <div className='pt-5 HTS-steps'>
                                <div className="horizo-line"></div>
                                <h5><span>04</span> GET YOUR CAR</h5>
                                <p>It is a vehicle inspection that keeps your car in a reliable, safe and fully-functioning condition based on guidelines set out by the vehicle.</p>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default HTService