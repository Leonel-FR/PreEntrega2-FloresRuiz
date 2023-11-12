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

function App() {
  return (
    <>
      <BrowserRouter>
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
      </BrowserRouter>
    </>
  );
}

export default App;
