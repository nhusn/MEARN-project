import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RequestServiceAPI, getAllHistoryAPI } from "../Services/allAPI";
import Cookies from "js-cookie";

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
    });
  };
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
  };
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
  };
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
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [availableCars, setAvailableCars] = useState([]);

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
    message: "",
  });

  const handleBookService = async (e) => {
    e.preventDefault();

    const { company, model, regNo, ModOfService, vehiclePickup, address } = bookService;
    if (!company || !model || !regNo || !ModOfService || !vehiclePickup || !address) {
      info("Please fill the form");
    } else {
      const result = await RequestServiceAPI(bookService);
      if (result.status == 200) {
        success(result.data);
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
          message: "",
        });
      } else {
        info("Please after some times");
      }
      // console.log(result);
    }
  };

  const getUserName = async () => {
    if (bookService.name === "") {
      const userDetails = JSON.parse(sessionStorage.getItem("existingUser"));
      const date = new Date().toLocaleDateString("sv-SE");
      setBookService({
        ...bookService,
        name: userDetails.name,
        email: userDetails.email,
        number: userDetails.mobno,
        date,
      });
    }
  };
  const [allHistory, setAllHistory] = useState([]);
  const getServiceHistory = async () => {
    const result = await getAllHistoryAPI(JSON.parse(sessionStorage.getItem("existingUser")).email);
    if (result.status === 200) {
      setAllHistory(result.data);
      // console.log(result.data);
    } else {
      console.log(result);
    }
  };

  const date = new Date().toLocaleDateString("sv-SE");
  const handleCampanyModel = () => {
    if (bookService.company == "Suzuki") {
      setAvailableCars([
        "Alto",
        "Baleno",
        "Celerio",
        "Ciaz",
        "Dzire",
        "Ertiga",
        "Ignis",
        "S-Cross",
        "Swift",
        "Vitara Brezza",
        "XL6",
        "Jimny",
        "Solio",
        "Every",
        "Lapin",
        "MR Wagon",
        "Wagon R",
        "Palette",
        "Swift Sport",
        "Grand Vitara",
        "SX4",
        "A-Star",
        "Kizashi",
        "Splash",
        "Fronte",
        "Swift",
        "Escudo",
        "Twin",
        "Carry",
        "Swift Hybrid",
        "Xbee",
        "Wagon R Hybrid",
        "Solio Bandit",
        "Hustler",
        "Spacia",
        "Jimny Sierra",
        "Wagon R Stingray",
        "MR Wagon",
        "Mighty Boy",
        "Carry Truck",
        "Alto Works",
      ]);
    } else if (bookService.company == "Ford") {
      setAvailableCars([
        "Fiesta",
        "Focus",
        "Fusion",
        "Taurus",
        "Mustang",
        "GT",
        "Escape",
        "Edge",
        "Flex",
        "Explorer",
        "Expedition",
        "Bronco",
        "Ranger",
        "F-150",
        "Super Duty",
        "Transit Connect",
        "Transit",
        "EcoSport",
        "Mondeo",
        "Ka+",
        "Puma",
        "Kuga",
        "Raptor",
        "Maverick",
        "E-Series",
        "Everest",
        "Endeavour",
        "Fusion Hybrid",
        "Fiesta ST",
        "Focus ST",
        "Edge ST",
        "Bronco Sport",
        "Transit Custom",
        "Transit Courier",
        "Tourneo Connect",
        "Tourneo Custom",
        "Mustang Mach-E",
        "GT",
        "Ranger Raptor",
        "Super Duty Tremor",
      ]);
    } else if (bookService.company == "Toyota") {
      setAvailableCars([
        "Fortuner",
        "Innova Crysta",
        "Glanza",
        "Yaris",
        "Urban Cruiser",
        "Camry",
        "Vellfire",
        "Land Cruiser",
        "GR Supra",
        "Toyota Glanza",
        "Toyota Urban Cruiser",
        "Toyota Yaris",
        "Toyota Innova Crysta",
        "Toyota Fortuner",
        "Toyota Camry",
        "Toyota Vellfire",
        "Toyota Land Cruiser",
        "Toyota Land Cruiser Prado",
        "Toyota GR Supra",
      ]);
    } else if (bookService.company == "Hyundai") {
      setAvailableCars([
        "Hyundai Santro",
        "Hyundai Grand i10 Nios",
        "Hyundai i20",
        "Hyundai Aura",
        "Hyundai Verna",
        "Hyundai Elantra",
        "Hyundai Venue",
        "Hyundai Creta",
        "Hyundai Alcazar",
        "Hyundai Tucson",
        "Hyundai Kona Electric",
        "Hyundai Palisade",
      ]);
    } else if (bookService.company == "Mahindra") {
      setAvailableCars([
        "Bolero",
        "Scorpio",
        "Thar",
        "XUV300",
        "XUV500",
        "TUV300",
        "KUV100 NXT",
        "Alturas G4",
        "Marazzo",
        "E-Verito",
        "eKUV100",
        "Bolero",
        "Scorpio",
        "Thar",
        "XUV300",
        "XUV500",
        "TUV300",
        "KUV100 NXT",
        "Alturas G4",
        "Marazzo",
        "Verito",
        "Verito Vibe",
        "eKUV100",
        "e2o Plus",
        "Xylo",
        "NuvoSport",
        "Quanto",
        "Jeeto",
        "Supro",
        "Maxximo",
        "Maxximo Mini Van",
        "Bolero Pik-Up",
      ]);
    } else if (bookService.company == "Tata") {
      setAvailableCars([
        "Tata Tiago",
        "Tata Tigor",
        "Tata Altroz",
        "Tata Nexon",
        "Tata Harrier",
        "Tata Safari",
        "Tata Punch",
        "Tata Nano", // Discontinued
        "Tata Indica", // Discontinued
        "Tata Indigo", // Discontinued
        "Tata Sumo", // Discontinued
        "Tata Safari Storme", // Discontinued
        "Tata Aria", // Discontinued
        "Tata Hexa", // Discontinued
        "Tata Zest",
        "Tata Bolt",
        "Tata Nexon EV",
        "Tata Tigor EV",
        "Tata Altroz EV", // Expected
        "Tata HBX", // Expected
        "Tata Gravitas", // Expected
      ]);
    } else if (bookService.company == "Volkswaon") {
      setAvailableCars([
        "Volkswagen Polo",
        "Volkswagen Vento",
        "Volkswagen Taigun",
        "Volkswagen Tiguan Allspace",
        "Volkswagen T-Roc",
        "Volkswagen Passat",
        "Volkswagen Ameo",
        "Volkswagen Jetta",
        "Volkswagen Beetle",
      ]);
    } else if (bookService.company == "Scoda") {
      setAvailableCars(["Škoda Octavia", "Škoda Rapid", "Škoda Superb", "Škoda Kushaq", "Škoda Kodiaq"]);
    } else if (bookService.company == "Volvo") {
      setAvailableCars([
        "Volkswagen Polo",
        "Volkswagen Vento",
        "Volkswagen Taigun",
        "Volkswagen Tiguan Allspace",
        "Volkswagen T-Roc",
        "Volkswagen Passat",
        "Volkswagen Ameo", // Discontinued
        "Volkswagen Jetta", // Discontinued
        "Volkswagen Beetle", // Discontinued
      ]);
    } else if (bookService.company == "Benz") {
      setAvailableCars([
        "Mercedes-Benz A-Class",
        "Mercedes-Benz B-Class",
        "Mercedes-Benz C-Class",
        "Mercedes-Benz CLA",
        "Mercedes-Benz CLS",
        "Mercedes-Benz E-Class",
        "Mercedes-Benz S-Class",
        "Mercedes-Benz GLA",
        "Mercedes-Benz GLB",
        "Mercedes-Benz GLC",
        "Mercedes-Benz GLE",
        "Mercedes-Benz GLS",
        "Mercedes-Benz G-Class",
        "Mercedes-Benz EQC",
        "Mercedes-Benz SLK",
        "Mercedes-Benz SL",
        "Mercedes-Benz SLC",
        "Mercedes-Benz CL",
        "Mercedes-Benz CLK",
        "Mercedes-Benz SLR McLaren",
        "Mercedes-Benz AMG GT",
        "Mercedes-Benz Maybach S-Class",
        "Mercedes-Benz V-Class",
      ]);
    } else if (bookService.company == "Bmv") {
      setAvailableCars([
        "BMW 1 Series",
        "BMW 2 Series",
        "BMW 3 Series",
        "BMW 5 Series",
        "BMW 6 Series",
        "BMW 7 Series",
        "BMW X1",
        "BMW X2",
        "BMW X3",
        "BMW X4",
        "BMW X5",
        "BMW X6",
        "BMW X7",
        "BMW Z4",
        "BMW M2",
        "BMW M3",
        "BMW M4",
        "BMW M5",
        "BMW M8",
        "BMW 1 Series",
        "BMW 2 Series",
        "BMW 3 Series",
        "BMW 4 Series",
        "BMW 5 Series",
        "BMW 6 Series",
        "BMW 7 Series",
        "BMW 8 Series",
        "BMW X1",
        "BMW X2",
        "BMW X3",
        "BMW X4",
        "BMW X5",
        "BMW X6",
        "BMW X7",
        "BMW Z4",
        "BMW i3",
        "BMW i8",
        "BMW M2",
        "BMW M3",
        "BMW M4",
        "BMW M5",
        "BMW M6",
        "BMW M8",
        "BMW X3 M",
        "BMW X4 M",
        "BMW X5 M",
        "BMW X6 M",
        "BMW Alpina B7",
        "BMW Alpina B8",
      ]);
    } else if (bookService.company == "Porsche") {
      setAvailableCars([
        "Porsche 718 Cayman",
        "Porsche 718 Boxster",
        "Porsche 911 Carrera",
        "Porsche 911 Turbo",
        "Porsche Panamera",
        "Porsche Macan",
        "Porsche Cayenne",
        "Porsche Taycan",
      ]);
    } else if (bookService.company == "Nissan") {
      setAvailableCars(["Nissan Micra", "Nissan Sunny", "Nissan Kicks", "Nissan Terrano", "Nissan Magnite"]);
    } else if (bookService.company == "Kia") {
      setAvailableCars([
        "Kia Seltos",
        "Kia Carnival",
        "Kia Sonet",
        "Kia Carens", // Expected
      ]);
    } else if (bookService.company == "MG") {
      setAvailableCars(["MG Hector", "MG Hector Plus", "MG ZS EV", "MG Gloster", "MG Astor"]);
    } else if (bookService.company == "BYD") {
      setAvailableCars(["BYD seal", "BYD Atto 3", "BYD E6"]);
    } else if (bookService.company == "Renoult") {
      setAvailableCars([
        "Renault Kwid",
        "Renault Triber",
        "Renault Duster",
        "Renault Captur",
        "Renault Fluence", // Discontinued
        "Renault Pulse", // Discontinued
        "Renault Scala", // Discontinued
        "Renault Lodgy", // Discontinued
      ]);
    } else if (bookService.company == "Land Rover") {
      setAvailableCars([
        "Land Rover Defender",
        "Land Rover Discovery",
        "Land Rover Discovery Sport",
        "Land Rover Range Rover",
        "Land Rover Range Rover Sport",
        "Land Rover Range Rover Velar",
        "Land Rover Range Rover Evoque",
        "Land Rover Range Rover Evoque Convertible",
      ]);
    } else if (bookService.company == "Jaguar") {
      setAvailableCars([
        "Jaguar XE",
        "Jaguar XF",
        "Jaguar XJ",
        "Jaguar F-Type",
        "Jaguar E-Pace",
        "Jaguar F-Pace",
        "Jaguar I-Pace",
      ]);
    } else if (bookService.company == "Buggati") {
      setAvailableCars(["Bugatti Veyron", "Bugatti Chiron", "Bugatti Divo", "Bugatti La Voiture Noire"]);
    } else if (bookService.company == "Rolls-Royce") {
      setAvailableCars([
        "Rolls-Royce Ghost",
        "Rolls-Royce Phantom",
        "Rolls-Royce Wraith",
        "Rolls-Royce Dawn",
        "Rolls-Royce Cullinan",
      ]);
    } else if (bookService.company == "Jeep") {
      setAvailableCars([
        "Jeep Compass",
        "Jeep Wrangler",
        "Jeep Grand Cherokee",
        "Jeep Grand Cherokee SRT",
        "Jeep Grand Cherokee Trackhawk",
        "Jeep Gladiator",
      ]);
    } else if (bookService.company == "Isuzu") {
      setAvailableCars(["Isuzu D-Max Regular Cab", "Isuzu D-Max S-Cab", "Isuzu D-Max V-Cross"]);
    } else if (bookService.company == "Lexus") {
      setAvailableCars(["Lexus ES", "Lexus LS", "Lexus LX", "Lexus RX", "Lexus NX", "Lexus UX"]);
    } else if (bookService.company == "Audi") {
      setAvailableCars([
        "Audi A3",
        "Audi A4",
        "Audi A6",
        "Audi A8",
        "Audi Q2",
        "Audi Q3",
        "Audi Q5",
        "Audi Q7",
        "Audi Q8",
        "Audi e-tron",
        "Audi e-tron GT",
        "Audi TT",
        "Audi RS Q8",
        "Audi RS7",
        "Audi RS5",
        "Audi RS4",
        "Audi RS3",
        "Audi S8",
        "Audi S7",
        "Audi S6",
        "Audi S5",
        "Audi S4",
        "Audi S3",
        "Audi R8",
      ]);
    } else if (bookService.company == "Mini") {
      setAvailableCars([
        "Mini Cooper 3-door",
        "Mini Cooper 5-door",
        "Mini Clubman",
        "Mini Countryman",
        "Mini Convertible",
        "Mini John Cooper Works",
      ]);
    } else if (bookService.company == "Force") {
      setAvailableCars([
        "Force Gurkha",
        "Force Trax Cruiser",
        "Force Trax Toofan",
        "Force Trax Kargo King",
        "Force Trax Delivery Van",
        "Force Traveller",
      ]);
    } else if (bookService.company == "Datsun") {
      setAvailableCars(["Datsun GO", "Datsun GO+"]);
    } else if (bookService.company == "Fiat") {
      setAvailableCars([
        "Fiat Linea",
        "Fiat Punto",
        "Fiat Avventura",
        "Fiat Urban Cross",
        "Fiat Abarth Punto",
        "Fiat Abarth Avventura",
      ]);
    } else if (bookService.company == "other") {
    } else {
      setAvailableCars([]);
    }
  };
  useEffect(() => {
    getUserName();
    getServiceHistory();
  }, []);
  // console.log(bookService);
  return (
    <div>
      {/* Service Form Heading*/}
      <Row style={{ margin: "auto", color: "white" }} className="px-5">
        <Col lg={7}>
          <h3 style={{ marginTop: "70px" }}>BOOK YOUR SERVICE</h3>
          <p style={{ fontSize: "18px" }}>
            After you submit the form, a representative will call you to confirm the service
          </p>
        </Col>
        <Col></Col>
      </Row>

      {/* Service Form */}
      <Row style={{ margin: "auto" }} className="px-5 my-5">
        <Col lg={6}>
          <h5>Vehicle Details</h5>
          <div className="vehicle-info">
            <label htmlFor="company">COMPANY</label>
            <br />
            <input
              type="text"
              name="uname"
              placeholder="Enter Vehicle Company"
              value={bookService.company}
              onChange={(e) => setBookService({ ...bookService, company: e.target.value })}
              list="vehicleCompanies"
              required
            />
            <div className="veh-form-underline"></div>
            <datalist id="vehicleCompanies">
              <option value="Ford">Ford</option>
              <option value="Suzuki">Suzuki</option>
              <option value="Toyota">Toyota</option>
              <option value="Hyundai">Hyundai</option>
              <option value="Mahindra">Mahindra</option>
              <option value="Tata">Tata</option>
              <option value="Volkswaon">Volkswagon</option>
              <option value="Scoda">Scoda</option>
              <option value="Volvo">Volvo</option>
              <option value="Benz">Benz</option>
              <option value="Bmv">Bmv</option>
              <option value="Porche">Porsche</option>
              <option value="Nissan">Nissan</option>
              <option value="Kia">Kia</option>
              <option value="MG">MG</option>
              <option value="BYD">BYD</option>
              <option value="Renoult">Renoult</option>
              <option value="Land Rover">land Rover</option>
              <option value="Jaguar">Jaguar</option>
              <option value="Buggati">Buggati</option>
              <option value="Rolls-Royce"></option>
              <option value="Jeep">Jeep</option>
              <option value="Isuzu">Isuzu</option>
              <option value="Lexus">Lexus</option>
              <option value="Audi">Audi</option>
              <option value="Mini">Mini</option>
              <option value="Force">Force</option>
              <option value="Datsun">Datsun</option>
              <option value="Fiat">Fiat</option>
              <option value="other">Other</option>
            </datalist>
          </div>
          <div className="vehicle-info mt-3">
            <label htmlFor="model">MODEL NAME</label>
            <br />
            <input
              type="text"
              name="uname"
              placeholder="Enter Model Name"
              value={bookService.model}
              list="modelNames"
              onChange={(e) => setBookService({ ...bookService, model: e.target.value })}
              onClick={handleCampanyModel}
              required
            />
            <div className="veh-form-underline"></div>
            <datalist id="modelNames">
              {availableCars &&
                availableCars.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
            </datalist>
          </div>
          <div className="vehicle-info mt-3">
            <label htmlFor="regNo">REGISTRATION NUMBER</label>
            <br />
            <input
              type="text"
              name="uname"
              placeholder="eg:KL10AB1234"
              value={bookService.regNo}
              onChange={(e) => setBookService({ ...bookService, regNo: e.target.value.toUpperCase() })}
              required
            />
            <div className="veh-form-underline"></div>
          </div>

          <h5 className="mt-4">Mode Of Service</h5>
          <div className="vehicle-info">
            <select
              name="modOfService"
              id="modOfService"
              value={bookService.ModOfService}
              onChange={(e) => setBookService({ ...bookService, ModOfService: e.target.value })}
              required
            >
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
          <h5 className="mt-4">Vehicle Pickup</h5>
          <div className="vehicle-info mt-3">
            <select
              name="pickup"
              id="modOfService"
              value={bookService.vehiclePickup}
              onChange={(e) => setBookService({ ...bookService, vehiclePickup: e.target.value })}
              required
            >
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
            <div className="veh-form-underline"></div>
          </div>
          <div className="vehicle-info mt-3">
            <label>Address (for billing)</label>
            <br />
            <textarea
              style={{
                backgroundColor: "transparent",
                color: "white",
                padding: "5px",
                width: "100%",
                border: "0px",
                outline: "0px",
              }}
              rows="2"
              value={bookService.address}
              onChange={(e) => setBookService({ ...bookService, address: e.target.value })}
              required
            ></textarea>
            <div className="veh-form-underline"></div>
          </div>

          <div className="vehicle-info mt-3">
            <label>any words (about complaint)</label>
            <br />
            <textarea
              style={{
                backgroundColor: "transparent",
                color: "white",
                padding: "5px",
                width: "100%",
                border: "0px",
                outline: "0px",
              }}
              rows="2"
              value={bookService.message}
              onChange={(e) => setBookService({ ...bookService, message: e.target.value })}
              required
            ></textarea>
            <div className="veh-form-underline"></div>
          </div>
        </Col>
        <div className="text-center mt-5">
          <button onClick={(e) => handleBookService(e)} className="service-button">
            Book Service
          </button>
        </div>
      </Row>

      <Row style={{ margin: "auto" }}>
        {/* Service History */}
        <Col lg={8} className="service-history">
          <div className="serv-history-group ms-3">
            <div className="serv-history-title">
              <h5>Service History</h5>
            </div>
            <table id="service-history-table">
              <thead>
                <tr>
                  <th className="ps-2">#</th>
                  <th className="ps-2">Date</th>
                  <th className="ps-2">Type</th>
                  <th className="ps-2">Vehicle</th>
                  <th className="ps-2">Amount</th>
                  <th className="ps-">View</th>
                </tr>
              </thead>
              <tbody>
                {allHistory &&
                  allHistory.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.customerDetails.invoiceDate}</td>
                      <td>{item.customerDetails.repairType}</td>
                      <td>{item.customerDetails.modelName}</td>
                      <td>{item.customerDetails.totalAmount}</td>
                      <td>
                        <Link style={{ textDecoration: "none", color: "white" }} to={`/view/${item._id}`}>
                          <i className="fa-solid fa-eye ps-"></i>
                        </Link>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </Col>

        {/* Service Ongoing */}
        <Col lg={4} className="px-5">
          <div className="ong-serv-group">
            <div className="ong-service-title">
              <h5>Track Your Service</h5>
            </div>
            <div className=" ong-service">
              <div className="d-flex justify-content-between">
                <h6>Book Service</h6>
                <i style={{ color: "#ff5e00" }} className="fa-solid fa-circle-check"></i>
              </div>
              <i className="fa-solid fa-arrow-down-long"></i>
              <div className="d-flex justify-content-between">
                <h6>Vehicle Pickup</h6>
                <i style={{ color: "#ff5e00" }} className="fa-solid fa-circle-check"></i>
              </div>
              <i className="fa-solid fa-arrow-down-long"></i>
              <div className="d-flex justify-content-between">
                <h6>Inspection</h6>
                <i className="fa-regular fa-circle"></i>
              </div>
              <i className="fa-solid fa-arrow-down-long"></i>
              <div className="d-flex justify-content-between">
                <h6 style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }} onClick={handleShow}>
                  Complaint Details
                </h6>
                <i className="fa-regular fa-circle"></i>
              </div>
              <i className="fa-solid fa-arrow-down-long"></i>
              <div className="d-flex justify-content-between">
                <h6>Service Done</h6>
                <i className="fa-regular fa-circle"></i>
              </div>
              <i className="fa-solid fa-arrow-down-long"></i>
              <div className="d-flex justify-content-between">
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
          <button className="modal-button" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </div>
  );
}

export default Dashboard;
