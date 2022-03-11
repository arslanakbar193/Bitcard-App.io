import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import allMenus from "../utils/sidebarMenus.js";

const Sidebar = () => {
  const navigate = useNavigate();
  const [isActive, setisActive] = useState(false);
  const toggleClass = () => {
    setisActive(!isActive);
    alert("asd");
  };
  return (
    <>
    
      <div className="main-menu">
        <ul className="sidebar-ul">
          {allMenus?.menus?.map((curElem, index) => {
            return (
              <>
                <li
                  className={isActive ? 'your_className': 'menu'} 
                  key={index}
                  onClick={() => curElem.path && navigate(curElem.path) }
                >
                  <img src={curElem.icon} alt="no-img" />
                  <span>{curElem.label}</span>
                </li>
              </>
            );
          })}
        </ul>

        <ul className="sidebar-ul-second">
          {allMenus?.informationalMenus?.map((curElem, index) => {
            return (
              <>
                <li
                  className="menu"
                  key={index}
                  onClick={() => curElem.path && navigate(curElem.path) && toggleClass}
                >
                  <span>{curElem.label}</span>
                </li>
              </>
            );
          })}
        </ul>
        <div className="footer-text">
          <p>© 2021 - BitCard</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
