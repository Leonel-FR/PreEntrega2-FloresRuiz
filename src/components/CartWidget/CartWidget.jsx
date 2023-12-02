import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext.JSX";
import { useContext } from "react";

const CartWidget = () => {
  const { cantidadTotal } = useContext(CartContext);
  return (
    <div>
      <>
        <Link to="/cart">
          <AiOutlineShoppingCart />
        </Link>

        <p>{cantidadTotal}</p>
      </>
    </div>
  );
};

export default CartWidget;
