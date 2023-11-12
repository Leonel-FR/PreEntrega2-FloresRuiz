import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./navbar.css";
const Navbar = () => {
  const enlaces = [
    "Categoria uno",
    "Categoria dos",
    "Categoria tres",
    "Categoria cuatro",
    "Categoria cinco",
    "Contacto",
    "Ubicacion",
  ];

  return (
    <div className="nav">
      <Link className="link" to={"/"}>
        <p>LOGO</p>
      </Link>

      <ul className="linksContainer">
        {enlaces.map((e, id) => (
          <li className="liContainer" key={id}>
            <NavLink activeclassname="active" to={`${e}`}>
              {e}
            </NavLink>
          </li>
        ))}
      </ul>
      <CartWidget className="cart" />
    </div>
  );
};

export default Navbar;
