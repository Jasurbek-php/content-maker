import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Card from './component/Card/Card';
import './App.css';
import ProductInfo from './router/ProductInfo';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/product-info" element={<ProductInfo />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
