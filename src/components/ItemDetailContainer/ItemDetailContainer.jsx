import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
//Paso 01: Importamos los metodos
import { getFirestore, doc, getDoc } from "firebase/firestore";
import "./itemDetailContainer.css";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  const { idProduct } = useParams();

  useEffect(() => {
    //Paso 02: Inicializamos instancia de Firebase
    const db = getFirestore();

    //Paso 03: Recibimos el documento por su Id
    const nuevoDoc = doc(db, "productos", idProduct);

    //Paso 04: Hacemos el llamado al doc y lo renderizamos en pantalla
    getDoc(nuevoDoc)
      .then((res) => {
        const data = res.data();
        const nuevoProducto = { id: res.id, ...data };
        setProduct(nuevoProducto);
      })
      .catch((error) => console.log(error));
  }, [idProduct]);

  return (
    <div className="cardContainer">
      {product ? <ItemDetail producto={product} /> : <p>CARGANDO...</p>}
    </div>
  );
};

export default ItemDetailContainer;
