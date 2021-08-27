import React from "react";
import SellFormHeader from "./sell_form_header";
import SellFormFooter from "./sell_form_footer";

const SellFormStepTwo = (props) => {
  return (
    <div className="listing-create-form">
      <SellFormHeader />
      <div className="form-input-field-wrapper">
        <select
          className="dropdown-item"
          id="beds"
          onChange={() => props.setDropDownField("beds")}
        >
          <option value="" disable="true">
            Beds
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6+</option>
        </select>
        <select
          className="dropdown-item"
          id="baths"
          onChange={() => props.setDropDownField("baths")}
        >
          <option value="" disable="true">
            Baths
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4+</option>
        </select>
        <select
          className="dropdown-item"
          id="property_type"
          onChange={() => props.setDropDownField("property_type")}
        >
          <option value="" disable="true">
            Property Type
          </option>
          <option value="House">House</option>
          <option value="Apartment">Apartment</option>
          <option value="Lot">Lot</option>
        </select>
        <label>
          <input
            className="create-listing-input"
            type="text"
            value={props.price}
            onChange={() => props.update("price")}
            placeholder="$ Listing Price"
            id="price"
          />
        </label>
        <label>
          <textarea
            className="create-listing-input"
            value={props.description}
            onChange={() => props.update("description")}
            placeholder="Description"
            id="description"
          />
        </label>
      <button id="continue-button" onClick={() => props.toggleForm(5)}>
        Continue
      </button>
      <button id="continue-button-2" onClick={() => props.toggleForm(2)}>
        Go Back
      </button>
      </div>
      <SellFormFooter />
    </div>
  );
};

export default SellFormStepTwo;
