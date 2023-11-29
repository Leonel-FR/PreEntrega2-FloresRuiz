import { useState, createContext } from "react";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  //Estado global que analiza el carrito de compras
  const [cart, setCart] = useState([]);

  //Funcion que se encargue de agregar productos al carrito
  const addToCart = (producto, cantidad) => {
    if (!isInCart(producto.id)) {
      setCart((prev) => [...prev, { producto, cantidad }]);
    } else {
      console.log("No se puede agregar mas");
    }
  };

  //Funcion que determina si el producto ya esta en el carrito
  const isInCart = (itemId) => {
    return cart.some((i) => i.item.id === itemId);
  };

  //Funcion para saber la cantidad total de productos agregados al carrtito
  const getTotalItems = () => {
    let total = 0;
    cart.forEach((e) => (total += e.cantidad));
    return total;
  };

  //Funcion encargada de remover productos del carrito
  const removeItems = (id) => {
    const filtrarCarrito = cart.filter((item) => item.producto.id !== id);
    setCart(filtrarCarrito);
  };

  //Funcion encargada de limpiar el carrito
  const clearCart = () => {
    setCart([]);
  };

  return (
    <div>
      <CartContext.Provider
        value={{
          cart,
          setCart,
          addToCart,
          isInCart,
          getTotalItems,
          removeItems,
          clearCart,
        }}
      >
        {children}
      </CartContext.Provider>
    </div>
  );
};
