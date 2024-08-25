import { useState, useEffect } from "react";
import Popup from "../../../components/Popup/Popup";

const AddProduct = ({ setFormData, formData }) => {
  const updateFormData = (prop, value) => {
    setFormData({ ...formData, [prop]: value });
  };
  // console.log(formData);
  // Class base component
  // componentDidMount => 1 time at time of component mount
  // componentDidUpdate => After component mount on very state change
  // componentUnmount => On component unmount

  // Function base component
  // useEffect => all kind of side effects.
  // if dependency array is empty then it will behave like componentDidMount
  // if dependency array is not empty, then on evry update of the array elements it will be called i.e. behave like componentDidUpdate
  // Inside useEffect callback funtion if there is any funtion in its return that funtion will only be called on component unmount.

  useEffect(() => {
    if (formData.price < 1) {
      setFormData((formData) => {
        return {
          ...formData,
          price: 1,
        };
      });
    }
  }, [formData.price]);

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
      </form>
    </>
  );
};

export default AddProduct;
