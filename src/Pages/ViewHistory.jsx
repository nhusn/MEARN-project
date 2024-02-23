import React, { useEffect, useState } from "react";
import "./ViewHistory.css";
import { Col, Row } from "react-bootstrap";
import logo from "../Asset/Logo_LenMotors.png";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useParams } from "react-router-dom";
import { getOneHistoryAPI } from "../Services/allAPI";

function ViewHistory() {
  // this is for pdf download
  const [loader, setLoader] = useState(false);
  const downloadPDF = () => {
    const capture = document.querySelector(".full-history-div");
    setLoader(true);
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const doc = new jsPDF("l", "mm");
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight - 5);
      setLoader(false);
      doc.save("invoice.pdf");
    });
  };

  const [historyDetail, setHistoryDetail] = useState();
  const { id } = useParams();
  const getHistory = async () => {
    const result = await getOneHistoryAPI(id);
    if (result.status === 200) {
      setHistoryDetail(result.data);
      console.log(result.data);
    } else {
      console.log(result);
    }
  };
  useEffect(() => {
    getHistory();
  }, []);

  return (
    <div id="view-history" className="">
      {historyDetail && (
        <div className="full-history-div p-4">
          <Row style={{ margin: "auto" }}>
            <Col lg={4}>
              <h5>Branch Address :</h5>
              <h6>LEN MOTORS PVT LTD - KAKKAND</h6>
              <h6>Kerala,seaport-airport road Kakanad,Thrikkakara,Ernakulam </h6>
              <h6>9876543219,9812354670</h6>
            </Col>
            <Col lg={4}></Col>
            <Col lg={4}>
              <div style={{ textAlign: "right" }}>
                <img src={logo} alt="logo" className="img-fluid w-50 mx-auto" />
              </div>
            </Col>
          </Row>

          <div>
            <h4 className="text-center mt-5">TAX INVOICE</h4>
            <h6 className="ms-5">GSTIN:32AAFCK2789E1ZO</h6>
            <hr style={{ color: "white", opacity: ".7" }} />
          </div>
          <Row style={{ margin: "auto" }}>
            <Col lg={6}>
              <Row style={{ margin: "auto" }}>
                <Col lg={5}>
                  <div className="d-flex justify-content-between">
                    <h6>Invoice Date</h6>
                    <h6>:</h6>
                  </div>
                </Col>
                <Col lg={4}>
                  <h6>{historyDetail.customerDetails.invoiceDate}</h6>
                </Col>
              </Row>

              <Row style={{ margin: "auto" }}>
                <Col lg={5}>
                  <div className="d-flex justify-content-between">
                    <h6>Billed To</h6>
                    <h6>:</h6>
                  </div>
                </Col>
                <Col lg={4}>
                  <h6>{historyDetail.customerDetails.billedAddress}</h6>
                </Col>
              </Row>

              <Row style={{ margin: "auto" }}>
                <Col lg={5}>
                  <div className="d-flex justify-content-between">
                    <h6>Mobile No.</h6>
                    <h6>:</h6>
                  </div>
                </Col>
                <Col lg={4}>
                  <h6>{historyDetail.customerDetails.mobNo}</h6>
                </Col>
              </Row>

              <Row style={{ margin: "auto" }}>
                <Col lg={5}>
                  <div className="d-flex justify-content-between">
                    <h6>Technician Name</h6>
                    <h6>:</h6>
                  </div>
                </Col>
                <Col lg={4}>
                  <h6>{historyDetail.customerDetails.techName}</h6>
                </Col>
              </Row>
            </Col>
            <Col lg={6}>
              <Row style={{ margin: "auto" }}>
                <Col lg={5}>
                  <div className="d-flex justify-content-between">
                    <h6>Jobcard Date</h6>
                    <h6>:</h6>
                  </div>
                </Col>
                <Col lg={4}>
                  <h6>{historyDetail.customerDetails.jobDate}</h6>
                </Col>
              </Row>

              <Row style={{ margin: "auto" }}>
                <Col lg={5}>
                  <div className="d-flex justify-content-between">
                    <h6>Invoice Type</h6>
                    <h6>:</h6>
                  </div>
                </Col>
                <Col lg={4}>
                  <h6>{historyDetail.customerDetails.invoiceType}</h6>
                </Col>
              </Row>

              <Row style={{ margin: "auto" }}>
                <Col lg={5}>
                  <div className="d-flex justify-content-between">
                    <h6>Repair Type</h6>
                    <h6>:</h6>
                  </div>
                </Col>
                <Col lg={4}>
                  <h6>{historyDetail.customerDetails.repairType}</h6>
                </Col>
              </Row>

              <Row style={{ margin: "auto" }}>
                <Col lg={5}>
                  <div className="d-flex justify-content-between">
                    <h6>KM Reading</h6>
                    <h6>:</h6>
                  </div>
                </Col>
                <Col lg={4}>
                  <h6>{historyDetail.customerDetails.km}</h6>
                </Col>
              </Row>

              <Row style={{ margin: "auto" }}>
                <Col lg={5}>
                  <div className="d-flex justify-content-between">
                    <h6>Registration No.</h6>
                    <h6>:</h6>
                  </div>
                </Col>
                <Col lg={4}>
                  <h6>{historyDetail.customerDetails.registerNo}</h6>
                </Col>
              </Row>

              <Row style={{ margin: "auto" }}>
                <Col lg={5}>
                  <div className="d-flex justify-content-between">
                    <h6>Chassis No.</h6>
                    <h6>:</h6>
                  </div>
                </Col>
                <Col lg={4}>
                  <h6>{historyDetail.customerDetails.chasisNo}</h6>
                </Col>
              </Row>

              <Row style={{ margin: "auto" }}>
                <Col lg={5}>
                  <div className="d-flex justify-content-between">
                    <h6>Engine No.</h6>
                    <h6>:</h6>
                  </div>
                </Col>
                <Col lg={4}>
                  <h6>{historyDetail.customerDetails.engineNo}</h6>
                </Col>
              </Row>

              <Row style={{ margin: "auto" }}>
                <Col lg={5}>
                  <div className="d-flex justify-content-between">
                    <h6>Model Name</h6>
                    <h6>:</h6>
                  </div>
                </Col>
                <Col lg={4}>
                  <h6>{historyDetail.customerDetails.modelName}</h6>
                </Col>
              </Row>
            </Col>
          </Row>

          <table id="service-details-table">
            <tr>
              <th className="ps-2">S No</th>
              <th className="ps-2">Part / Labour</th>
              <th className="ps-2">Desc. of Part/ Labour</th>
              <th className="ps-2">Billing Type</th>
              <th className="ps-2">Qty</th>
              <th className="ps-2">UOM</th>
              <th className="ps-2">Rate</th>
              <th className="ps-2">Total Value</th>
              <th className="ps-2">Discount</th>
              <th className="ps-2 w-25 text-center">Total Amount</th>
            </tr>
            {historyDetail &&
              historyDetail.partsDetails.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.labourPartsCode}</td>
                  <td>{item.descLabourParts}</td>
                  <td>{item.billingType}</td>
                  <td>{item.qty}</td>
                  <td>{item.uom}</td>
                  <td>{item.rate}</td>
                  <td>{item.qty * item.rate}</td>
                  <td>{item.discount}</td>
                  <td className="text-center">{item.qty * item.rate - item.discount}</td>
                </tr>
              ))}
          </table>

          {/* Total Amount */}
          <div className="text-center mt-5">
            <h5>Net Amount : {historyDetail.customerDetails.totalAmount}</h5>
          </div>

          <div className="text-center mt-5">
            <h5>Get your vehicle serviced at regular intervels</h5>
            <h5>Next due date for service is 19-12-2022</h5>
            <h6>Thank You & Happy Riding</h6>
          </div>
        </div>
      )}
      <div className="pdf-dwnld-btn text-center">
        <button disabled={loader} onClick={downloadPDF}>
          {loader ? <span>Downloading</span> : <span>Download</span>}
        </button>
      </div>
    </div>
  );
}

export default ViewHistory;
