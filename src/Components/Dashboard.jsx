import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import './Dashboard.css'
import { Link } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RequestServiceAPI } from '../Services/allAPI';


function Dashboard() {
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

  const [bookService, setBookService] = useState({
    name: "",
    number: 0,
    email: "",
    date: "",
    company: "",
    model: "",
    regNo: "",
    ModOfService: "",
    vehiclePickup: "false",
    address: "",
    message: ""
  })

  const handleBookService = async (e) => {
    e.preventDefault()


    const { company, model, regNo, ModOfService, vehiclePickup, address } = bookService
    if (!company || !model || !regNo || !ModOfService || !vehiclePickup || !address) {
      info("Please fill the form")
    } else {
      const result = await RequestServiceAPI(bookService)
      if (result.status == 200) {
        success(result.data)
        setBookService({
          name: "",
          number: 0,
          email: "",
          date: "",
          company: "",
          model: "",
          regNo: "",
          ModOfService: "",
          vehiclePickup: "false",
          address: "",
          message: ""
        })
      } else {
        info("Please after some times")
      }
      // console.log(result);
    }
  }

  useEffect(() => {
    if (bookService.name === "") {
      const userDetails = JSON.parse(sessionStorage.getItem('existingUser'))
      const date = (new Date()).toLocaleDateString('sv-SE')
      setBookService({ ...bookService, name: userDetails.name, email: userDetails.email, number: userDetails.mobno, date })
    }

  }, [])
  // console.log(bookService);
  return (
    <div>

      {/* Service Form Heading*/}
      <Row style={{ margin: "auto", color: "white" }} className='px-5'>
        <Col lg={7}>
          <h3 style={{ marginTop: '70px' }}>BOOK YOUR SERVICE</h3>
          <p style={{ fontSize: '18px' }}>After you submit the form, a representative will call you to confirm the service</p>
        </Col>
        <Col></Col>
      </Row>

      {/* Service Form */}
      <Row style={{ margin: "auto" }} className='px-5 my-5'>
        <Col lg={6}>
          <h5>Vehicle Details</h5>
          <div className='vehicle-info'>
            <label htmlFor="company">COMPANY</label><br />
            <input type="text" name='uname' placeholder='Enter Vehicle Company' value={bookService.company} onChange={(e) => setBookService({ ...bookService, company: e.target.value })} required />
            <div className="veh-form-underline"></div>
          </div>
          <div className='vehicle-info mt-3'>
            <label htmlFor="model">MODEL NAME</label><br />
            <input type="text" name='uname' placeholder='Enter Model Name' value={bookService.model} onChange={(e) => setBookService({ ...bookService, model: e.target.value })} required />
            <div className="veh-form-underline"></div>
          </div>
          <div className='vehicle-info mt-3'>
            <label htmlFor="regNo">REGISTRATION NUMBER</label><br />
            <input type="text" name='uname' placeholder='eg:KL10AB1234' value={bookService.regNo} onChange={(e) => setBookService({ ...bookService, regNo: e.target.value.toUpperCase() })} required />
            <div className="veh-form-underline"></div>
          </div>

          <h5 className='mt-4'>Mode Of Service</h5>
          <div className='vehicle-info'>
            <select name="modOfService" id="modOfService" value={bookService.ModOfService} onChange={(e) => setBookService({ ...bookService, ModOfService: e.target.value })} required>
              <option value="">None</option>
              <option value="Periodic Service">Periodic Service</option>
              <option value="Body Polishing">Body Polishing</option>
              <option value="Mechanical Inspection">Mechanical Inspection</option>
              <option value="Any Further Complaints">Any Further Complaints</option>
              <option value="Accident Recovery">Accident Recovery</option>
            </select>
            <div className="veh-form-underline"></div>
          </div>

        </Col>
        <Col lg={6}>
          <h5 className='mt-4'>Vehicle Pickup</h5>
          <div className='vehicle-info mt-3'>
            <select name="pickup" id="modOfService" value={bookService.vehiclePickup} onChange={(e) => setBookService({ ...bookService, vehiclePickup: e.target.value })} required>
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
            <div className="veh-form-underline"></div>
          </div>
          <div className='vehicle-info mt-3'>
            <label>Address (for billing)</label><br />
            <textarea style={{ backgroundColor: "transparent", color: "white", padding: "5px", width: "100%", border: "0px", outline: "0px" }} rows="2" value={bookService.address} onChange={(e) => setBookService({ ...bookService, address: e.target.value })} required></textarea>
            <div className="veh-form-underline"></div>
          </div>
          <div className='vehicle-info mt-3'>
            <label>any words (about complaint)</label><br />
            <textarea style={{ backgroundColor: "transparent", color: "white", padding: "5px", width: "100%", border: "0px", outline: "0px" }} rows="2" value={bookService.message} onChange={(e) => setBookService({ ...bookService, message: e.target.value })} required></textarea>
            <div className="veh-form-underline"></div>
          </div>
        </Col>
        <div className='text-center mt-5'>
          <button onClick={(e) => handleBookService(e)} className='service-button'>Book Service</button>
        </div>
      </Row>

      <Row style={{ margin: "auto" }}>

        {/* Service History */}
        <Col lg={8} className='service-history'>
          <div className='serv-history-group ms-3'>
            <div className='serv-history-title'>
              <h5>Service History</h5>
            </div>
            <table id='service-history-table'>
              <thead>
                <tr>
                  <th className='ps-2'>#</th>
                  <th className='ps-2'>Date</th>
                  <th className='ps-2'>Title</th>
                  <th className='ps-2'>Vehicle</th>
                  <th className='ps-2'>Amount</th>
                  <th className='ps-'>View</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>21/08/2023</td>
                  <td>Clutch Replacement</td>
                  <td>Swift Desire</td>
                  <td>12000</td>
                  <td><Link style={{ textDecoration: "none", color: "white" }} to={'/view/:id'}><i className="fa-solid fa-eye ps-"></i></Link></td>
                </tr>
              </tbody>
            </table>
          </div>
        </Col>

        {/* Service Ongoing */}
        <Col lg={4} className='px-5'>
          <div className='ong-serv-group'>
            <div className='ong-service-title'>
              <h5>Track Your Service</h5>
            </div>
            <div className=' ong-service'>
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
            </div>
          </div>

        </Col>
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Complaint Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Engine out completely</p>
        </Modal.Body>
        <Modal.Footer>
          <button className='modal-button' onClick={handleClose}>Close</button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </div>
  )
}

export default Dashboard