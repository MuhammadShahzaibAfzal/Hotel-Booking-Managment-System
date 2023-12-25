import React from "react";
import roomImage from "../../assets/slider1.png";
import { Button } from "react-bootstrap";

const HorizantalRoomCard = () => {
  return (
    <div className="p-3 shadow rounded d-flex flex-column flex-md-row mb-2 gap-3">
      <div className="col-md-4">
        <img
          src={roomImage}
          className="w-100"
          style={{ height: "180px" }}
          alt=""
        />
      </div>
      <div className="col-md-4">
        <h3>Simple Room Name</h3>
        <h5>Features</h5>
        <span className="badge rounded-pill text-bg-light">1 washrooms</span>
        <span className="badge rounded-pill text-bg-light ">1 Balcorny</span>
        <span className="badge rounded-pill text-bg-light ">1 Balcorny</span>
        <span className="badge rounded-pill text-bg-light ">1 Balcorny</span>
        <span className="badge rounded-pill text-bg-light ">3 Sofas</span>
        <h5>Facilities</h5>
        <span className="badge rounded-pill text-bg-light">1 washrooms</span>
        <span className="badge rounded-pill text-bg-light ">1 Balcorny</span>
        <span className="badge rounded-pill text-bg-light ">1 Balcorny</span>
        <span className="badge rounded-pill text-bg-light ">1 Balcorny</span>
        <span className="badge rounded-pill text-bg-light ">3 Sofas</span>
      </div>
      <div className="col-md-4 pe-5">
        <h6>RS : 2000 Rupees per night</h6>
        <div className="d-flex flex-column gap-3">
          <Button variant="dark">Book Now</Button>
          <Button variant="outline-dark">More Details</Button>
        </div>
      </div>
    </div>
  );
};

export default HorizantalRoomCard;
