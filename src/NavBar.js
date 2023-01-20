import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

const NavBar = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args}>
        <NavbarBrand href="/">Home</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/fetchDataFromApi">Fetch Data from API</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                State Management
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem><NavLink href="/counter">Counter</NavLink></DropdownItem>
                <DropdownItem><NavLink href="/addTwoNums">Add Two Nums</NavLink></DropdownItem>
                <DropdownItem><NavLink href="/circleCanvas">Canvas to Place Circles</NavLink></DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Forms
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem><NavLink href="/simpleForm1">Simple Form Handling (1-level nesting)</NavLink></DropdownItem>
                <DropdownItem><NavLink href="/simpleForm2">Simple Form Handling (Dynamic Form Inputs)</NavLink></DropdownItem>
                <DropdownItem><NavLink href="/moderateForm1">Moderate Form Handling (Send Data to API)</NavLink></DropdownItem>
                <DropdownItem><NavLink href="/moderateForm2">Moderate Form Handling (API Debouncing)</NavLink></DropdownItem>
                <DropdownItem><NavLink href="/moderateForm3">Moderate Form Handling (Context API)</NavLink></DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                React Core
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem><NavLink href="/higherOrderComponent">Higher Order Component Usage</NavLink></DropdownItem>
                <DropdownItem><NavLink href="/lazyLoading">Lazy Loading Demo</NavLink></DropdownItem>
                <DropdownItem><NavLink href="/recursiveComponent">Recursive Component Call</NavLink></DropdownItem>
                <DropdownItem><NavLink href="/reactCustomHook">React Custom Hook Usage</NavLink></DropdownItem>
                <DropdownItem><NavLink href="/memoisation">Memoisation - Cache API Response</NavLink></DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;