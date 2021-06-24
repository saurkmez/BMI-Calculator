import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="headercontainer">
        <div className="homecontainer">
          <NavLink to="/" className="route">
            <h1>
              <i className="fas fa-child"></i>
            </h1>
          </NavLink>
        </div>

        <div className="tabscontainer">
          <ul>
            <NavLink to="/MoreInfo" className="route">
              <li>
                {" "}
                <h3>More Info</h3>{" "}
              </li>
            </NavLink>
            <NavLink to="/Recipes" className="route">
              <li>
                <h3>Healthy Recipes</h3>
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
