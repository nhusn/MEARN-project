import React from "react";
import { Col, Row } from "react-bootstrap";
import Car from "../Asset/CarPng.png";
import light from "../Asset/Light.png";
import "./Home.css";
import Plans from "../Components/Plans";
import Cleaning from "../Components/Cleaning";
import HTService from "../Components/HTService";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="home-page">
        <Row style={{ margin: "auto" }}>
          <Col lg={6} sm={12} className="banner flex-colum">
            <div className="home-page-title">
              <h1>
                {" "}
                MAINTENANCE & <br /> REPAIR SERVICE
              </h1>
              <p>
                Lenmotors is one of the leading units specialising in a vehicle service and maintenance through
                kerala.Need a vehicle service at home , this will be a useful choice
              </p>
              <Link to={"/login"}>
                <button>GET SERVICE</button>
              </Link>
            </div>
          </Col>
          <Col lg={6} sm={12} className="bannerImageCol">
            <div className="bannerImgg">
              <img className="img-fluid CarImg" src={Car} alt="banner image" />

              <div className="headlights">
                <img className="img-fluid" src={light} alt="" />
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <div>
        <Row style={{ margin: "auto" }} className="justify-content-around history">
          <Col lg={3} md={6} sm={6} xs={6} className="experience">
            <h1>2+ </h1>
            <div className="hori-line"></div>
            <p className="">More than 2 years of operation in the field of Car service</p>
          </Col>
          <Col lg={3} md={6} sm={6} xs={6} className="experience">
            <h1>22K+ </h1>
            <div className="hori-line"></div>
            <p className="">International standard process and large factory system</p>
          </Col>
          <Col lg={3} md={6} sm={6} xs={6} className="experience">
            <h1>100+</h1>
            <div className="hori-line"></div>
            <p className="">Employees in the whole system include many leading engineers</p>
          </Col>
          <Col lg={3} md={6} sm={6} xs={6} className="experience">
            <h1>99%</h1>
            <div className="hori-line"></div>
            <p className="">Service technology to satisfy customers needs and interests</p>
          </Col>
        </Row>

        <div className="Our-server-button d-flex justify-content-between align-items-center p-5 flex-wrap">
          <h1>OUR SERVICES</h1>
          <Link to={"/login"}>
            <button>ALL SERVICES</button>
          </Link>
        </div>

        <Row style={{ margin: "auto" }} className="p-5">
          <Col lg={4} md={4} sm={6} xs={12} className="service-details">
            <div className="horiz-line"></div>
            <i style={{ fontSize: "50px" }} className="fa-solid fa-screwdriver-wrench"></i>
            <h4 className="mt-5">BRAKE REPAIR</h4>
            <p>
              You get used to your brakes. Brake pads and rotors wear out from the immense friction and heat they
              encounter. Air gets into brake lines.…
            </p>
            <div className="sliding-button">
              <button>
                <i style={{ fontSize: "10px", color: "white" }} className="fa-solid fa-angle-right"></i>
              </button>{" "}
              <Link style={{ textDecoration: "none", color: "grey" }} to={"/service"}>
                <p className="mt-3">DETAILS_SERVICE</p>
              </Link>
            </div>
          </Col>
          <Col lg={4} md={4} sm={6} xs={12} className="service-details">
            <div className="horiz-line"></div>
            <i style={{ fontSize: "50px" }} className="fa-solid fa-toolbox"></i>
            <h4 className="mt-5">ENGINE REPAIR</h4>
            <p>
              The check engine usually indicates a need to replace one or more parts of your engine or exhaust system:
              the oxygen sensor, catalytic converter, mass…
            </p>
            <div className="sliding-button">
              <button>
                <i style={{ fontSize: "10px", color: "white" }} className="fa-solid fa-angle-right"></i>
              </button>{" "}
              <Link style={{ textDecoration: "none", color: "grey" }} to={"/service"}>
                <p className="mt-3">DETAILS_SERVICE</p>
              </Link>
            </div>
          </Col>
          <Col lg={4} md={4} sm={6} xs={12} className="service-details">
            <div className="horiz-line"></div>
            <i style={{ fontSize: "50px" }} className="fa-solid fa-person-biking"></i>
            <h4 className="mt-5">TIRE REPAIR</h4>
            <p>
              You need new tires, and you have questions. What type of tire do I really need? What do terms like
              “all-season” and “all-terrain” really mean?…
            </p>
            <div className="sliding-button">
              <button>
                <i style={{ fontSize: "10px", color: "white" }} className="fa-solid fa-angle-right"></i>
              </button>
              <Link style={{ textDecoration: "none", color: "grey" }} to={"/service"}>
                <p className="mt-3">DETAILS_SERVICE</p>
              </Link>
            </div>
          </Col>
        </Row>

        <Row style={{ margin: "auto" }} className="p-5">
          <Col lg={4} md={4} sm={6} xs={12} className="service-details">
            <div className="horiz-line"></div>
            <i style={{ fontSize: "50px" }} className="fa-solid fa-temperature-low"></i>
            <h4 className="mt-5">COOLING SYSTEM</h4>
            <p>
              An overheated engine that leaves you stranded on the side of the road is a hassle. But overheating is one
              of many signs of trouble…
            </p>
            <div className="sliding-button">
              <button>
                <i style={{ fontSize: "10px", color: "white" }} className="fa-solid fa-angle-right"></i>
              </button>{" "}
              <Link style={{ textDecoration: "none", color: "grey" }} to={"/service"}>
                <p className="mt-3">DETAILS_SERVICE</p>
              </Link>
            </div>
          </Col>
          <Col lg={4} md={4} sm={6} xs={12} className="service-details">
            <div className="horiz-line"></div>
            <i style={{ fontSize: "50px" }} className="fa-solid fa-car-battery"></i>
            <h4 className="mt-5">BATTERY REPAIR</h4>
            <p>
              Your vehicle just won’t start. You turn on the ignition, and all you get is the telltale clicking noise.
              Possibly followed by competing pronouncements of…
            </p>
            <div className="sliding-button">
              <button>
                <i style={{ fontSize: "10px", color: "white" }} className="fa-solid fa-angle-right"></i>
              </button>{" "}
              <Link style={{ textDecoration: "none", color: "grey" }} to={"/service"}>
                <p className="mt-3">DETAILS_SERVICE</p>
              </Link>
            </div>
          </Col>
          <Col lg={4} md={4} sm={6} xs={12} className="service-details">
            <div className="horiz-line"></div>
            <i style={{ fontSize: "50px" }} className="fa-solid fa-drum-steelpan"></i>
            <h4 className="mt-5">STEERING REPAIR</h4>
            <p>
              Your steering and suspension systems work together to keep your tires on the pavement and your vehicle
              under control – until a power steering problem…
            </p>
            <div className="sliding-button">
              <button>
                <i style={{ fontSize: "10px", color: "white" }} className="fa-solid fa-angle-right"></i>
              </button>
              <Link style={{ textDecoration: "none", color: "grey" }} to={"/service"}>
                <p className="mt-3">DETAILS_SERVICE</p>
              </Link>
            </div>
          </Col>
        </Row>
        <hr />
        <Plans />

        <Cleaning />

        <HTService />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
