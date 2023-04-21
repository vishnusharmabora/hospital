import React, { useState } from "react";
import { Link } from "react-router-dom";

const SideBarItem = ({ url, icon, title, subMenu, isSubMenu }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuOpen = () => {
    setIsOpen((pre) => !pre);
  };

  return (
    <>
      <li className={`${isOpen ? "active" : ""}`}>
        <Link to={url} onClick={menuOpen}>
          <i className={icon}></i> <span>{title}</span>
        </Link>
        {isSubMenu && (
          <ul className="treeview-menu">
            {subMenu.map((subMenus) => {
              return (
                <li>
                  <Link to={subMenus.url}>{subMenus.title}</Link>
                </li>
              );
            })}
          </ul>
        )}
      </li>
    </>
  );
};

export default SideBarItem;
