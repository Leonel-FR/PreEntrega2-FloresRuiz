import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
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
    <div>
      <Link to="/">
        <p>LOGO</p>
      </Link>

      <ul>
        {enlaces.map((e, id) => (
          <li key={id}>
            <Link to={`${e}`}>{e}</Link>
          </li>
        ))}
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
