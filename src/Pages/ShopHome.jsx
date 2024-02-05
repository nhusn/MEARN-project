import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import './ShopHome.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { addOngoingAPI, allPendingServiceAPI, getAllCallRequestAPI, removeCallRequestAPI, removePendingServiceAPI } from '../Services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ShopHome() {

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

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [bookShow, setBookShow] = useState(false);
    const handleBookClose = () => {
        setModalDetails({})
        setBookShow(false)
    };
    const handleBookShow = (item) => {
        setModalDetails(item)
        setBookShow(true)
    };

    const [modalDetails, setModalDetails] = useState({})
    const [allPendingService, setAllPendingServices] = useState([])
    const [allCallRequest, setAllCallRequest] = useState([])

    const getallPendingService = async () => {
        const result = await allPendingServiceAPI()
        if (result.status === 200) {
            setAllPendingServices(result.data)
        } else {
            error(result.message)
        }
    }
    // console.log(allPendingService);
    const getAllCallRequest = async () => {
        const result = await getAllCallRequestAPI()
        if (result.status === 200) {
            setAllCallRequest(result.data)
        } else {
            error(result.message)
        }
    }

    const removePendingService = async (e,id)=>{
        e.preventDefault()
        const result = await removePendingServiceAPI(id)
        if (result.status === 200){
            // const deletedService = result.data
            // setAllPendingServices(allPendingService.filter(item=>(
            //     item._d != deletedService._id
            // )))
            getallPendingService()
        }else{
            console.log(result);
        }
    }
    // console.log(allPendingService);
    // console.log(allCallRequest);

    useEffect(() => {
        getallPendingService()
        getAllCallRequest()
    }, [])

    const handleOngoing = async (e,item)=>{
        e.preventDefault()
        const {ModOfService,address,regNo,number,email,name} = item
        const date = (new Date()).toLocaleDateString('sv-SE')
        const details = {ModOfService,address,date,regNo,number,email,name}
        const result = await addOngoingAPI(details)
        if(result.status===200){
            removePendingService(e,item._id)
        }else{
            error(result.message)
        }
        // console.log(result);
    }

    const handleRemoveCallRequest = async (e,id) =>{
        e.preventDefault()
        const result = await removeCallRequestAPI(id)
        if(result.status===200){
            success("removed")
            getAllCallRequest()
        }else{
            error("Server error try after some times")
        }
    }

    return (
        <div style={{ marginTop: "120px" }}>

            {/* Booking Service Pending */}
            <Row style={{ margin: "auto" }}>
                <h5 className='text-center'>Booking Pending</h5>

                {
                    allPendingService ? allPendingService.map((item, index) => (
                        <Col className='mt-4' key={index} lg={4}>
                            <Row className='shop-veh-detail'>
                                <Col lg={4}>
                                    <h6>Name</h6>
                                    <p>{item.name}</p>
                                    <h6>Number</h6>
                                    <p>{item.number}</p>
                                    <h6>Date</h6>
                                    <p>{item.date}</p>
                                </Col>
                                <Col lg={4}>
                                    <h6>Company</h6>
                                    <p>{item.company}</p>
                                    <h6>Model</h6>
                                    <p>{item.model}</p>
                                    <h6>MOD</h6>
                                    <p>{item.ModOfService}</p>
                                </Col>
                                <Col lg={4}>
                                    <h6>Pickup</h6>
                                    <p>{item.vehiclePickup}</p>
                                    <h6>Address</h6>
                                    <p>{item.address.slice(0, 25)}...</p>
                                    <h6>Message</h6>
                                    <p>{item.message.slice(0, 25)}...</p>
                                </Col>
                                <div className='d-flex justify-content-between flex-wrap'>
                                    <button className='view-button' onClick={() => handleBookShow(item)}>View</button>
                                    <a href={`tel:${item.number}`}><button className='call-btn'>Call</button></a>
                                    <button className='confirm-btn' onClick={(e)=>handleOngoing(e,item)}>Confirm</button>
                                    <button className='cancel-btn' onClick={(e)=>removePendingService(e,item._id)}>Cancel</button>
                                </div>
                            </Row>
                        </Col>
                    )) : <p>No More Pending Request</p>
                }


                {/* <Col lg={4}>
                    <Row className='shop-veh-detail'>
                        <Col lg={4}>
                            <h6>Name</h6>
                            <p>Nafil Husn M</p>
                            <h6>Number</h6>
                            <p>7356288705</p>
                            <h6>Date</h6>
                            <p>14/01/2024</p>
                        </Col>
                        <Col lg={4}>
                            <h6>Company</h6>
                            <p>Volkswagon</p>
                            <h6>Model</h6>
                            <p>Polo GT</p>
                            <h6>MOD</h6>
                            <p>Periodic Service</p>
                        </Col>
                        <Col lg={4}>
                            <h6>Pickup</h6>
                            <p>Yes</p>
                            <h6>Address</h6>
                            <p>Muthirakkulam (H)</p>
                            <h6>Message</h6>
                            <p>Mileage Short and a power lacking</p>
                        </Col>
                        <div className='d-flex justify-content-between flex-wrap'>
                            <button className='view-button' onClick={handleBookShow}>View</button>
                            <a href='tel:917356288705'><button className='call-btn'>Call</button></a>
                            <button className='confirm-btn'>Confirm</button>
                            <button className='cancel-btn'>Cancel</button>
                        </div>
                    </Row>
                </Col>
                <Col lg={4}>
                    <Row className='shop-veh-detail'>
                        <Col lg={4}>
                            <h6>Name</h6>
                            <p>Nafil Husn M</p>
                            <h6>Number</h6>
                            <p>7356288705</p>
                            <h6>Date</h6>
                            <p>14/01/2024</p>
                        </Col>
                        <Col lg={4}>
                            <h6>Company</h6>
                            <p>Volkswagon</p>
                            <h6>Model</h6>
                            <p>Polo GT</p>
                            <h6>MOD</h6>
                            <p>Periodic Service</p>
                        </Col>
                        <Col lg={4}>
                            <h6>Pickup</h6>
                            <p>Yes</p>
                            <h6>Address</h6>
                            <p>Muthirakkulam (H)</p>
                            <h6>Message</h6>
                            <p>Mileage Short and a power lacking</p>
                        </Col>
                        <div className='d-flex justify-content-between flex-wrap'>
                            <button className='view-button' onClick={handleBookShow}>View</button>
                            <a href='tel:917356288705'><button className='call-btn'>Call</button></a>
                            <button className='confirm-btn'>Confirm</button>
                            <button className='cancel-btn'>Cancel</button>
                        </div>
                    </Row>
                </Col> */}
            </Row>

            {/* Requested For Call */}
            <Row style={{ margin: "auto" }} className='pt-5'>
                <div>
                    {!allCallRequest.length===0 && <h5 className='text-center'>Requested for call</h5>}
                </div>
                {allCallRequest && allCallRequest.map((item,index) => (
                    <Col lg={3} key={index} className='border p-3'>
                        <div className='d-flex justify-content-between'>
                            <p>Name</p>
                            <h6>{item.name}</h6>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p>Mob No:</p>
                            <h6>{item.number}</h6>
                        </div>
                        {/* <div className='d-flex justify-content-between'>
                            <p>Email</p>
                            <h6>abcdef@gmail.com</h6>
                        </div> */}
                        <div className='d-flex justify-content-between'>
                            <p>Date & Time</p>
                            <h6>{item.date} {item.time}</h6>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p>Message</p>
                            <h6 className='ps-2'>{item.message}.</h6>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <a href={`tel:${item.number}`}><button className='call-btn'>Call</button></a>
                            <button className='cancel-btn' onClick={(e)=>handleRemoveCallRequest(e,item._id)}>Cancel</button>
                        </div>
                        
                    </Col>
                    
                ))

                }
            </Row>

            {/* Service Ongoing */}
            <Row style={{ margin: "auto" }} className='mt-5'>
                <h5 className='text-center'>Service Ongoing</h5>
                <Col lg={3}>
                    <div className='shop-ong-service'>
                        <div className="d-flex justify-content-between aling-items-center">
                            <h5>KL53L7580</h5>
                            <a href='tel:917356288705'><button className='call-btn-ong'>Call</button></a>
                        </div>
                        <hr />
                        <div className='d-flex justify-content-between'>
                            <h6>Book Service</h6>
                            <i style={{ color: "#ff5e00" }} className="fa-solid fa-circle-check"></i>
                        </div>
                        <i className="fa-solid fa-arrow-down-long"></i>
                        <div className='d-flex justify-content-between'>
                            <h6>Vehicle Pickup</h6>
                            <i style={{ color: "#ff5e00" }} className="fa-solid fa-circle-check"></i>
                        </div>
                        <i className="fa-solid fa-arrow-down-long"></i>
                        <div className='d-flex justify-content-between'>
                            <h6>Inspection</h6>
                            <i className="fa-regular fa-circle"></i>
                        </div>
                        <i className="fa-solid fa-arrow-down-long"></i>
                        <div className='d-flex justify-content-between'>
                            <h6 style={{ color: 'blue', textDecoration: "underline", cursor: "pointer" }} onClick={handleShow}>Complaint Details</h6>
                            <i className="fa-regular fa-circle"></i>
                        </div>
                        <i className="fa-solid fa-arrow-down-long"></i>
                        <div className='d-flex justify-content-between'>
                            <h6>Service Done</h6>
                            <i className="fa-regular fa-circle"></i>
                        </div>
                        <i className="fa-solid fa-arrow-down-long"></i>
                        <div className='d-flex justify-content-between'>
                            <h6>Delivered</h6>
                            <i className="fa-regular fa-circle"></i>
                        </div>
                        <div className='text-center'><Link to={'/billing'}><button className='create-btn'>Create Bill</button></Link></div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className='shop-ong-service'>
                        <div className="d-flex justify-content-between aling-items-center">
                            <h5>KL53L7580</h5>
                            <a href='tel:917356288705'><button className='call-btn-ong'>Call</button></a>
                        </div>
                        <hr />
                        <div className='d-flex justify-content-between'>
                            <h6>Book Service</h6>
                            <i style={{ color: "#ff5e00" }} className="fa-solid fa-circle-check"></i>
                        </div>
                        <i className="fa-solid fa-arrow-down-long"></i>
                        <div className='d-flex justify-content-between'>
                            <h6>Vehicle Pickup</h6>
                            <i style={{ color: "#ff5e00" }} className="fa-solid fa-circle-check"></i>
                        </div>
                        <i className="fa-solid fa-arrow-down-long"></i>
                        <div className='d-flex justify-content-between'>
                            <h6>Inspection</h6>
                            <i className="fa-regular fa-circle"></i>
                        </div>
                        <i className="fa-solid fa-arrow-down-long"></i>
                        <div className='d-flex justify-content-between'>
                            <h6 style={{ color: 'blue', textDecoration: "underline", cursor: "pointer" }} onClick={handleShow}>Complaint Details</h6>
                            <i className="fa-regular fa-circle"></i>
                        </div>
                        <i className="fa-solid fa-arrow-down-long"></i>
                        <div className='d-flex justify-content-between'>
                            <h6>Service Done</h6>
                            <i className="fa-regular fa-circle"></i>
                        </div>
                        <i className="fa-solid fa-arrow-down-long"></i>
                        <div className='d-flex justify-content-between'>
                            <h6>Delivered</h6>
                            <i className="fa-regular fa-circle"></i>
                        </div>
                        <div className='text-center'><Link to={'/billing'}><button className='create-btn'>Create Bill</button></Link></div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className='shop-ong-service'>
                        <div className="d-flex justify-content-between aling-items-center">
                            <h5>KL53L7580</h5>
                            <a href='tel:917356288705'><button className='call-btn-ong'>Call</button></a>
                        </div>
                        <hr />
                        <div className='d-flex justify-content-between'>
                            <h6>Book Service</h6>
                            <i style={{ color: "#ff5e00" }} className="fa-solid fa-circle-check"></i>
                        </div>
                        <i className="fa-solid fa-arrow-down-long"></i>
                        <div className='d-flex justify-content-between'>
                            <h6>Vehicle Pickup</h6>
                            <i style={{ color: "#ff5e00" }} className="fa-solid fa-circle-check"></i>
                        </div>
                        <i className="fa-solid fa-arrow-down-long"></i>
                        <div className='d-flex justify-content-between'>
                            <h6>Inspection</h6>
                            <i className="fa-regular fa-circle"></i>
                        </div>
                        <i className="fa-solid fa-arrow-down-long"></i>
                        <div className='d-flex justify-content-between'>
                            <h6 style={{ color: 'blue', textDecoration: "underline", cursor: "pointer" }} onClick={handleShow}>Complaint Details</h6>
                            <i className="fa-regular fa-circle"></i>
                        </div>
                        <i className="fa-solid fa-arrow-down-long"></i>
                        <div className='d-flex justify-content-between'>
                            <h6>Service Done</h6>
                            <i className="fa-regular fa-circle"></i>
                        </div>
                        <i className="fa-solid fa-arrow-down-long"></i>
                        <div className='d-flex justify-content-between'>
                            <h6>Delivered</h6>
                            <i className="fa-regular fa-circle"></i>
                        </div>
                        <div className='text-center'><Link to={'/billing'}><button className='create-btn'>Create Bill</button></Link></div>
                    </div>
                </Col>
                <Col lg={3}>
                    <div className='shop-ong-service'>
                        <div className="d-flex justify-content-between aling-items-center">
                            <h5>KL53L7580</h5>
                            <a href='tel:917356288705'><button className='call-btn-ong'>Call</button></a>
                        </div>
                        <hr />
                        <div className='d-flex justify-content-between'>
                            <h6>Book Service</h6>
                            <i style={{ color: "#ff5e00" }} className="fa-solid fa-circle-check"></i>
                        </div>
                        <i className="fa-solid fa-arrow-down-long"></i>
                        <div className='d-flex justify-content-between'>
                            <h6>Vehicle Pickup</h6>
                            <i style={{ color: "#ff5e00" }} className="fa-solid fa-circle-check"></i>
                        </div>
                        <i className="fa-solid fa-arrow-down-long"></i>
                        <div className='d-flex justify-content-between'>
                            <h6>Inspection</h6>
                            <i className="fa-regular fa-circle"></i>
                        </div>
                        <i className="fa-solid fa-arrow-down-long"></i>
                        <div className='d-flex justify-content-between'>
                            <h6 style={{ color: 'blue', textDecoration: "underline", cursor: "pointer" }} onClick={handleShow}>Complaint Details</h6>
                            <i className="fa-regular fa-circle"></i>
                        </div>
                        <i className="fa-solid fa-arrow-down-long"></i>
                        <div className='d-flex justify-content-between'>
                            <h6>Service Done</h6>
                            <i className="fa-regular fa-circle"></i>
                        </div>
                        <i className="fa-solid fa-arrow-down-long"></i>
                        <div className='d-flex justify-content-between'>
                            <h6>Delivered</h6>
                            <i className="fa-regular fa-circle"></i>
                        </div>
                        <div className='text-center'><Link to={'/billing'}><button className='create-btn'>Create Bill</button></Link></div>
                    </div>
                </Col>
            </Row>

            {/* Complaint Details Modal */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Complaint Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <textarea style={{ backgroundColor: "transparent", color: "white", padding: "5px", width: "100%" }} rows="8" value={"Engine out completely"}></textarea>
                </Modal.Body>
                <Modal.Footer>
                    <button className='modal-button' onClick={handleClose}>Cancel</button>
                    <button className='modal-button-confirm'>Confirm</button>
                </Modal.Footer>
            </Modal>

            {/* View Pending Service */}
            <Modal show={bookShow} onHide={handleBookClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Booking Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row >
                        <Col lg={6}>
                            <div>
                                <p style={{ marginBottom: "-1px" }}>Name</p>
                                <input style={{ border: "0px", borderBottom: '1px solid white', backgroundColor: "transparent", color: "white", outline: "none" }} type="text" value={modalDetails.name} readOnly />
                            </div>
                            <div className='mt-2'>
                                <p style={{ marginBottom: "-1px" }}>Number</p>
                                <input style={{ border: "0px", borderBottom: '1px solid white', backgroundColor: "transparent", color: "white", outline: "none" }} type="text" value={modalDetails.number} readOnly />
                            </div>
                            <div className='mt-2'>
                                <p style={{ marginBottom: "-1px" }}>Date</p>
                                <input style={{ border: "none", borderBottom: '1px solid white', backgroundColor: "transparent", color: "white", outline: "none" }} type="date" value={modalDetails.date} readOnly />
                            </div>
                            <div className='mt-2'>
                                <p style={{ marginBottom: "-1px" }}>Registration Number</p>
                                <input style={{ border: "none", borderBottom: '1px solid white', backgroundColor: "transparent", color: "white", outline: "none" }} type="text" value={modalDetails.regNo} readOnly />
                            </div>
                            <div className='mt-2'>
                                <p style={{ marginBottom: "-1px" }}>Message</p>
                                <textarea style={{ backgroundColor: "transparent", color: "white" }} rows='4' type="date" value={modalDetails.message} readOnly />
                            </div>

                        </Col>
                        <Col lg={6}>
                            <div>
                                <p style={{ marginBottom: "-1px" }}>Company</p>
                                <input style={{ border: "0px", borderBottom: '1px solid white', backgroundColor: "transparent", color: "white", outline: "none" }} type="text" value={modalDetails.company} readOnly />
                            </div>
                            <div className='mt-2'>
                                <p style={{ marginBottom: "-1px" }}>Model Name</p>
                                <input style={{ border: "0px", borderBottom: '1px solid white', backgroundColor: "transparent", color: "white", outline: "none" }} type="text" value={modalDetails.model} readOnly />
                            </div>
                            <div className='mt-2'>
                                <p style={{ marginBottom: "-1px" }}>Mode Of Service</p>
                                <select value={modalDetails.ModOfService} style={{ border: "0px", borderBottom: '1px solid white', backgroundColor: "black", color: "white", outline: "none" }} name="modOfService" id="modOfService" readOnly required>
                                    <option value="Periodic Service">Periodic Service</option>
                                    <option value="Body Polishing">Body Polishing</option>
                                    <option value="Mechanical Inspection">Mechanical Inspection</option>
                                    <option value="Any Further Complaints">Any Further Complaints</option>
                                    <option value="Accident Recovery">Accident Recovery</option>
                                </select>
                            </div>
                            <div className='mt-2'>
                                <p style={{ marginBottom: "-1px" }}>Pickup</p>
                                <select value={modalDetails.vehiclePickup} style={{ border: "0px", borderBottom: '1px solid white', backgroundColor: "black", color: "white", outline: "none" }} name="modOfService" id="modOfService" readOnly required>
                                    <option value="">No</option>
                                    <option value="Periodic Service">Recovery Vehicle</option>
                                    <option value="Body Polishing">Pickup Man</option>
                                </select>
                            </div>
                            <div className='mt-2'>
                                <p style={{ marginBottom: "-1px" }}>Pickup Address</p>
                                <textarea style={{ backgroundColor: "transparent", color: "white" }} rows='4' type="date" value={modalDetails.address} readOnly />
                            </div>
                        </Col>
                    </Row>


                </Modal.Body>
                <Modal.Footer>
                    <button className='modal-button' onClick={handleBookClose}>Cancel</button>
                </Modal.Footer>
            </Modal>
            <ToastContainer />
        </div>
    )
}

export default ShopHome