import { useState } from "react";
import Card from "../../components/Card";
import Popup from "../../components/Popup/Popup";
import AddProduct from "../Admin/Products/AddProduct";

const HomePage = ({ products, onAddProduct }) => {
  const [showAddProdPopup, setShowAddProdPopup] = useState(false);
  const [formData, setFormData] = useState({});

  const handleAddProduct = () => {
    onAddProduct(formData);
    setFormData({});
  };

  const handleCancleClick = () => {
    setShowAddProdPopup(false);
    setFormData({});
  };

  return (
    <>
      {products.length ? (
        products.map((prod) => <Card prod={prod} />)
      ) : (
        <h2>Sorry! No products found. Please add new product.</h2>
      )}

      <div className="fullwidth">
        <button className="primary" onClick={() => setShowAddProdPopup(true)}>
          Add Product
        </button>
      </div>

      {showAddProdPopup && (
        <Popup
          size={"wide"}
          primaryButtonText={"Save"}
          secondaryButtonText={"Cancel"}
          primaryButtonAction={handleAddProduct}
          secondaryButtonAction={handleCancleClick}
        >
          <AddProduct setFormData={setFormData} formData={formData} />
        </Popup>
      )}
    </>
  );
};

export default HomePage;
