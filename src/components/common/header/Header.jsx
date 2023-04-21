import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = ({ setOpenSideBar, openSideBar }) => {
  return (
    <>
      <header className={`main-header ${openSideBar ? "" : "sidebar-mini"}`}>
        <a
          href="https://hospitalnew.bdtask.com/demo7/dashboard/home"
          className="logo"
        >
          <span className="logo-mini">
            <img
              src="https://hospitalnew.bdtask.com/demo7/assets/images/apps/36ae88214f66496f41748bc540380980.png"
              alt=""
            />
          </span>
          <span className="logo-lg">
            <img
              src="https://hospitalnew.bdtask.com/demo7/assets/images/apps/36ae88214f66496f41748bc540380980.png"
              alt=""
            />
          </span>
        </a>
        <nav className="navbar navbar-static-top">
          <span
            href="#"
            className="sidebar-toggle"
            data-toggle="offcanvas"
            role="button"
            onClick={() => setOpenSideBar((pre) => !pre)}
          >
            <i className="fa fa-th"></i>
          </span>

          <div className="dropdown">
            <button
              className="btn btn-secondary"
              type="button"
              id="dropdownMenuButton2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fa fa-cog" aria-hidden="true"></i>
            </button>
            <ul
              className="dropdown-menu dropdown-menu-dark"
              aria-labelledby="dropdownMenuButton2"
            >
              <li>
                <Link className="dropdown-item active" href="#">
                  Profile
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="#">
                  Edit Profile
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="#">
                  Log Out
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
