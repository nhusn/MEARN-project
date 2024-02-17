import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import './ShopBill.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ShopBill() {
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
  const handleClose = () => {
    setShow(false);
    setLocalHistory({
      LabourPartsCode: "",
      DescLabourParts: "",
      BillingType: "",
      Qty: Number,
      UOM: "",
      Rate: Number,
      Discount: Number
    })
  }
  const handleShow = () => setShow(true);


  const [allHistory, setAllHistory] = useState([])

  const [localHistory, setLocalHistory] = useState({
    labourPartsCode: "",
    descLabourParts: "",
    billingType: "",
    qty: 1,
    uom: "",
    rate: 0,
    discount: 0
  })

  const handleDeleteHistory = (index) => {
    setAllHistory(allHistory.filter((his, idx) => idx != index))
    error("Deleted Succesfully")
  }
  const handleAddHistory = () => {
    const { labourPartsCode, descLabourParts, billingType, qty, uom, rate } = localHistory
    if (!labourPartsCode || !descLabourParts || !billingType || qty<=0 || !uom || rate<=0) {
      warning("Please Fill the form correctly")
    } else {
      setAllHistory([...allHistory, localHistory])
      handleClose()
      success("Added Succesfully")
    }
  }
  const [customerDetails, setCustomerDetails] = useState({
    invoiceDate: "",
    billedAddress: "",
    mobNo: "",
    techName: "",
    jobDate: "",
    invoiceType: "",
    repairType: "",
    km: 0,
    registerNo: "",
    chasisNo: "",
    engineNo: "",
    modelName: ""
  })
  const [editHistoryIndex, setEditHistoryIndex] = useState()
  const [edithistory, setEditHistory] = useState({
    labourPartsCode: "",
    descLabourParts: "",
    billingType: "",
    qty: 1,
    uom: "",
    rate: 0,
    discount: 0
  })
  const [editModalshow, setEditModalShow] = useState(false)
  const handleEditModalClose = () => setEditModalShow(false)
  const handleEditModalShow = (hist, index) => {
    setEditHistory(hist)
    setEditHistoryIndex(index)
    setEditModalShow(true)
  }
  const handleEditHistory = () => {
    setAllHistory(allHistory.map((curentRow, index) => {
      if (index != editHistoryIndex) {
        return curentRow
      } else {
        return edithistory
      }
    }))
    success("Edited Succesfully")
    handleEditModalClose()
  }
  return (
    <div style={{ marginTop: "130px" }}>
      <Row style={{ margin: "auto" }} >
        <Col lg={6}>

          <Row style={{ margin: "auto" }}>
            <Col lg={5}>
              <div className='d-flex justify-content-between'>
                <h6>Invoice Date</h6>
                <h6>:</h6>
              </div>
            </Col>
            <Col lg={4} >
              <input className='bill-date' style={{ border: "0px", borderBottom: '1px solid white', backgroundColor: "transparent", color: "white", outline: "none" }} type="date" value={customerDetails.invoiceDate} onChange={e => setCustomerDetails({ ...customerDetails, invoiceDate: e.target.value })} />
            </Col>
          </Row>

          <Row style={{ margin: "auto" }} className='mt-2'>
            <Col lg={5}>
              <div className='d-flex justify-content-between'>
                <h6>Billed To</h6>
                <h6>:</h6>
              </div>
            </Col>
            <Col lg={6}>
              <textarea style={{ backgroundColor: "transparent", color: "white", padding: "5px", width: "100%" }} rows="6" value={customerDetails.billedAddress} onChange={e => setCustomerDetails({ ...customerDetails, billedAddress: e.target.value })}></textarea>
            </Col>
          </Row>

          <Row style={{ margin: "auto" }} className='mt-2'>
            <Col lg={5}>
              <div className='d-flex justify-content-between'>
                <h6>Mobile No.</h6>
                <h6>:</h6>
              </div>
            </Col>
            <Col lg={4}>
              <input style={{ border: "0px", borderBottom: '1px solid white', backgroundColor: "transparent", color: "white", outline: "none" }} type="text" value={customerDetails.mobNo} onChange={e => setCustomerDetails({ ...customerDetails, mobNo: e.target.value })} />
            </Col>
          </Row>

          <Row style={{ margin: "auto" }} className='mt-2'>
            <Col lg={5}>
              <div className='d-flex justify-content-between'>
                <h6>Technician Name</h6>
                <h6>:</h6>
              </div>
            </Col>
            <Col lg={4}>
              <input style={{ border: "0px", borderBottom: '1px solid white', backgroundColor: "transparent", color: "white", outline: "none" }} type="text" value={customerDetails.techName} onChange={e => setCustomerDetails({ ...customerDetails, techName: e.target.value })} />
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
              <input className='bill-date' style={{ border: "0px", borderBottom: '1px solid white', backgroundColor: "transparent", color: "white", outline: "none" }} type="date" max={customerDetails.invoiceDate} value={customerDetails.jobDate} onChange={e => setCustomerDetails({ ...customerDetails, jobDate: e.target.value })} />
            </Col>
          </Row>

          <Row style={{ margin: "auto" }} className='mt-2'>
            <Col lg={5}>
              <div className='d-flex justify-content-between'>
                <h6>Invoice Type</h6>
                <h6>:</h6>
              </div>
            </Col>
            <Col lg={4}>
              <select className='selection-input' name="modOfPayment" id="modOfPayment" required value={customerDetails.invoiceType} onChange={e => setCustomerDetails({ ...customerDetails, invoiceType: e.target.value })}>
                <option value="">Select</option>
                <option value="Credit">Credit</option>
                <option value="Debit">Debit</option>
              </select>
            </Col>
          </Row>

          <Row style={{ margin: "auto" }} className='mt-2'>
            <Col lg={5}>
              <div className='d-flex justify-content-between'>
                <h6>Repair Type</h6>
                <h6>:</h6>
              </div>
            </Col>
            <Col lg={4}>
              <select className='selection-input' name="modOfService" id="modOfService" required value={customerDetails.repairType} onChange={e => setCustomerDetails({ ...customerDetails, repairType: e.target.value })}>
                <option value="">Select</option>
                <option value="Periodic Service">Periodic Service</option>
                <option value="Body Polishing">Body Polishing</option>
                <option value="Mechanical Inspection">Mechanical Inspection</option>
                <option value="Any Further Complaints">Any Further Complaints</option>
                <option value="Accident Recovery">Accident Recovery</option>
              </select>
            </Col>
          </Row>

          <Row style={{ margin: "auto" }} className='mt-2'>
            <Col lg={5}>
              <div className='d-flex justify-content-between'>
                <h6>KM Reading</h6>
                <h6>:</h6>
              </div>
            </Col>
            <Col lg={4}>
              <input style={{ border: "0px", borderBottom: '1px solid white', backgroundColor: "transparent", color: "white", outline: "none" }} type="number" min={0} value={customerDetails.km} onChange={e => setCustomerDetails({ ...customerDetails, km: e.target.value })} />
            </Col>
          </Row>

          <Row style={{ margin: "auto" }} className='mt-2'>
            <Col lg={5}>
              <div className='d-flex justify-content-between'>
                <h6>Registration No.</h6>
                <h6>:</h6>
              </div>
            </Col>
            <Col lg={4}>
              <input style={{ border: "0px", borderBottom: '1px solid white', backgroundColor: "transparent", color: "white", outline: "none" }} type="text" value={customerDetails.registerNo} onChange={e => setCustomerDetails({ ...customerDetails, registerNo: e.target.value })} />
            </Col>
          </Row>

          <Row style={{ margin: "auto" }} className='mt-2'>
            <Col lg={5}>
              <div className='d-flex justify-content-between'>
                <h6>Chassis No.</h6>
                <h6>:</h6>
              </div>
            </Col>
            <Col lg={4}>
              <input style={{ border: "0px", borderBottom: '1px solid white', backgroundColor: "transparent", color: "white", outline: "none" }} type="text" value={customerDetails.chasisNo} onChange={e => setCustomerDetails({ ...customerDetails, chasisNo: e.target.value })} />
            </Col>
          </Row>

          <Row style={{ margin: "auto" }} className='mt-2'>
            <Col lg={5}>
              <div className='d-flex justify-content-between'>
                <h6>Engine No.</h6>
                <h6>:</h6>
              </div>
            </Col>
            <Col lg={4}>
              <input style={{ border: "0px", borderBottom: '1px solid white', backgroundColor: "transparent", color: "white", outline: "none" }} type="text" value={customerDetails.engineNo} onChange={e => setCustomerDetails({ ...customerDetails, engineNo: e.target.value })} />
            </Col>
          </Row>

          <Row style={{ margin: "auto" }} className='mt-2'>
            <Col lg={5}>
              <div className='d-flex justify-content-between'>
                <h6>Model Name</h6>
                <h6>:</h6>
              </div>
            </Col>
            <Col lg={4}>
              <input style={{ border: "0px", borderBottom: '1px solid white', backgroundColor: "transparent", color: "white", outline: "none" }} type="text" value={customerDetails.modelName} onChange={e => setCustomerDetails({ ...customerDetails, modelName: e.target.value })} />
            </Col>
          </Row>
        </Col>
      </Row>
      <div className='p-3'>
        <table id='service-details-table'>
          <thead>
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
              <th className='ps-2  text-center'>Total Amount</th>
              <th className='ps-2'>Edit</th>
              <th className='ps-2'>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              allHistory && allHistory?.map((hist, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{hist.labourPartsCode}</td>
                  <td>{hist.descLabourParts}</td>
                  <td>{hist.billingType}</td>
                  <td>{hist.qty}</td>
                  <td>{hist.uom}</td>
                  <td>{hist.rate}</td>
                  <td>{(hist.qty * hist.rate)}</td>
                  <td>{hist.discount}</td>
                  <td className='text-center'>{(hist.qty * hist.rate) - hist.discount}</td>
                  <td className='table-buttons'><i className="fa-solid fa-pen" onClick={() => handleEditModalShow(hist, index)}></i></td>
                  <td className='table-buttons'><i className="fa-solid fa-square-minus" onClick={e => handleDeleteHistory(index)}></i></td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      <div className='text-center'>
        <button className='add-button' onClick={handleShow}>Add</button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='d-flex justify-content-between'>
            <div className=''>
              <div className=''>
                <p style={{ marginBottom: "-1px" }}>Part/Labour Code</p>
                <input style={{ border: "0px", borderBottom: '1px solid white', backgroundColor: "transparent", color: "white", outline: "none" }} type="text" value={localHistory.labourPartsCode} onChange={e => setLocalHistory({ ...localHistory, labourPartsCode: e.target.value })} />
              </div>
              <div className='mt-3'>
                <p style={{ marginBottom: "-1px" }}>Desc. of Part/ Labour</p>
                <input style={{ border: "0px", borderBottom: '1px solid white', backgroundColor: "transparent", color: "white", outline: "none" }} type="text" value={localHistory.descLabourParts} onChange={e => setLocalHistory({ ...localHistory, descLabourParts: e.target.value })} />
              </div>
              <div className='mt-3'>
                <p style={{ marginBottom: "-1px" }}>Billing Type</p>
                <select className='selection-input' name="modOfPayment" id="modOfPayment" value={localHistory.billingType} onChange={e => setLocalHistory({ ...localHistory, billingType: e.target.value })} required>
                  <option value="">Select</option>
                  <option value="Paid">Paid</option>
                  <option value="Unpaid">Unpaid</option>
                </select>
              </div>
              <div className='mt-3'>
                <p style={{ marginBottom: "-1px" }}>Discount</p>
                <input className='number-without-arrows' style={{ border: "0px", borderBottom: '1px solid white', backgroundColor: "transparent", color: "white", outline: "none" }} type="number" min={0} value={localHistory.discount} onChange={e => setLocalHistory({ ...localHistory, discount: e.target.value })} />
              </div>
            </div>
            <div>
              <div>
                <p style={{ marginBottom: "-1px" }}>Quantity</p>
                <input style={{ border: "0px", borderBottom: '1px solid white', backgroundColor: "transparent", color: "white", outline: "none" }} type="number" min={1} value={localHistory.qty} onChange={e => setLocalHistory({ ...localHistory, qty: e.target.value })} />
              </div>
              <div className='mt-3'>
                <p style={{ marginBottom: "-1px" }}>UOM</p>
                <select className='selection-input' name="modOfPayment" id="modOfPayment" required value={localHistory.uom} onChange={e => setLocalHistory({ ...localHistory, uom: e.target.value })}>
                  <option value="">Select</option>
                  <option value="Each">Each</option>
                  <option value="Liter">Liter</option>
                  <option value="Unit">Unit</option>
                </select>
              </div>
              <div className='mt-3'>
                <p style={{ marginBottom: "-1px" }}>Rate</p>
                <input className='number-without-arrows' style={{ border: "0px", borderBottom: '1px solid white', backgroundColor: "transparent", color: "white", outline: "none" }} type="number" min={0} value={localHistory.rate==0 ? "" : localHistory.rate} onChange={e => setLocalHistory({ ...localHistory, rate: e.target.value })} />
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button className='modal-button' onClick={handleClose}>Cancel</button>
          <button className='modal-button-confirm' onClick={handleAddHistory}>Confirm</button>
        </Modal.Footer>
      </Modal>



      <Modal show={editModalshow} onHide={handleEditModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='d-flex justify-content-between'>
            <div className=''>
              <div className=''>
                <p style={{ marginBottom: "-1px" }}>Part/Labour Code</p>
                <input style={{ border: "0px", borderBottom: '1px solid white', backgroundColor: "transparent", color: "white", outline: "none" }} type="text" value={edithistory.labourPartsCode} onChange={e => setEditHistory({ ...edithistory, labourPartsCode: e.target.value })} />
              </div>
              <div className='mt-3'>
                <p style={{ marginBottom: "-1px" }}>Desc. of Part/ Labour</p>
                <input style={{ border: "0px", borderBottom: '1px solid white', backgroundColor: "transparent", color: "white", outline: "none" }} type="text" value={edithistory.descLabourParts} onChange={e => setEditHistory({ ...edithistory, descLabourParts: e.target.value })} />
              </div>
              <div className='mt-3'>
                <p style={{ marginBottom: "-1px" }}>Billing Type</p>
                <select className='selection-input' name="modOfPayment" id="modOfPayment" value={edithistory.billingType} onChange={e => setEditHistory({ ...edithistory, billingType: e.target.value })} required>
                  <option value="">Select</option>
                  <option value="Paid">Paid</option>
                  <option value="Unpaid">Unpaid</option>
                </select>
              </div>
              <div className='mt-3'>
                <p style={{ marginBottom: "-1px" }}>Discount</p>
                <input className='number-without-arrows' style={{ border: "0px", borderBottom: '1px solid white', backgroundColor: "transparent", color: "white", outline: "none" }} type="number" min={0} value={edithistory.discount} onChange={e => setEditHistory({ ...edithistory, discount: e.target.value })} />
              </div>
            </div>
            <div>
              <div>
                <p style={{ marginBottom: "-1px" }}>Quantity</p>
                <input style={{ border: "0px", borderBottom: '1px solid white', backgroundColor: "transparent", color: "white", outline: "none" }} type="number" min={1} value={edithistory.qty} onChange={e => setEditHistory({ ...edithistory, qty: e.target.value })} />
              </div>
              <div className='mt-3'>
                <p style={{ marginBottom: "-1px" }}>UOM</p>
                <select className='selection-input' name="modOfPayment" id="modOfPayment" required value={edithistory.uom} onChange={e => setEditHistory({ ...edithistory, uom: e.target.value })}>
                  <option value="">Select</option>
                  <option value="Each">Each</option>
                  <option value="Liter">Liter</option>
                  <option value="Unit">Unit</option>
                </select>
              </div>
              <div className='mt-3'>
                <p style={{ marginBottom: "-1px" }}>Rate</p>
                <input className='number-without-arrows' style={{ border: "0px", borderBottom: '1px solid white', backgroundColor: "transparent", color: "white", outline: "none" }} type="number" min={0} value={edithistory.rate} onChange={e => setEditHistory({ ...edithistory, rate: e.target.value })} />
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button className='modal-button' onClick={handleEditModalClose}>Cancel</button>
          <button className='modal-button-confirm' onClick={handleEditHistory}>Confirm</button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </div>
  )
}

export default ShopBill