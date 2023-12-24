import React from "react";
import Heading from "../common/Heading";
import phone from "../../assets/phone.svg";
import instagram from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
const ReachUs = () => {
  return (
    <div className="container p-3">
      <Heading>React Us</Heading>
      <div className="row gap-4">
        <div className="col-md-7 shadow p-2 rounded">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6693.262043419009!2d73.75490603962274!3d32.98713529360973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f96a7b539c769%3A0xbfcf08ccf1b4e1fa!2sTowakkal%20Pur%20Pakhwal%2C%20Jhelum%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1703349116166!5m2!1sen!2s"
            className="w-100 h-100"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="col-md-4 ">
          <div className="row">
            <div className="col-12 shadow p-3 rounded ">
              <h5 className="mb-3">Call Us</h5>
              <div className="d-flex gap-3 align-items-center mb-3">
                <img src={phone} alt="" />
                <span>+9230103030</span>
              </div>
              <div className="d-flex gap-3 align-items-center mb-3">
                <img src={phone} alt="" />
                <span>+9230103030</span>
              </div>
            </div>
            <div className="col-12 shadow p-3 rounded mt-3">
              <h4>Fallow Us</h4>
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
      </div>
    </div>
  );
};

export default ReachUs;
