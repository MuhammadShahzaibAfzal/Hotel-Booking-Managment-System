import React from "react";
import HomeSlider from "../components/home/HomeSlider";
import AvailablityForm from "../components/home/AvailablityForm";
import OurRooms from "../components/home/OurRooms";
import OurFacilities from "../components/home/OurFacilities";
import Testimonials from "../components/home/Testimonials";
import ReachUs from "../components/home/ReachUs";
import Footer from "../components/common/Footer";

const Home = () => {
  return (
    <div>
      <HomeSlider />
      <AvailablityForm />
      <OurRooms />
      <OurFacilities />
      <Testimonials />
      <ReachUs />
    </div>
  );
};

export default Home;
