import { NavLink } from "react-router-dom";

import "./NavBare.css";
const NavBare = () => {
  return (
    <>
      <div className="navBar">
        <ul>
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/services">
            <li>Our Services</li>
          </NavLink>
          <NavLink to="/contactUs">
            <li>Contact Us</li>
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default NavBare;
