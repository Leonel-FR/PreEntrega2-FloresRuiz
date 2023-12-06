import { useContext } from "react";
import { CartContext } from "../../context/CartContext.JSX";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import "./cart.CSS";
const Cart = () => {
  const { cart, total, clearCart, removeItem } = useContext(CartContext);
  console.log(cart);
  return (
    <div>
      <h1>Tu carrito</h1>

      {cart.length == 0 ? (
        <div>
          <h2>El carrito esta vacio</h2>
          <Link to={"/"}>Ir al inicio</Link>
        </div>
      ) : (
        <div className="cartContainer">
          {cart.map((p) => (
            <CartItem
              key={p.producto.id}
              cartItem={p}
              removeItem={removeItem}
            />
          ))}

          <h2>Valor total del carrito: ${total}</h2>
          <button
            onClick={() => {
              clearCart();
            }}
          >
            Vaciar carrito
          </button>
          <Link to={"/Checkout"}>TERMINAR LA COMPRA</Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
