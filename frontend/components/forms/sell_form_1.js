import React from "react";
import SellFormHeader from "./sell_form_header";
import SellFormFooter from './sell_form_footer';
import StateDropdown from "./state_dropdown";


const SellFormStepOne = (props) => {
  return (
    <div className="listing-create-form">
      <SellFormHeader/>
      <div className="form-input-field-wrapper">
        <label>
          <input
            className="create-listing-input"
            type="text"
            value={props.address}
            onChange={() => props.update("address")}
            placeholder="Street Address"
            id="address"
          />
        </label>
        <label>
          <input
            className="create-listing-input"
            type="text"
            value={props.city}
            onChange={() => props.update("city")}
            placeholder="City"
            id="city"
          />
        </label>
        <StateDropdown id="state" onChange={props.setDropDownField} />
        <label>
          <input
            className="create-listing-input"
            type="text"
            value={props.zipcode}
            onChange={() => props.update("zipcode")}
            placeholder="Zip"
            id="zipcode"
          />
        </label>
      <button id="continue-button" onClick={() => props.toggleForm(2)}>
        Continue
      </button>
      </div>
      <SellFormFooter />
    </div>
  );
};

export default SellFormStepOne;
