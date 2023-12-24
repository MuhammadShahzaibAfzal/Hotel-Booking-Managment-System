import React from "react";
import { Link } from "react-router-dom";
import instagram from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";

const Footer = () => {
  return (
    <div className="mt-5 container-fluid p-3 shadow">
      <div className="row">
        <div className="col-md-4">
          <h3 className="hFont">Shebi Hotel</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
            officia tenetur provident rerum ab ullam id, modi voluptate vitae ad
            nobis consequatur explicabo vero, omnis sed quae ratione corporis
            mollitia!
          </p>
        </div>
        <div className="col-md-4 ">
          <h3>Links</h3>
          <div
            className="d-flex"
            style={{ flexDirection: "column", rowGap: "10px" }}
          >
            <Link to="/" className="w-100">
              Home
            </Link>
            <Link to="/rooms" className="w-100">
              Rooms
            </Link>
            <Link to="/facilities" className="w-100">
              Our Facilities
            </Link>
            <Link to="/about-us" className="w-100">
              About Us
            </Link>
            <Link to="/contact-us" className="w-100">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="col-md-4">
          <h3>Fallow Us</h3>
          <div className="d-flex gap-3 align-items-center mb-3">
            <img src={instagram} alt="" />
            <span>qurashi_shebi</span>
          </div>
          <div className="d-flex gap-3 align-items-center mb-3">
            <img src={facebook} alt="" />
            <span>Shahzaib Afzal</span>
          </div>
          <div className="d-flex gap-3 align-items-center mb-3">
            <img src={twitter} alt="" />
            <span>qurashi_shebi</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
