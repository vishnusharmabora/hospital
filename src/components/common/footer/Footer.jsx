import React from "react";
import "./footer.css";
const Footer = ({ openSideBar }) => {
  return (
    <>
      <footer class={`main-footer ${openSideBar ? "" : "sidebar-mini"}`}>
        2020 @Copyright bdtask{" "}
      </footer>
    </>
  );
};

export default Footer;
