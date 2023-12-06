import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import "./itemDetail.css";
//Paso 06: Importar la instancia del contexto
import { CartContext } from "../../context/CartContext.JSX";

const ItemDetail = ({ producto }) => {
  const [quantity, setQuantity] = useState(0);
  //Paso 07: Implementar el useContext para consumir el contexto
  const { addToCart } = useContext(CartContext);

  const onAdd = (cantidad) => {
    setQuantity(cantidad);
    addToCart(producto, cantidad);
  };

  return (
    <div className="detailContainer">
      <img src={producto.img} alt={producto.nombre} id="images" />
      <h2>{producto.nombre}</h2>
      <p>Stock: {producto.stock}</p>
      <p>Precio: {producto.precio}</p>
      <p>Categoria: {producto.categoria}</p>
      <p>Descripcion: {producto.descripcion}</p>
      {quantity == 0 ? (
        <ItemCount initial={1} stock={producto.stock} onAdd={onAdd} />
      ) : (
        <button id="irCarrito">
          <Link to="/Cart">Ir al carrito</Link>
        </button>
      )}
    </div>
  );
};

export default ItemDetail;
