import React from 'react'
import './Profile.css'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Profile() {
  return (
    <div style={{ paddingTop: "100px" }} className='profile-div'>
    <Row style={{ margin: "auto" }}>
        <Col lg={4}></Col>
        <Col lg={4} className=''>
            <div style={{ height: "80vh" }} className='d-flex justify-content-center align-items-center flex-column w-100'>
                <div className='profile-style-div'>
                    <div className='pro-heading-div'><h4>CUSTOMER PROFILE</h4></div>
                    <div className='form-div'>
                        <form>
                            <div className='profile-inputs'>
                                <input type="text" placeholder='Name' value={'Nafil Husn'} required/>
                                <label><i class="fa-solid fa-user"></i></label>
                                <div className='profile-form-underline'></div>
                            </div>
                            <div className='profile-inputs mt-3'>
                                <input type="text" placeholder='Mobile No' value={'7356288705'} required/>
                                <label><i class="fa-solid fa-mobile"></i></label>
                                <div className='profile-form-underline'></div>
                            </div>
                            <div className='profile-inputs mt-3'>
                                <input type="text" placeholder='Email ID' value={'anangel098@gmail.com'} required/>
                                <label ><i class="fa-solid fa-envelope"></i></label>
                                <div className='profile-form-underline'></div>
                            </div>
                            <div className='profile-inputs mt-3'>
                                <input type="password" placeholder='Password' value={1234567} required/>
                                <label ><i class="fa-solid fa-lock"></i></label>
                                <div className='profile-form-underline'></div>
                            </div>
                            {/* <div className='mt-3' style={{ textAlign: "right" }}><Link style={{ textDecoration: "none", color: 'grey' }} to={'/login'}>back to login</Link></div> */}
                            <div className='text-center'><button className='mt-3' type='submit'>UPDATE</button></div>
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

export default Profile