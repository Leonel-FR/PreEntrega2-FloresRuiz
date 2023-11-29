import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartContext } from "../../context/CartContext.JSX";
import { useContext } from "react";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);
  return (
    <div>
      <>
        <Link to="/cart">
          <AiOutlineShoppingCart />
        </Link>

        <p>{getTotalItems()}</p>
      </>
    </div>
  );
};

export default CartWidget;
