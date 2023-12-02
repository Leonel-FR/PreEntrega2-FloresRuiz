import { createContext, useState } from "react";

//Paso 01: Crear la instancia del contexto
export const CartContext = createContext();

//Paso 02: Crear el provider
export const CartProvider = ({ children }) => {
  //Paso 08: Crear el carrito, cantidad y el total
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [cantidadTotal, setCantidadTotal] = useState(0);

  //Paso 09: Funcionalidades del carrito
  //Funcion encargada de agregar al carrito
  const addToCart = (producto, cantidad) => {
    const productoExistente = cart.find(
      (prod) => prod.producto.id === producto.id
    );
    if (!productoExistente) {
      setCart((prev) => [...prev, { producto, cantidad }]);
      setCantidadTotal((prev) => prev + cantidad);
      setTotal((prev) => prev + producto.precio * cantidad);
    } else {
      const carritoActualizado = cart.map((prod) => {
        if (prod.producto.id === producto.id) {
          return { ...prod, cantidad: prod.cantidad + cantidad };
        } else {
          return prod;
        }
      });
      setCart(carritoActualizado);
      setCantidadTotal((prev) => prev + cantidad);
      setTotal((prev) => prev + producto.precio * cantidad);
    }
  };

  //Funcion encargada de remover productos del carrito
  const removeItem = (id) => {
    const productoEliminado = cart.find((prod) => prod.producto.id == id);
    const carritoActualizado = cart.filter((prod) => prod.producto.id !== id);

    setCart(carritoActualizado);
    setCantidadTotal((prev) => prev - productoEliminado.cantidad);
    setTotal(
      (prev) =>
        prev - productoEliminado.producto.precio * productoEliminado.cantidad
    );
  };

  //Funcion encargada de limpiar el carrito
  const clearCart = () => {
    setCart([]);
    setCantidadTotal(0);
    setTotal(0);
  };
  //Cuerpo del contexto

  return (
    //Paso 03: Compartir las diferentes funcionalidades en el contexto
    <CartContext.Provider
      value={{
        cart,
        total,
        cantidadTotal,
        addToCart,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
