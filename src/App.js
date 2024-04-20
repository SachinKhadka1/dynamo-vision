import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Portfolio from "./components/Portfolio/Portfolio";
import Packages from "./components/Packages/Packages";
import Cart from "./components/Cart/Cart";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
// import Cart from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Portfolio />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/cart" component={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
