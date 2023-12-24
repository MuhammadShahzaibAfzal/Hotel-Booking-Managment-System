import React from "react";
import slider1 from "../../assets/slider1.png";

const RoomCard = () => {
  return (
    <div className="card shadow-lg rounded border-0 col-md-4 col-lg-3 p-0">
      <img src={slider1} className="card-img-top" alt="..." height="160px" />
      <div className="card-body">
        <h5 className="card-title hFont">Simple Room Name</h5>
        <h6 className="text-secondary"> 2000 PKR per night</h6>
        <div className="features my-3">
          <h6 className="hFont">Features</h6>
          <span className="badge rounded-pill text-bg-light">1 washrooms</span>
          <span className="badge rounded-pill text-bg-light ">1 Balcorny</span>
          <span className="badge rounded-pill text-bg-light ">1 Balcorny</span>
          <span className="badge rounded-pill text-bg-light ">1 Balcorny</span>
          <span className="badge rounded-pill text-bg-light ">3 Sofas</span>
        </div>
        <div className="facilties mb-4">
          <h6 className="hFont">Facilities</h6>
          <span className="badge rounded-pill text-bg-light">Wifi</span>
          <span className="badge rounded-pill text-bg-light ">Television</span>
          <span className="badge rounded-pill text-bg-light ">AC</span>
        </div>
        <button className="btn btn-dark">Book Now</button>
      </div>
    </div>
  );
};

export default RoomCard;
