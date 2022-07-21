import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "orange",
  textDecoration: "none",
  color: "white",
};


function NavBar() {
  return (
    <div className="navbar">
      <NavLink to="/"
      exact
      /* add styling to Navlink */
      style={linkStyles}
      /* add prop for activeStyle */
      activeStyle={{
        background: "darkblue",
      }}>
        Home
      </NavLink>
      <NavLink exact to="/actors"
           /* add styling to Navlink */
      style={linkStyles}
      /* add prop for activeStyle */
      activeStyle={{
        background: "darkblue",
      }}>
        Actors
      </NavLink>
      <NavLink exact to="/Directors"
      /* add styling to Navlink */
      style={linkStyles}
      /* add prop for activeStyle */
      activeStyle={{
        background: "darkblue",
      }}
      >
        Directors
      </NavLink>
      <NavLink exact to="/Movies"
      /* add styling to Navlink */
      style={linkStyles}
      /* add prop for activeStyle */
      activeStyle={{
        background: "darkblue",
      }}>
        Movies
      </NavLink>
    </div>
  )
}

export default NavBar;
