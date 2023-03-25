import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home.jsx";
import Header from "./components/Header.jsx";
import { Toaster } from "react-hot-toast";

import "./styles/App.scss"
import Cart from "./components/Cart.jsx";


function App() {
  return (
   <BrowserRouter>
   <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
    <Toaster />
   </BrowserRouter>
  )
}

export default App
