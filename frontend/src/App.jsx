import React from "react";
import { Route, Routes } from "react-router-dom";

import WebsiteLayout from "./layouts/WebsiteLayout";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Facilities from "./pages/Facilities";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<Home />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="about-us" element={<About />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="facilities" element={<Facilities />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
