import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Topbar from "../dashboard/components/Topbar";
import Sidebar from "../dashboard/components/Sidebar";

const DashboardLayout = () => {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <Topbar />
      <Sidebar open={open} setOpen={setOpen} />
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
