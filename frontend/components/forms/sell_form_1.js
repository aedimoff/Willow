import React, { useState } from "react";
import SellFormHeader from "./sell_form_header";
import SellFormFooter from "./sell_form_footer";
import StateDropdown from "./state_dropdown";
import RenderErrors from "../session/render_form_errors";

const SellFormStepOne = (props) => {
  const checkForFormFieldCompletion = () => {
    if (props.address === "" || props.city === "" || props.zipcode === "") {
      if (props.address === "") {
        setAddressError(!addressError);
      }
      if (props.city === "") {
        setCityError(!cityError);
      }
      if (props.zipcode === "") {
        setZipError(!zipError);
      }
    } else {
      props.toggleForm(2);
    }
  };

  const [addressError, setAddressError] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [zipError, setZipError] = useState(false);

  return (
    <div className="listing-create-form">
      <SellFormHeader id="form-1-errors" />
      {console.log("errors?", props)}
      <div className="form-input-field-wrapper">
        <label>
          <input
            className={`create-listing-input address-input-error-${addressError}`}
            type="text"
            value={props.address}
            onChange={() => props.update("address")}
            placeholder="Street Address"
            id="address"
          />
        </label>
        <label>
          <input
            className={`create-listing-input city-error-${cityError}`}
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
            className={`create-listing-input zip-error-${zipError}`}
            type="text"
            value={props.zipcode}
            onChange={() => props.update("zipcode")}
            placeholder="Zip"
            id="zipcode"
          />
        </label>
        <button
          id="continue-button"
          onClick={() => checkForFormFieldCompletion()}
        >
          Continue
        </button>
      </div>
      <div className="form-errors" id="form-1-errors">
        <ul id={`address-error-${addressError}`}>
          {"You must specify an address"}
        </ul>
        <ul id={`city-error-${cityError}`}>
          {"Please enter a city"}
        </ul>
        <ul id={`zip-error-${zipError}`}>
          {"Please enter a ZIP code"}
        </ul>
      </div>
      <SellFormFooter />
    </div>
  );
};

export default SellFormStepOne;
