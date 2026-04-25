import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <NavLink to="/">About</NavLink>
      <NavLink to="/menu">Menu</NavLink>
      <NavLink to="/reviews">Reviews</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
}

export default NavBar;