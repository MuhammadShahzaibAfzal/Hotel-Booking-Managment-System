import React from "react";
import wifi from "../../assets/wifi.svg";
import Heading from "../common/Heading";
const OurFacilities = () => {
  return (
    <div>
      <Heading>Our Facilities</Heading>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <div className="shadow rounded p-3 text-center">
              <img src={wifi} className="mt-4" alt="" height="60px" />
              <h3 className="mt-3">WIFI</h3>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <div className="shadow rounded p-3 text-center">
              <img src={wifi} className="mt-4" alt="" height="60px" />
              <h3 className="mt-3">WIFI</h3>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <div className="shadow rounded p-3 text-center">
              <img src={wifi} className="mt-4" alt="" height="60px" />
              <h3 className="mt-3">WIFI</h3>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <div className="shadow rounded p-3 text-center">
              <img src={wifi} className="mt-4" alt="" height="60px" />
              <h3 className="mt-3">WIFI</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFacilities;
