import "./cartItem.css";
const CartItem = ({ cartItem, removeItem }) => {
  return (
    <div className="cartItem">
      <div key={cartItem.producto.id}>
        <img
          src={cartItem.producto.img}
          alt={cartItem.producto.nombre}
          id="images"
        />
        <h1>{cartItem.producto.nombre}</h1>
        <p>{cartItem.producto.descripcion}</p>
        <p>Precio: ${cartItem.producto.precio}</p>
        <p>Stock: {cartItem.producto.stock}</p>
        <p>Cantidad: {cartItem.cantidad}</p>
        <p>Subtotal: {cartItem.cantidad * cartItem.producto.precio}</p>
        <button
          onClick={() => {
            removeItem(cartItem.producto.id);
          }}
        >
          Remover articulo
        </button>
      </div>
    </div>
  );
};

export default CartItem;
