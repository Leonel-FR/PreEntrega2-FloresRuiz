import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();
  console.log(categoryId);

  useEffect(() => {
    const fetchdata = () => {
      return fetch("/data/productos.json")
        .then((response) => response.json())
        .then((data) => {
          if (categoryId) {
            const filterProducts = data.filter(
              (p) => p.categoria == categoryId
            );
            setProducts(filterProducts);
          } else {
            setProducts(data);
          }
        })
        .catch((error) => console.log(error));
    };

    fetchdata();
  }, [categoryId]);
  return (
    <>
      {products.length == 0 ? (
        <h1>CARGANDO...</h1>
      ) : (
        <ItemList products={products} />
      )}
    </>
  );
};

export default ItemListContainer;
