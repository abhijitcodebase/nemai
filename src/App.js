import PageHeader from "./components/PageHeader";
import Aside from "./components/Aside";
import HomePage from "./pages/Home";
import AddProduct from "./pages/Admin/Products/AddProduct";

import "./App.css";

function App() {
  return (
    <div className="container">
      <PageHeader />
      <Aside />
      <section className="main-content">
        <HomePage />
        <AddProduct />
      </section>
    </div>
  );
}

export default App;
