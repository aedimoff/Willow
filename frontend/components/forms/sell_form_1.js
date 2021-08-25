import React from "react";
import StateDropdown from "./state_dropdown";

const SellFormStepOne = (props) => {
  if (props.currentStep !== 1) return null;
  return (
    <form className="listing-create-form">
      <div className="form-background" />
      <img className="trapezoid" src={window.trapezoid} />
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
        <StateDropdown id="state-dropdown" onChange={props.setStateCode} />
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
      </div>
      <button id="continue-button" onClick={() => props.toggleForm(2)}>
        Continue
      </button>
    </form>
  );
};

export default SellFormStepOne;
