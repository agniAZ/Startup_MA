/*eslint-disable*/
import React from "react";

import { Container, Nav, NavItem, NavLink } from "reactstrap";

function Footer() {
  return (
    <footer className="footer">
      <Container fluid>
        <Nav>
          <NavItem>
            <NavLink href="https://github.com/agniAZ">
              Creator
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/agniAZ">
              About Project
            </NavLink>
          </NavItem>
        </Nav>
        <div className="copyright">
          © {new Date().getFullYear()} made  by{" "}
          <a
            href="https://github.com/agniAZ"
            target="_blank"
          >
            agniAZ
          </a>{" "}
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
