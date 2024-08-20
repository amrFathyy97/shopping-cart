import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Product from "./UI/Products/Product";
import Up from "./UI/up/Up";
import "react-toastify/dist/ReactToastify.css";
import { createContext, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { CartContextType } from "./types/CartContext.type";
import ProductsComponent from "./Components/Products";
import Home from "./Components/Home";

export const CartContext = createContext<CartContextType | null>(null);

const storage =
  JSON.parse(
     window.localStorage.getItem("shopping-cart") 
  ) || [];

const App = () => {
  const [cart, setCart] = useState(storage? storage : []);

  useEffect(() => {
    window.localStorage.setItem("shopping-cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <BrowserRouter>
      <ToastContainer />
      <CartContext.Provider value={{ cart, setCart }}>
      <Navbar />
      <Up />
        <Routes>
          <Route path="/products" element={<ProductsComponent />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<h1 className="my-10">Not Found</h1>} />
        </Routes>
      </CartContext.Provider>
    </BrowserRouter>
  );
};

export default App;
