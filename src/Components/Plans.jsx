import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './Plans.css'

function Plans() {
  return (
    <>
       <Row className='mt-5 p-5'>
        <Col lg={4} md={4} xs={12} className='aff-plan'>
            <h2 className='mb-5'>AFFORDABLE PRICING PLANS</h2>
            <h5 className='mb-5'>We provide the best car service, recommend the best products through an independent review process.</h5>
                <li>SAME DAY SERVICE</li>
                <li>CONVENIENT LOCATION</li>
                <li>ONLINE APPOINTMENT</li>
        </Col>

        <Col lg={4} md={4} xs={12}>
            <div className='w-100 d-flex justify-content-center align-items-center flex-column p-5 personal-plan'>
                <div className='text-center'>
                    <p>PERSONAL</p>
                    <h1>&#x20B9; 4499</h1>
                    <p>per month</p>
                    <hr />
                </div>
                <div className='w-100'>
                    <div className='d-flex justify-content-between service-check'><p>Scheduled servicing</p><i class="fa-solid fa-check"></i> </div>
                    <div className='d-flex justify-content-between service-check'><p>Oil checking</p><i class="fa-solid fa-check"></i> </div>
                    <div className='d-flex justify-content-between service-check'><p>Roadside Assistance</p><i class="fa-solid fa-check"></i> </div>
                    <div className='d-flex justify-content-between'><p>All routine maintenance</p><i class="fa-solid fa-xmark"></i> </div>
                    <div className='d-flex justify-content-between'><p>24/7 customer service</p><i class="fa-solid fa-xmark"></i> </div>
                </div>
                <button>ALL SERVICES</button>
            </div>
        </Col>

        <Col lg={4} md={4} xs={12}>
        <div className='w-100 d-flex justify-content-center align-items-center flex-column p-5 personal-plan'>
                <div className='text-center'>
                    <p>PROFESSIONAL</p>
                    <h1>&#x20B9; 8499</h1>
                    <p>per month</p>
                    <hr />
                </div>
                <div className='w-100'>
                    <div className='d-flex justify-content-between service-check'><p>Scheduled servicing</p><i class="fa-solid fa-check"></i> </div>
                    <div className='d-flex justify-content-between service-check'><p>Oil checking</p><i class="fa-solid fa-check"></i> </div>
                    <div className='d-flex justify-content-between service-check'><p>Roadside Assistance</p><i class="fa-solid fa-check"></i> </div>
                    <div className='d-flex justify-content-between service-check'><p>All routine maintenance</p><i class="fa-solid fa-check"></i> </div>
                    <div className='d-flex justify-content-between service-check'><p>24/7 customer service</p><i class="fa-solid fa-check"></i> </div>
                </div>
                <button>ALL SERVICES</button>
            </div>
        </Col>
       </Row> 
    </>
  )
}

export default Plans