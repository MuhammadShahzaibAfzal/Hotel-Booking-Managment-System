import React from "react";
import Heading from "../components/common/Heading";
import aboutImg from "../assets/about.jpg";
import roomsIcon from "../assets/hotel.svg";
import customersIcon from "../assets/customers.svg";
import ratingIcon from "../assets/rating.svg";
import staffIcon from "../assets/staff.svg";
const About = () => {
  return (
    <div>
      <Heading
        tagline={
          "Lorem ipsum, dolor sit amet consectetur um ducimus suscipit Lorem ipsum, dolor sit amet consectetur um ducimus suscipit. Lorem ipsum, dolor sit amet consectetur um ducimus suscipit.."
        }
      >
        About Us
      </Heading>
      <div className="container">
        {/* Hero Secition Start */}
        <div className="row d-flex align-items-center mt-5 p-3">
          <div className="col-md-6 order-2 order-md-1">
            <h2>This is Heading of About Us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              accusamus magni dolores assumenda? Aspernatur repellendus
              necessitatibus recusandae totam, consequatur provident,
              voluptatibus voluptate, aliquid vel corrupti quam magnam nesciunt.
              Expedita, quas.
            </p>
          </div>
          <div className="col-md-6 order-1 order-md-2 mb-3 mb-md-0">
            <img src={aboutImg} alt="" className="w-100 rounded" />
          </div>
        </div>
        {/* Hereo section end */}

        {/* Cards Section start */}

        <div className="row mt-5 p-3">
          <div className="col-md-6 col-lg-3 mb-3">
            <div className="shadow rounded text-center border-top border-4 border-dark p-3">
              <img src={roomsIcon} alt="" style={{ width: "60px" }} />
              <h5 className="mt-4">100 + ROOMS</h5>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 mb-3">
            <div className="shadow rounded text-center border-top border-4 border-dark p-3">
              <img src={customersIcon} alt="" style={{ width: "60px" }} />
              <h5 className="mt-4">200 + CUSTOMERS</h5>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 mb-3">
            <div className="shadow rounded text-center border-top border-4 border-dark p-3">
              <img src={ratingIcon} alt="" style={{ width: "60px" }} />
              <h5 className="mt-4">150 + REVIEWS</h5>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 mb-3">
            <div className="shadow rounded text-center border-top border-4 border-dark p-3">
              <img src={staffIcon} alt="" style={{ width: "60px" }} />
              <h5 className="mt-4">100 + STAFF</h5>
            </div>
          </div>
        </div>

        {/* Card section End */}
      </div>
    </div>
  );
};

export default About;
