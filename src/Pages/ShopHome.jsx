import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import './ShopHome.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

function ShopHome() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [bookShow, setBookShow] = useState(false);
    const handleBookClose = () => setBookShow(false);
    const handleBookShow = () => setBookShow(true);

    return (
        <div style={{ marginTop: "120px" }}>

            <Row style={{ margin: "auto" }}>
                <h5 className='text-center'>Booking Pending</h5>
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
                </Col>
            </Row>
            <Row style={{ margin: "auto" }} className='pt-5'>
                <Col lg={3} className='border p-3'>
                    <div className='d-flex justify-content-between'>
                        <p>Name</p>
                        <h6>Nafil Husn</h6>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <p>Mob No:</p>
                        <h6>987654321</h6>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <p>Email</p>
                        <h6>abcdef@gmail.com</h6>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <p>Date & Time</p>
                        <h6>22/03/2024 09:57 AM</h6>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <p>Message</p>
                        <h6 className='ps-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam mollitia explicabo adipisci. Nesciunt accusantium temporibus laboriosam reiciendis, autem rerum sit magni consectetur officiis eveniet explicabo, quod magnam cumque? Vitae, atque.</h6>
                    </div>
                    <div className='text-center'><a href='tel:917356288705'><button className='call-btn'>Call</button></a></div>
                </Col>
                <Col lg={3} className='border p-3'>
                    <div className='d-flex justify-content-between'>
                        <p>Name</p>
                        <h6>Nafil Husn</h6>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <p>Mob No:</p>
                        <h6>987654321</h6>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <p>Email</p>
                        <h6>abcdef@gmail.com</h6>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <p>Date & Time</p>
                        <h6>22/03/2024 09:57 AM</h6>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <p>Message</p>
                        <h6 className='ps-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam mollitia explicabo adipisci. Nesciunt accusantium temporibus laboriosam reiciendis, autem rerum sit magni consectetur officiis eveniet explicabo, quod magnam cumque? Vitae, atque.</h6>
                    </div>
                    <div className='text-center'><a href='tel:917356288705'><button className='call-btn'>Call</button></a></div>
                </Col>
                <Col lg={3} className='border p-3'>
                    <div className='d-flex justify-content-between'>
                        <p>Name</p>
                        <h6>Nafil Husn</h6>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <p>Mob No:</p>
                        <h6>987654321</h6>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <p>Email</p>
                        <h6>abcdef@gmail.com</h6>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <p>Date & Time</p>
                        <h6>22/03/2024 09:57 AM</h6>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <p>Message</p>
                        <h6 className='ps-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam mollitia explicabo adipisci. Nesciunt accusantium temporibus laboriosam reiciendis, autem rerum sit magni consectetur officiis eveniet explicabo, quod magnam cumque? Vitae, atque.</h6>
                    </div>
                    <div className='text-center'><a href='tel:917356288705'><button className='call-btn'>Call</button></a></div>
                </Col>
                <Col lg={3} className='border p-3'>
                    <div className='d-flex justify-content-between'>
                        <p>Name</p>
                        <h6>Nafil Husn</h6>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <p>Mob No:</p>
                        <h6>987654321</h6>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <p>Email</p>
                        <h6>abcdef@gmail.com</h6>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <p>Date & Time</p>
                        <h6>22/03/2024 09:57 AM</h6>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <p>Message</p>
                        <h6 className='ps-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam mollitia explicabo adipisci. Nesciunt accusantium temporibus laboriosam reiciendis, autem rerum sit magni consectetur officiis eveniet explicabo, quod magnam cumque? Vitae, atque.</h6>
                    </div>
                    <div className='text-center'><a href='tel:917356288705'><button className='call-btn'>Call</button></a></div>
                </Col>
            </Row>
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
            <Modal show={bookShow} onHide={handleBookClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Booking Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row >
                        <Col lg={6}>
                            <div>
                                <p style={{ marginBottom: "-1px" }}>Name</p>
                                <input style={{ border: "0px", borderBottom: '1px solid white', backgroundColor: "transparent", color: "white", outline: "none" }} type="text" value={'Nafil Husn M'} />
                            </div>
                            <div className='mt-2'>
                                <p style={{ marginBottom: "-1px" }}>Number</p>
                                <input style={{ border: "0px", borderBottom: '1px solid white', backgroundColor: "transparent", color: "white", outline: "none" }} type="text" value={'7356288705'} />
                            </div>
                            <div className='mt-2'>
                                <p style={{ marginBottom: "-1px" }}>Date</p>
                                <input style={{ border: "none", borderBottom: '1px solid white', backgroundColor: "transparent", color: "white", outline: "none" }} type="date" value={'Nafil Husn M'} />
                            </div>
                            <div className='mt-2'>
                                <p style={{ marginBottom: "-1px" }}>Message</p>
                                <textarea style={{  backgroundColor: "transparent",   }} rows='6' type="date" value={''} />
                            </div>

                        </Col>
                        <Col lg={6}>
                            <div>
                                <p style={{ marginBottom: "-1px" }}>Company</p>
                                <input style={{ border: "0px", borderBottom: '1px solid white', backgroundColor: "transparent", color: "white", outline: "none" }} type="text" value={'Volkswagon'} />
                            </div>
                            <div className='mt-2'>
                                <p style={{ marginBottom: "-1px" }}>Model Name</p>
                                <input style={{ border: "0px", borderBottom: '1px solid white', backgroundColor: "transparent", color: "white", outline: "none" }} type="text" value={'Polo GT'} />
                            </div>
                            <div className='mt-2'>
                                <p style={{ marginBottom: "-1px" }}>Mode Of Service</p>
                                <select style={{ border: "0px", borderBottom: '1px solid white', backgroundColor: "black", color: "white", outline: "none" }} name="modOfService" id="modOfService" required>
                                    <option value="Periodic Service">Periodic Service</option>
                                    <option value="Body Polishing">Body Polishing</option>
                                    <option value="Mechanical Inspection">Mechanical Inspection</option>
                                    <option value="Any Further Complaints">Any Further Complaints</option>
                                    <option value="Accident Recovery">Accident Recovery</option>
                                </select>
                            </div>
                            <div className='mt-2'>
                                <p style={{ marginBottom: "-1px" }}>Pickup</p>
                                <select style={{ border: "0px", borderBottom: '1px solid white', backgroundColor: "black", color: "white", outline: "none" }} name="modOfService" id="modOfService" required>
                                    <option value="">No</option>
                                    <option value="Periodic Service">Recovery Vehicle</option>
                                    <option value="Body Polishing">Pickup Man</option>
                                </select>
                            </div>
                            <div className='mt-2'>
                                <p style={{ marginBottom: "-1px" }}>Pickup Address</p>
                                <textarea style={{  backgroundColor: "transparent", color: "white",  }} rows='4' type="date" value={''} />
                            </div>
                        </Col>
                    </Row>


                </Modal.Body>
                <Modal.Footer>
                    <button className='modal-button' onClick={handleBookClose}>Cancel</button>
                    <button className='modal-button-confirm'>Change</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ShopHome