import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Cleaning.css";

function Cleaning() {
  return (
    <div className="mb-5">
      <Row style={{ margin: "auto" }}>
        <Col className="cleaning-image" lg={6} sm={12}>
          <img
            src="https://demo.bravisthemes.com/promotors/wp-content/uploads/2022/08/service-bg-01.jpg"
            alt="cleaning"
          />
        </Col>
        <Col lg={6} sm={12}>
          <div className="w-100 cleaning-det px-5">
            <h3>CAR EXTERIOR CLEANING: BASIC DETAILING</h3>
            <Row className="mt-3">
              <Col lg={6} md={12}>
                <p>SAME DAY SERVICE</p>
              </Col>
              <Col lg={6} md={12}>
                <p>ONLINE APPOINTMENT</p>
              </Col>
            </Row>
            <Row>
              <Col lg={6} md={12}>
                <p>CONVENIENT LOCATION</p>
              </Col>
              <Col lg={6} md={12}>
                <p>COMPLIMENTARY SHUTTLE</p>
              </Col>
            </Row>
            <button>GET SERVICE</button>
          </div>
        </Col>
      </Row>

      <Row style={{ margin: "auto" }}>
        <Col lg={6} sm={12}>
          <div className="w-100 cleaning-det-left px-5">
            <h3>RUBBING, WAXING, AND POLISHING</h3>

            <p>
              Our technicians have undergone the most extensive and stringent car detail training program. And the only
              car that matters is yours because we will detail it to your complete satisfaction.
            </p>
            <button>GET SERVICE</button>
          </div>
        </Col>
        <Col style={{ padding: "0px" }} className="cleaning-image" lg={6} sm={12}>
          <img
            src="https://demo.bravisthemes.com/promotors/wp-content/uploads/2022/08/service-bg-02.jpg"
            alt="cleaning"
          />
        </Col>
      </Row>
    </div>
  );
}

export default Cleaning;
