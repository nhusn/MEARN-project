import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './Dashboard.css'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div>

      <Row style={{ margin: "auto", color: "white" }} className='px-5'>
        <Col lg={7}>
          <h3 style={{ marginTop: '70px' }}>BOOK YOUR SERVICE</h3>
          <p style={{ fontSize: '18px' }}>After you submit the form, a representative will call you to confirm the service</p>
        </Col>
        <Col></Col>
      </Row>
      <Row style={{ margin: "auto" }} className='px-5 my-5'>
        <Col lg={6}>
          <h5>Vehicle Details</h5>
          <div className='vehicle-info'>
            <label htmlFor="uname">COMPANY</label><br />
            <input type="text" name='uname' placeholder='Enter Vehicle Company' required />
            <div className="veh-form-underline"></div>
          </div>
          <div className='vehicle-info mt-3'>
            <label htmlFor="uname">MODEL NAME</label><br />
            <input type="text" name='uname' placeholder='Enter Model Name' required />
            <div className="veh-form-underline"></div>
          </div>
          <div className='vehicle-info mt-3'>
            <label htmlFor="uname">REGISTRATION NUMBER</label><br />
            <input type="text" name='uname' placeholder='eg:KL10AB1234' required />
            <div className="veh-form-underline"></div>
          </div>

          <h5 className='mt-4'>Mode Of Service</h5>
          <div className='vehicle-info'>
            <select name="modOfService" id="modOfService" required>
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
            <select name="modOfService" id="modOfService" required>
              <option value="">No</option>
              <option value="Periodic Service">Recovery Vehicle</option>
              <option value="Body Polishing">Pickup Man</option>
            </select>
            <div className="veh-form-underline"></div>
          </div>
          <div className='vehicle-info mt-3'>
            <label htmlFor="uname">Pickup Address</label><br />
            <textarea style={{ backgroundColor: "transparent", color: "white", padding: "5px", width: "100%",border:"0px",outline:"0px" }} rows="2" required></textarea>
            <div className="veh-form-underline"></div>
          </div>
          <div className='vehicle-info mt-3'>
            <label htmlFor="uname" >any words (about complaint)</label><br />
            <textarea style={{ backgroundColor: "transparent", color: "white", padding: "5px", width: "100%",border:"0px",outline:"0px" }} rows="2" required></textarea>
            <div className="veh-form-underline"></div>
          </div>
        </Col>
        <div className='text-center mt-5'>
          <button className='service-button'>Book Service</button>
        </div>
      </Row>

      <Row style={{ margin: "auto" }}>
        {/* <Col lg={2}></Col> */}
        <Col lg={8} className='service-history'>
          <div className='serv-history-group ms-3'>
            <div className='serv-history-title'>
              <h5>Service History</h5>
            </div>
            <table id='service-history-table'>
              <tr>
                <th className='ps-2'>#</th>
                <th className='ps-2'>Date</th>
                <th className='ps-2'>Title</th>
                <th className='ps-2'>Vehicle</th>
                <th className='ps-2'>Amount</th>
                <th className='ps-'>View</th>
              </tr>
              <tr>
                <td>1</td>
                <td>21/08/2023</td>
                <td>Clutch Replacement</td>
                <td>Swift Desire</td>
                <td>12000</td>
                <td><Link style={{ textDecoration: "none", color: "white" }} to={'/view/:id'}><i class="fa-solid fa-eye ps-"></i></Link></td>
              </tr>
            </table>
          </div>
        </Col>
        <Col lg={4} className='px-5'>
          <div className='ong-serv-group'>
            <div className='ong-service-title'>
              <h5>Track Your Service</h5>
            </div>
            <div className=' ong-service'>
              <div className='d-flex justify-content-between'>
                <h6>Book Service</h6>
                <i style={{color:"#ff5e00"}} className="fa-solid fa-circle-check"></i>
              </div>
              <i className="fa-solid fa-arrow-down-long"></i>
              <div className='d-flex justify-content-between'>
                <h6>Vehicle Pickup</h6>
                <i style={{color:"#ff5e00"}} className="fa-solid fa-circle-check"></i>
              </div>
              <i className="fa-solid fa-arrow-down-long"></i>
              <div className='d-flex justify-content-between'>
                <h6>Inspection</h6>
                <i className="fa-regular fa-circle"></i>
              </div>
              <i className="fa-solid fa-arrow-down-long"></i>
              <div className='d-flex justify-content-between'>
                <h6>Complaint Details</h6>
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
    </div>
  )
}

export default Dashboard