import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  const { idProduct } = useParams();
  console.log(idProduct);

  useEffect(() => {
    const fetchData = () => {
      return fetch("/data/productos.json")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          const foundProduct = data.find((item) => item.id == idProduct);
          setProduct(foundProduct);
        })
        .catch((error) => console.log(error));
    };
    fetchData();
  }, [idProduct]);
  return (
    <div>
      {product ? <ItemDetail producto={product} /> : <p>CARGANDO...</p>}
    </div>
  );
};

export default ItemDetailContainer;
