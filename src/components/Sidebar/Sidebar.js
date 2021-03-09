/*eslint-disable*/
import React from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

// reactstrap components
import { Nav, NavLink as ReactstrapNavLink } from "reactstrap";
import {
  BackgroundColorContext,
  backgroundColors,
} from "../../contexts/BackgroundColorContext";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

var ps;

function Sidebar(props) {
  const location = useLocation();
  const sidebarRef = React.useRef(null);
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return location.pathname === routeName ? "active" : "";
  };
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(sidebarRef.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
    }
    
  });
  const { routes } = props;
  
  return (
        <div className="sidebar">
          <div className="sidebar-wrapper" ref={sidebarRef}>
            
            <Nav>
              {routes.map((prop, key) => {
                if (prop.redirect) return null;
                return (
                  <li
                    className={
                      activeRoute(prop.path) + (prop.pro ? " active-pro" : "")
                    }
                    key={key}
                  >
                    <NavLink
                      to={prop.layout + prop.path}
                      className="nav-link"
                      activeClassName="active"
                      onClick={props.toggleSidebar}
                    >
                      <FontAwesomeIcon 
                      icon={prop.icon}
                      size="2x"  
                      transform=""
                      pull="left" 
                      color="orange"
                      fixedWidth 
                      />
                      <p className="text-center"> {prop.name}</p>
                    </NavLink>
                  </li>
                );
              })}
            </Nav>
          </div>
        </div>
      )}



export default Sidebar;
