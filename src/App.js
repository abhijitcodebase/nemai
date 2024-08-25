import { useState } from "react";
import PageHeader from "./components/PageHeader";
import Aside from "./components/Aside";
import HomePage from "./pages/Home";

import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  const onAddProduct = (prod) => {
    setProducts([...products, prod]);
  };

  return (
    <div className="container">
      <PageHeader />
      <Aside />
      <section className="main-content">
        <HomePage products={products} onAddProduct={onAddProduct} />
      </section>
    </div>
  );
}

export default App;
