import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1>Legends and Lore Pizza</h1>
      <div>
        <NavLink to="/">About</NavLink> |{" "}
        <NavLink to="/menu">Menu</NavLink> |{" "}
        <NavLink to="/reviews">Reviews</NavLink> |{" "}
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
}