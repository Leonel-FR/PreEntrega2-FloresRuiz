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
import Checkout from "./components/Checkout/Checkout";
//Paso 04: Importar el proveedor del contexto
import { CartProvider } from "./context/CartContext.JSX";

function App() {
  return (
    <>
      <BrowserRouter>
        {/*Paso 05: Englobar la aplicacion con el contexto*/}
        <CartProvider>
          <Navbar />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:idProduct" element={<ItemDetailContainer />} />
            <Route path="*" element={<Error />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Checkout" element={<Checkout />} />
          </Routes>

          <Footer />
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
