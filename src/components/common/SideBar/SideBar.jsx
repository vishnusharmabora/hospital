import React from "react";
import { Link } from "react-router-dom";
import { DesboardMenu } from "../../../utils/constant";
import "./SideBar.css";
import SideBarItem from "./SideBarItem";

const SideBar = ({ openSideBar }) => {
  return (
    <>
      <aside className={`main-sidebar ${openSideBar ? "" : "sidebar-mini"}`}>
        <div className="sidebar">
          <div className="user-panel text-center">
            <div className="image">
              <img
                src="https://hospitalnew.bdtask.com/demo7/assets/images/doctor/199332caf3eb627a59f6b52aff1bf142.jpg"
                className="rounded-circle"
                alt="User Image"
              />
            </div>
            <div className="info">
              <p className="fs_16">Azizbek Yuldoshev</p>
              <Link to="#" className="text-success">
                <i className="fa fa-circle text-success"></i>
                Admin
              </Link>
            </div>
          </div>
          <ul className="sidebar-menu">
            {DesboardMenu.map((menu) => {
              return (
                <>
                  <SideBarItem {...menu} />
                </>
              );
            })}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
