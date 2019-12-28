import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar dark expand="md">
        <div className="container-fluid">
          <NavbarBrand href="/">Baginda Sitto Siregar</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="./">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="./">
                  Galleries
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="./">
                  Blog
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="./">
                  Categories
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="./">
                  Contact
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
};
export default Header;
