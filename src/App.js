import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './views/Layout'
import Home from './views/Home';
import Products from './views/Products';
import AddProduct from './views/AddProduct';
import Sebet from './views/Sebet';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Products" element={<Products />} />
          <Route path="AddProduct" element={<AddProduct />} />
          <Route path="Sebet" element={<Sebet />} />
          {/* <Route path="/haqqimizda" element={<Haqqimizda />} />
          <Route path="xidmetler" element={<Xidmetler />} />
          <Route path="/elaqe" element={<Elaqe />} />
          <Route path="/esmira" element={<Esmira />} /> */}
        </Route>
      </Routes>
    </Router>
  )
}

export default App
