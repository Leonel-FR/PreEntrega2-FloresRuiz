import {
  collection,
  addDoc,
  updateDoc,
  doc,
  getDoc,
  getFirestore,
} from "firebase/firestore";
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext.JSX";
import "./checkout.css";
const Checkout = () => {
  //Campos del formulario
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmation, setEmailConfirmation] = useState("");
  const [error, setError] = useState("");
  const [orderId, setOrderId] = useState("");

  //Datos necesarios del Context
  const { cart, total, clearCart } = useContext(CartContext);

  //Submit
  const manejadorFormulario = (event) => {
    //Evitamos que se ejecute el evento Submit por defecto
    event.preventDefault();

    //Algunos manejos de errores
    if (!nombre || !apellido || !telefono || !email || !emailConfirmation) {
      setError("Completar los campos requeridos");
      return;
    }

    if (email !== emailConfirmation) {
      setError("Los campos del email no coinciden");
      return;
    }

    //Creamos la instancia de la base de datos
    const db = getFirestore();

    //Generamos el objeto de la orden de compra
    const order = {
      items: cart.map((producto) => ({
        id: producto.producto.id,
        nombre: producto.producto.nombre,
        cantidad: producto.cantidad,
      })),
      total: total,
      fecha: new Date(),
      nombre,
      apellido,
      telefono,
      email,
    };

    //Generamos la logica para la orden y reduccion del stock
    Promise.all(
      order.items.map(async (productoOrden) => {
        const productoRef = doc(db, "productos", productoOrden.id);
        const productoDoc = await getDoc(productoRef);
        const stockActual = productoDoc.data().stock;

        //Reducimos el stock
        await updateDoc(productoRef, {
          stock: stockActual - productoOrden.cantidad,
        });
      })
    )
      .then(() => {
        addDoc(collection(db, "ordenes"), order)
          .then((docRef) => {
            setOrderId(docRef.id);
            clearCart();
          })
          .catch((error) => {
            console.log("Error al crear la orden", error);
            setError("Se produjo un error al crear la orden");
          });
      })
      .catch((error) => {
        console.log("No se pudo actualizar el stock", error);
        setError("No se puede actualizar el stock, intentelo mas tarde");
      });
  };
  return (
    //Armado del formulario
    <div>
      <h2>Ingresa tus datos</h2>

      <form onSubmit={manejadorFormulario} className="form">
        {/*Mapear los productos*/}
        {cart.map((producto) => (
          <div key={producto.producto.id}>
            <p>
              {" "}
              {producto.producto.nombre} x {producto.cantidad}{" "}
            </p>
            <p>{producto.producto.precio}</p>
            <hr />
          </div>
        ))}

        {/* Campos formulario */}

        <div>
          <label htmlFor="">Nombre</label>
          <input
            type="text"
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Tu nombre"
            maxLength={12}
          />
        </div>

        <div>
          <label htmlFor="">Apellido</label>
          <input
            type="text"
            onChange={(e) => setApellido(e.target.value)}
            placeholder="Tu apellido"
            maxLength={25}
          />
        </div>

        <div>
          <label htmlFor="">Telefono</label>
          <input
            type="number"
            onChange={(e) => setTelefono(e.target.value)}
            placeholder="Tu telefono"
            maxLength={5} //No funciona para el input de tipo number
          />
        </div>

        <div>
          <label htmlFor="">Email</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Tu email"
          />
        </div>

        <div>
          <label htmlFor="">Email de confirmacion</label>
          <input
            type="email"
            onChange={(e) => setEmailConfirmation(e.target.value)}
            placeholder="Tu email nuevamente"
          />
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit">Comprar</button>

        {orderId && (
          <p>¡Gracias por tu compra! TU NUMERO DE ID ES: {orderId}</p>
        )}
      </form>
    </div>
  );
};

export default Checkout;
