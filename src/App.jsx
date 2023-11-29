import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Contacto from "./components/Contacto/Contacto";
import Ubicacion from "./components/Ubicacion/Ubicacion";
import Error from "./components/Error/Error";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./context/CartContext.JSX";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
function App() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const db = getFirestore();
    const collectionRef = collection(db, "productos");
    getDocs(collectionRef).then((snapshot) => {
      setProduct(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, []);
  console.log(product);
  return (
    <>
      {/*
      <BrowserRouter>
        <CartProvider>
          <Navbar />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:idProduct" element={<ItemDetailContainer />} />
            <Route path="/Contacto" element={<Contacto />} />
            <Route path="/Ubicacion" element={<Ubicacion />} />
            <Route path="*" element={<Error />} />
            <Route path="/Cart" element={<Cart />} />
          </Routes>

          <Footer />
        </CartProvider>
      </BrowserRouter>
  */}
    </>
  );
}

export default App;
