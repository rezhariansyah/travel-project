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
      <Navbar light expand="md">
        <div className="container">
          <NavbarBrand href="/">BAGINDA SITTO SIREGAR</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="./">HOME</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="./">
                  GALERIES
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="./">
                  BLOG
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="./">
                  CATEGORIES
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="./">
                  CONTACT
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
