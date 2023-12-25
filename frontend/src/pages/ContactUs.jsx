import React from "react";
import Heading from "../components/common/Heading";
import locationIcon from "../assets/location.svg";
import phone from "../assets/phone.svg";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import { Button, Form } from "react-bootstrap";

const ContactUs = () => {
  return (
    <div>
      <Heading
        tagline={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, voluptas."
        }
      >
        Contact Us
      </Heading>

      <div className="container my-5">
        <div className="row">
          {/* LEFT SECTION */}
          <div className="col-md-6">
            <div className="shadow p-3 rounded">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6693.262043419009!2d73.75490603962274!3d32.98713529360973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f96a7b539c769%3A0xbfcf08ccf1b4e1fa!2sTowakkal%20Pur%20Pakhwal%2C%20Jhelum%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1703349116166!5m2!1sen!2s"
                className="w-100"
                height="300px"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <h6 className="my-3">Address</h6>
              <a
                href="https://maps.app.goo.gl/s1VVnfgT8yRvWyYN7"
                className="d-flex gap-3 align-items-center text-decoration-none text-secondary"
              >
                <img src={locationIcon} alt="" />
                <span>Jhelum,Punjab,Pakistan</span>
              </a>
              <h6 className="mb-3 mt-3">Call Us</h6>
              <div className="d-flex gap-3 align-items-center mb-3">
                <img src={phone} alt="" />
                <span>+9230103030</span>
              </div>
              <div className="d-flex gap-3 align-items-center mb-3">
                <img src={phone} alt="" />
                <span>+9230103030</span>
              </div>
              <h6 className="my-3">Follow Us</h6>
              <div className="d-flex gap-3">
                <img src={twitter} alt="" />
                <img src={instagram} alt="" />
                <img src={facebook} alt="" />
              </div>
            </div>
          </div>
          {/* RIGHT SECTION */}
          <div className="right col-md-6 mt-5 mt-md-0">
            <div className="shadow p-3 rounded">
              <h4>Send a message</h4>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control type="text" placeholder="Subject" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Enter message"
                    rows={5}
                  />
                </Form.Group>
                <Button variant="dark" className="my-4">
                  Send Message
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
