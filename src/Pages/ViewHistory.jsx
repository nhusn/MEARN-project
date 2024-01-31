import React, { useState } from 'react'
import './ViewHistory.css'
import { Col, Row } from 'react-bootstrap'
import logo from '../Asset/Logo_LenMotors.png'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

function ViewHistory() {
  // this is for pdf download 
  const [loader, setLoader] = useState(false)
  const downloadPDF = () => {
    const capture = document.querySelector('.full-history-div');
    setLoader(true)
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL('img/png')
      const doc = new jsPDF('l', 'mm',);
      const componentWidth = doc.internal.pageSize.getWidth()
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight - 5);
      setLoader(false);
      doc.save('invoice.pdf');
    })
  }

  return (
    <div id='view-history' className=''>
      <div className="full-history-div p-4">
        <Row style={{ margin: "auto" }}>
          <Col lg={4}>
            <h5>Branch Address :</h5>
            <h6>LEN MOTORS PVT LTD - KAKKAND</h6>
            <h6>Kerala,seaport-airport road Kakanad,Thrikkakara,Ernakulam </h6>
            <h6>9876543219,9812354670</h6>
          </Col>
          <Col lg={4}>

          </Col>
          <Col lg={4}>
            <div style={{ textAlign: "right" }}><img src={logo} alt="logo" className='img-fluid w-50 mx-auto' /></div>
          </Col>
        </Row>

        <div>
          <h4 className='text-center mt-5'>TAX INVOICE</h4>
          <h6 className='ms-5'>GSTIN:32AAFCK2789E1ZO</h6>
          <hr style={{ color: "white", opacity: ".7" }} />
        </div>
        <Row style={{ margin: "auto" }} >
          <Col lg={6}>

            <Row style={{ margin: "auto" }}>
              <Col lg={5}>
                <div className='d-flex justify-content-between'>
                  <h6>Invoice Date</h6>
                  <h6>:</h6>
                </div>
              </Col>
              <Col lg={4}>
                <h6>19/09/2022</h6>
              </Col>
            </Row>

            <Row style={{ margin: "auto" }}>
              <Col lg={5}>
                <div className='d-flex justify-content-between'>
                  <h6>Billed To</h6>
                  <h6>:</h6>
                </div>
              </Col>
              <Col lg={4}>
                <h6>MIDHUN <br />
                  MUTHUKUTTY(H) <br />
                  THIRURKKAD <br />
                  Malapuram 679321 <br />
                  Kerala INDIA
                </h6>
              </Col>
            </Row>

            <Row style={{ margin: "auto" }}>
              <Col lg={5}>
                <div className='d-flex justify-content-between'>
                  <h6>Mobile No.</h6>
                  <h6>:</h6>
                </div>
              </Col>
              <Col lg={4}>
                <h6>7356288705</h6>
              </Col>
            </Row>

            <Row style={{ margin: "auto" }}>
              <Col lg={5}>
                <div className='d-flex justify-content-between'>
                  <h6>Technician Name</h6>
                  <h6>:</h6>
                </div>
              </Col>
              <Col lg={4}>
                <h6>JAIN GEORGE T K</h6>
              </Col>
            </Row>
          </Col>
          <Col lg={6}>
            <Row style={{ margin: "auto" }}>
              <Col lg={5}>
                <div className='d-flex justify-content-between'>
                  <h6>Jobcard Date</h6>
                  <h6>:</h6>
                </div>
              </Col>
              <Col lg={4}>
                <h6>9/13/2022</h6>
              </Col>
            </Row>

            <Row style={{ margin: "auto" }}>
              <Col lg={5}>
                <div className='d-flex justify-content-between'>
                  <h6>Invoice Type</h6>
                  <h6>:</h6>
                </div>
              </Col>
              <Col lg={4}>
                <h6>Credit</h6>
              </Col>
            </Row>

            <Row style={{ margin: "auto" }}>
              <Col lg={5}>
                <div className='d-flex justify-content-between'>
                  <h6>Repair Type</h6>
                  <h6>:</h6>
                </div>
              </Col>
              <Col lg={4}>
                <h6>Paid Periodic Service</h6>
              </Col>
            </Row>

            <Row style={{ margin: "auto" }}>
              <Col lg={5}>
                <div className='d-flex justify-content-between'>
                  <h6>KM Reading</h6>
                  <h6>:</h6>
                </div>
              </Col>
              <Col lg={4}>
                <h6>18300</h6>
              </Col>
            </Row>

            <Row style={{ margin: "auto" }}>
              <Col lg={5}>
                <div className='d-flex justify-content-between'>
                  <h6>Registration No.</h6>
                  <h6>:</h6>
                </div>
              </Col>
              <Col lg={4}>
                <h6>KL53L7480</h6>
              </Col>
            </Row>

            <Row style={{ margin: "auto" }}>
              <Col lg={5}>
                <div className='d-flex justify-content-between'>
                  <h6>Chassis No.</h6>
                  <h6>:</h6>
                </div>
              </Col>
              <Col lg={4}>
                <h6>MD5A36FU98CB40974</h6>
              </Col>
            </Row>

            <Row style={{ margin: "auto" }}>
              <Col lg={5}>
                <div className='d-flex justify-content-between'>
                  <h6>Engine No.</h6>
                  <h6>:</h6>
                </div>
              </Col>
              <Col lg={4}>
                <h6>JLYCHB44261</h6>
              </Col>
            </Row>

            <Row style={{ margin: "auto" }}>
              <Col lg={5}>
                <div className='d-flex justify-content-between'>
                  <h6>Model Name</h6>
                  <h6>:</h6>
                </div>
              </Col>
              <Col lg={4}>
                <h6>Pulsar NS 200</h6>
              </Col>
            </Row>
          </Col>
        </Row>

        <table id='service-details-table'>
          <tr>
            <th className='ps-2'>S No</th>
            <th className='ps-2'>Part / Labour</th>
            <th className='ps-2'>Desc. of Part/ Labour</th>
            <th className='ps-2'>Billing Type</th>
            <th className='ps-2'>Qty</th>
            <th className='ps-2'>UOM</th>
            <th className='ps-2'>Rate</th>
            <th className='ps-2'>Total Value</th>
            <th className='ps-2'>Discount</th>
            <th className='ps-2 w-25 text-center'>Total Amount</th>
          </tr>
          <tr>
            <td>1</td>
            <td>JL511001</td>
            <td>GASKET HEAD COVER(RUBBER)</td>
            <td>Paid</td>
            <td>1</td>
            <td>EACH</td>
            <td>144.07</td>
            <td>144.07</td>
            <td>0.00</td>
            <td className='text-center'>170.01</td>
          </tr>
          <tr>
            <td>2</td>
            <td>JG591070</td>
            <td>GASKET EXHAUST</td>
            <td>Paid</td>
            <td>1</td>
            <td>EACH</td>
            <td>54.24</td>
            <td>54.24</td>
            <td>0.00</td>
            <td className='text-center'>64.00</td>
          </tr>
          <tr>
            <td>3</td>
            <td>JG591070</td>
            <td>GASKET EXHAUST</td>
            <td>Paid</td>
            <td>1</td>
            <td>EACH</td>
            <td>54.24</td>
            <td>54.24</td>
            <td>0.00</td>
            <td className='text-center'>64.00</td>
          </tr>
          <tr>
            <td>4</td>
            <td>JG591070</td>
            <td>GASKET EXHAUST</td>
            <td>Paid</td>
            <td>1</td>
            <td>EACH</td>
            <td>54.24</td>
            <td>54.24</td>
            <td>0.00</td>
            <td className='text-center'>64.00</td>
          </tr>
          <tr>
            <td>5</td>
            <td>JG591070</td>
            <td>GASKET EXHAUST</td>
            <td>Paid</td>
            <td>1</td>
            <td>EACH</td>
            <td>54.24</td>
            <td>54.24</td>
            <td>0.00</td>
            <td className='text-center'>64.00</td>
          </tr>
          <tr>
            <td>6</td>
            <td>JG591070</td>
            <td>GASKET EXHAUST</td>
            <td>Paid</td>
            <td>1</td>
            <td>EACH</td>
            <td>54.24</td>
            <td>54.24</td>
            <td>0.00</td>
            <td className='text-center'>64.00</td>
          </tr>
          <tr>
            <td>7</td>
            <td>JG591070</td>
            <td>GASKET EXHAUST</td>
            <td>Paid</td>
            <td>1</td>
            <td>EACH</td>
            <td>54.24</td>
            <td>54.24</td>
            <td>0.00</td>
            <td className='text-center'>64.00</td>
          </tr>
          <tr>
            <td>8</td>
            <td>JG591070</td>
            <td>GASKET EXHAUST</td>
            <td>Paid</td>
            <td>1</td>
            <td>EACH</td>
            <td>54.24</td>
            <td>54.24</td>
            <td>0.00</td>
            <td className='text-center'>64.00</td>
          </tr>
          <tr>
            <td>9</td>
            <td>JG591070</td>
            <td>GASKET EXHAUST</td>
            <td>Paid</td>
            <td>1</td>
            <td>EACH</td>
            <td>54.24</td>
            <td>54.24</td>
            <td>0.00</td>
            <td className='text-center'>64.00</td>
          </tr>
        </table>


        {/* Total Amount */}
        <div className='text-center mt-5'>
            <h5>Net Amount : 10000</h5>
        </div>

        <div className='text-center mt-5'>
          <h5>Get your vehicle serviced at regular intervels</h5>
          <h5>Next due date for service is 19-12-2022</h5>
          <h6>Thank You & Happy Riding</h6>
        </div>


      </div>
      <div className='pdf-dwnld-btn text-center'>
        <button disabled={loader} onClick={downloadPDF}>
          {
            loader ? (<span>Downloading</span>) : (<span>Download</span>)
          }
        </button>
      </div>
    </div>
  )
}

export default ViewHistory
