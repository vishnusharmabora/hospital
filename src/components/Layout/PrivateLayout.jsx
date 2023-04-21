import React, { useState } from "react";

import { Outlet } from "react-router-dom";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import SideBar from "../common/SideBar/SideBar";

const PrivateLayout = () => {
  const [openSideBar, setOpenSideBar] = useState(true);
  console.log(openSideBar, "OpenSideBar");
  return (
    <>
      <SideBar openSideBar={openSideBar} />
      <Header openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />

      <div className="content_Section">
        <Outlet />
      </div>
      <Footer openSideBar={openSideBar} />
    </>
  );
};

export default PrivateLayout;
