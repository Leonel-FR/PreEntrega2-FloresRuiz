import ItemCount from "../ItemCount/ItemCount";
const ItemDetail = ({ producto }) => {
  const onAdd = (quantity) => {
    alert(quantity);
  };

  return (
    <div>
      <img src={producto.img} alt={producto.nombre} />
      <h2>{producto.nombre}</h2>
      <p>Stock: {producto.stock}</p>
      <p>Precio: {producto.precio}</p>
      <p>Categoria: {producto.categoria}</p>
      <p>Descripcion: {producto.descripcion}</p>
      <ItemCount initial={1} stock={producto.stock} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetail;
