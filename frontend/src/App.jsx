import React from "react";
import { Route, Routes } from "react-router-dom";

import WebsiteLayout from "./layouts/WebsiteLayout";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Facilities from "./pages/Facilities";
import AdminLogin from "./dashboard/pages/AdminLogin";
import AdminForgetPassword from "./dashboard/pages/AdminForgetPassword";
import DashboardHome from "./dashboard/pages/DashboardHome";
import DashboardLayout from "./layouts/DashboardLayout";

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
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route
          path="/admin-forget-password"
          element={<AdminForgetPassword />}
        />
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
