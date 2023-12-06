import { Link } from "react-router-dom";
import "./item.css";
const Item = ({ product }) => {
  return (
    <>
      <div className="contenedor">
        <Link to={`/item/${product.id}`}>
          <h1>{product.nombre}</h1>
        </Link>

        <img src={product.img} alt={product.nombre} id="images" />
      </div>
    </>
  );
};

export default Item;
