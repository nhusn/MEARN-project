import React, { useContext, useState } from 'react'
import './Contact.css'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import Footer from '../Components/Footer'
import { isCustomerLoggedInContext } from '../Context/Contexts';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { callRequestAPI } from '../Services/allAPI'

function Contact() {
    const info = (message) => {
        toast.info(`${message}`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        })
    }
    const warning = (message) => {
        toast.warn(message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }
    const success = (message) => {
        toast.success(message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }
    const error = (message) => {
        toast.error(message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    const date = (new Date()).toLocaleDateString('sv-SE')
    const { isCustomerLogged, setIsCustomerLogged } = useContext(isCustomerLoggedInContext)
    const [callRequest, setCallRequest] = useState({
        name: "", number: "", date: "", time: "", message: ""
    })
    // console.log(callRequest);
    const handleCallRequest = async (e) => {
        const { name, number, date, time, message } = callRequest
        if (isCustomerLogged) {
            if (!date || !time || !message) {
                info("Please fill the form")
            } else {
                const existingUser = JSON.parse(sessionStorage.getItem("existingUser"))
                setCallRequest({...callRequest,name:existingUser.name,number:existingUser.mobno})
                const result = await callRequestAPI(callRequest)
                if(result.status === 200){
                    success("Our representative call you")
                    setCallRequest({
                        name: "", number: "", date: "", time: "", message: ""
                    })
                }else{
                    error(result.response.data)
                }
            }
        } else {
            if (!date || !time || !message || !name || !number) {
                info("Please fill the form")
            }else{
                const result = await callRequestAPI(callRequest)
                if(result.status === 200){
                    success("Our representative call you")
                    setCallRequest({
                        name: "", number: "", date: "", time: "", message: ""
                    })
                }else{
                    error(result.response.data)
                }
            }
        }
    }

        return (
            <div style={{ paddingTop: "100px" }} className='contact-page'>
                <div className='service-banner'>
                    <div className='d-flex'>
                        <Link style={{ textDecoration: "none", color: "white" }} to={'/'}>HOME</Link>
                        <h6 style={{ color: "#d16527" }} className='ms-3 nav-serv'>CONTACT</h6>
                    </div>
                    <h1>CONTACT</h1>
                </div>
                <div style={{ padding: "50px" }}>
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

                    {/* Call Request */}
                    <Row style={{ margin: "auto", color: "white" }} className='px-5'>
                        <Col lg={7}>
                            <h3 style={{ marginTop: '70px' }}>REQUEST FOR ANY DOUBTS</h3>
                            <p style={{ fontSize: '18px' }}>After you submit the form, a representative will call you back with the information</p>
                        </Col>
                        <Col></Col>
                    </Row>
                    {isCustomerLogged ? "" :
                        <Row style={{ margin: "auto" }} className='p-5'>
                            <Col lg={6} className='forms-col'>
                                <label htmlFor="uname">YOUR NAME</label><br />
                                <input type="text" name='uname' placeholder='Enter Your Name' value={callRequest.name} onChange={(e) => setCallRequest({ ...callRequest, name: e.target.value })} required />
                                <div className="form-underline"></div>
                            </Col>
                            <Col lg={6} className='forms-col'>
                                <label htmlFor="uname">YOUR MOBILE NO</label><br />
                                <input type="number" minLength={10} name='uname' placeholder='Enter Your contact number' value={callRequest.number} onChange={(e) => setCallRequest({ ...callRequest, number: e.target.value })} required />
                                <div className="form-underline"></div>
                            </Col>
                        </Row>}
                    <Row style={{ margin: "auto" }} className='px-5 mt-3'>
                        <Col lg={6} className='forms-col'>
                            <label htmlFor="uname">SELECT DATE</label><br />
                            <input type="date" id='uname' required min={date} value={callRequest.date} onChange={(e) => setCallRequest({ ...callRequest, date: e.target.value })} />
                            <div className="form-underline"></div>
                        </Col>
                        <Col lg={6} className='forms-col'>
                            <label>SELECT TIME</label><br />
                            <input type="time" name='uname' value={callRequest.time} onChange={(e) => setCallRequest({ ...callRequest, time: e.target.value })} required />
                            <div className="form-underline"></div>
                        </Col>
                    </Row>
                    <Row style={{ margin: "auto" }} className='px-5 mt-5'>
                        <Col lg={12} className='forms-col'>
                            <label htmlFor="uname">YOUR MESSAGE</label><br />
                            <textarea style={{ backgroundColor: "transparent", width: "100%", border: 'none', outline: "none", color: 'white' }} type="text" name='uname' placeholder='Describe Your Problem' value={callRequest.message} onChange={(e) => setCallRequest({ ...callRequest, message: e.target.value })} required />
                            <div style={{ width: "98%" }} className="form-underline"></div>
                        </Col>
                    </Row>
                    <div className='p-5 callrequestbutton'><button onClick={(e) => handleCallRequest(e)}>SEND MESSAGE</button></div>
                </div>
                <Footer />
                <ToastContainer />
            </div>
        )
    }

    export default Contact