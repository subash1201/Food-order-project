import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const totalQuantity = useSelector((state) => state.totalQuantity);

  return (
    <nav className="navbar">
      <h1>Food Order App</h1>
      <ul>
        <li>
          <NavLink className="navElement" to="/">
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink className="navElement" to="/cart">
            Cart<span className="cart-count">{totalQuantity}</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="navElement" to="/admin">
            Admin
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
