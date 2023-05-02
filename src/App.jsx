import './App.css'
import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemDetailContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./components/CartContext/CartContext";
import Item from './components/Item/Item';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <CartProvider>
         <NavBar />
          <Routes>
            <Route path = "/" element = { <ItemListContainer />} />
            <Route path = "/lista" element = { <Item /> } />
            <Route path = "/category/:categoryId" element = { <ItemListContainer /> } />
            <Route path = "/item/:itemId" element = { <ItemDetailContainer /> } />
            <Route path = " * " element = { <h1> 404 NOT FOUND </h1> } />
          </Routes>
          </CartProvider>  
      </BrowserRouter>
    </div>
  );
}

export default App;
