import { useContext } from "react";
import { CartContext } from "../../context/CartContext.JSX";
import Item from "../Item/Item";

const Cart = () => {
  const { cart, clearCart, removeItems } = useContext(CartContext);
  console.log(cart);
  return (
    <div>
      <h1>Tu carrito</h1>
      <ul>
        {cart.length > 0 ? (
          cart.map((item) => {
            return (
              <li>
                <Item product={item.producto} />
                <button onClick={() => removeItems(item.producto.id)}>
                  Eliminar producto
                </button>
              </li>
            );
          })
        ) : (
          <h3>No hay productos</h3>
        )}
      </ul>
      <button onClick={clearCart}>Vaciar carrito</button>
    </div>
  );
};

export default Cart;
