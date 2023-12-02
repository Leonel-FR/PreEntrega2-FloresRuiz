import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./itemDetailContainer.css";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  const { idProduct } = useParams();

  useEffect(() => {
    const fetchData = () => {
      return fetch("/data/productos.json")
        .then((response) => response.json())
        .then((data) => {
          const foundProduct = data.find((item) => item.id == idProduct); //Triple igual "===" hace que ItemDetail no se pueda renderizar
          setProduct(foundProduct);
        })
        .catch((error) => console.log(error));
    };
    fetchData();
  }, [idProduct]);

  return (
    <div className="cardContainer">
      {product ? <ItemDetail producto={product} /> : <p>CARGANDO...</p>}
    </div>
  );
};

export default ItemDetailContainer;
