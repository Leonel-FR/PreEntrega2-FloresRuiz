import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { MutatingDots } from "react-loader-spinner";
import "./itemListContainer.css";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    const fetchdata = () => {
      return fetch("/data/productos.json")
        .then((response) => response.json())
        .then((data) => {
          if (categoryId) {
            const filterProducts = data.filter(
              (p) => p.categoria === categoryId
            );
            setProducts(filterProducts);
          } else {
            setProducts(data);
          }
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    };
    setTimeout(() => fetchdata(), 3000);
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
