import { useState, useEffect } from "react";

const AddProduct = () => {
  const [formData, setFormData] = useState({});
  const [showData, setShowData] = useState(false);

  const updateFormData = (prop, value) => {
    setShowData(false);
    setFormData({ ...formData, [prop]: value });
  };

  const handleAddClick = (e) => {
    e.preventDefault();
    setShowData(true);
  };

  console.log(formData);

  return (
    <>
      <form className="add-product">
        <p>
          <label>Name:</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => updateFormData("name", e.target.value)}
          />
        </p>
        <p>
          <label>Description:</label>
          <textarea
            value={formData.description}
            onChange={(e) => updateFormData("description", e.target.value)}
          />
        </p>
        <p>
          <label>Image:</label>
          <input
            type="text"
            value={formData.imageURL}
            onChange={(e) => updateFormData("imageURL", e.target.value)}
          />
        </p>
        <p>
          <label>Price:</label>
          <input
            type="number"
            value={formData.price}
            onChange={(e) => updateFormData("price", e.target.value)}
          />
        </p>
        <button onClick={handleAddClick}>Add</button>
      </form>

      <div className="card">
        <div>Image: {showData && formData.imageURL}</div>
        <p>Name: {showData && formData.name}</p>
        <p>Description : {showData && formData.description}</p>
        <p>Price: {showData && formData.price} </p>
      </div>
    </>
  );
};

export default AddProduct;
