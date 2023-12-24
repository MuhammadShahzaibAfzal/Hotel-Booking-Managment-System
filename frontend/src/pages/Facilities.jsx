import React from "react";
import Heading from "../components/common/Heading";
import FacilityCard from "../components/common/FacilityCard";

const Facilities = () => {
  return (
    <div>
      <Heading
        tagline={
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque sequi porro sit consequuntur recusandae totam molestiae"
        }
      >
        Our Facilities
      </Heading>

      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <FacilityCard />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <FacilityCard />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <FacilityCard />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <FacilityCard />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <FacilityCard />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <FacilityCard />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <FacilityCard />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <FacilityCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
