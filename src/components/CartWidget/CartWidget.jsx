import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext.JSX";
import { useContext } from "react";
import "./cartWidget.css";

const CartWidget = () => {
  const { cantidadTotal } = useContext(CartContext);
  return (
    <div>
      <>
        <Link to="/cart">
          <AiOutlineShoppingCart className="cart" />
        </Link>

        <p className="cartQuantity">{cantidadTotal}</p>
      </>
    </div>
  );
};

export default CartWidget;
