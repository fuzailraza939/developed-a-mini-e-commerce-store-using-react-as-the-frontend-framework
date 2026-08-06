import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./components/pages/Shop";
import Home from "./components/pages/home/Home";
import Contact from "./components/pages/Contactus";
import About from "./components/pages/About";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Checkout from "./components/pages/Checkout";
import Cart from "./components/pages/Cart";





function App() {

  let siteName = "Zenvy"
  const [count , setCount] = useState(0)

  return (
    <>


      <BrowserRouter>
        <Header title={siteName} count={count}/>
        <Routes>
          <Route path="/" element={<Home count={count} setCount={setCount}/>} />
          <Route path="/shop" element={<Shop count={count} setCount={setCount}/>} />
          <Route path="/checkout" element={<Checkout  />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
        <Footer title={siteName} />
      </BrowserRouter>




    </>




  )
}

export default App
