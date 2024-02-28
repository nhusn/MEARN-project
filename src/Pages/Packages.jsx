import React, { useEffect } from "react";
import "./Package.css";
import { Link } from "react-router-dom";
import Plans from "../Components/Plans";
import { Col, Row } from "react-bootstrap";
import Footer from "../Components/Footer";

function Packages() {
  return (
    <div style={{ paddingTop: "100px" }}>
      <div className="service-banner">
        <div className="d-flex">
          <Link style={{ textDecoration: "none", color: "white" }} to={"/"}>
            HOME
          </Link>
          <h6 style={{ color: "#d16527" }} className="ms-3 nav-serv">
            Packages
          </h6>
        </div>
        <h1>PACKAGES</h1>
      </div>
      <div>
        <Plans />
      </div>
      <Row style={{ margin: "auto" }} className="Price-book">
        <Col lg={8}>
          <div>
            <div className="price-book-hover">
              <h3>SPECIALIZING IN WHAT YOU NEED</h3>
              <h1>BOOK SERVICE</h1>
            </div>
            <p>
              Our team understands that cars need extra special care and attention to perform at their peak on the road,
              and we’ve got the tools and parts to make this happen.
            </p>
            <button>BOOK SERVICE NOW</button>
          </div>
        </Col>
        <Col lg={4}></Col>
      </Row>

      <Footer />
    </div>
  );
}

export default Packages;
