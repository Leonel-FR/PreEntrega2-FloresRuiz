import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import "./itemListContainer.css";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    //Inicializamos el estado de carga de los productos
    setLoading(true);

    //Creamos la instancia de la base de datos
    const db = getFirestore();

    //Generamos el filtrado de los productos
    const misProductos = categoryId
      ? query(collection(db, "productos"), where("categoria", "==", categoryId))
      : collection(db, "productos");

    //Generamos los documentos solicitados
    getDocs(misProductos)
      .then((res) => {
        const nuevosProductos = res.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProducts(nuevosProductos);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        //Cancelamos el loading y se muestran los productos
        setLoading(false);
      });
  }, [categoryId]);
  return (
    <>
      {loading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <ItemList products={products} />
      )}
    </>
  );
};

export default ItemListContainer;
