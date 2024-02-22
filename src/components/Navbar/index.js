import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import the FontAwesome icons
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Bars = styled(FaBars)`
  display: none;
  color:  #333333;
  align-self: center;
  @media screen and (max-width: 768px) {
    display: flex;
    font-size: 1.8rem;
    cursor: pointer;
    margin-left:0.2em;
  }
`;
const Bar = styled.nav`
  top:0;
  font-size: 1em;
  background:transparent;
  border: 1px solid rgba(0, 0, 0, 0.1);
  min-height: 40px;
  display: flex;
  background-color:rgb(252, 245, 199);
  align-items: center;
  width: 100%;
  z-index: 9999;
  margin: 0;
  position: fixed;
  font-family: 'Roboto', sans-serif;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding-bottom: 0;
    height: 70px;
    top:0;
  }
`;


const MainNav = styled.ul`
  list-style-type: none;
  display: ${(props) => (props.display)};
  flex-direction: column;
  position: absolute;
  z-index: 9999;
  top: 38px;
  width: 100vw;
  transition: transform 0.3s ease;
  border-radius: 0 0 5px 5px;
  margin:0;
  padding:0;
 background-color: rgba(252, 245, 199, 0.99);

  @media (min-width: 768px) {
    display: flex !important;
    margin-right: 30px;
    flex-direction: row;
    justify-content: flex-end;
    background-color: transparent;
    top:0;

flex-wrap:wrap;
height:70px;
align-items:center;

width:100%;
  }
`;

const NavLi = styled.li`
  text-align: center;
  position: relative;
  margin: 0 auto;

  a {
    font-weight: 600;
  }
  @media screen and (max-width: 768px) {
    margin: 1.5em auto !important;

    a {
      font-weight: 600;
    }  }
`;

const NavBarToggle = styled.span`
  position: relative;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.8);
  font-size: 24px;
`;

const CloseButton = styled(FaTimes)` 
  display: none;
  position: absolute;
  right: 10px;
  font-size: 1.5rem;
  cursor: pointer;
  color: #333333;
  z-index: 1;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;
const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Function to close the menu
  const closeMenu = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (!open) {
      // Perform an action when the menu is closed
    }
  }, [open]);

  return (
    <>
      <Bar className="nav-fa-bars">
        <NavBarToggle className="navbar-toggle" onClick={() => setOpen(!open)}>
          <Bars />
        </NavBarToggle>

        {open && <CloseButton className="navbar-close-button" onClick={closeMenu} />} {/* Close button */}

        <MainNav display={open ? "flex" : "none"}>
          <NavLi>
            <NavLink to="/index" onClick={closeMenu} activeStyle={{ color: "red" }}>
              <img className="menu-logo" src="./images/logo.png" alt="logo" />
            </NavLink>
          </NavLi>

          <NavLi>
            <NavLink to="/findmatches" onClick={closeMenu} activeStyle={{ color: "red" }}>
              Find matches
            </NavLink>
          </NavLi>

          <NavLi>
            <NavLink to="/favorites" onClick={closeMenu} activeStyle={{ color: "red" }}>
              Favorites
            </NavLink>
          </NavLi>
          <NavLi>
            <NavLink to="/viewMyProfile" onClick={closeMenu} activeStyle={{ color: "red" }}>
              Profile
            </NavLink>
          </NavLi>
          <NavLi className="signup-menu-item">
            <NavLink to="/sign-up" onClick={closeMenu} activeStyle={{ color: "red" }}>
              Sign Up
            </NavLink>
          </NavLi>
        </MainNav>
      </Bar>
    </>
  );
};

export default Navbar;