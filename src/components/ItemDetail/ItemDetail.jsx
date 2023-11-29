import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import "./itemDetail.css";
import { CartContext } from "../../context/CartContext.JSX";
import { useContext } from "react";

const ItemDetail = ({ producto }) => {
  const [quantity, setQuantity] = useState(0);

  const { addToCart } = useContext(CartContext);

  const onAdd = (cantidad) => {
    setQuantity(cantidad);
    addToCart(producto, cantidad);
  };

  return (
    <div className="detailContainer">
      <img src={producto.img} alt={producto.nombre} className="images" />
      <h2>{producto.nombre}</h2>
      <p>Stock: {producto.stock}</p>
      <p>Precio: {producto.precio}</p>
      <p>Categoria: {producto.categoria}</p>
      <p>Descripcion: {producto.descripcion}</p>
      {quantity == 0 ? (
        <ItemCount initial={1} stock={producto.stock} onAdd={onAdd} />
      ) : (
        <Link to="/Cart">Ir al carrito</Link>
      )}
    </div>
  );
};

export default ItemDetail;
