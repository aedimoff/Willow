import React from "react";
import StateDropdown from "./state_dropdown";
import SelectUSState from "react-select-us-states";

class SaleForm extends React.Component {
  constructor(props) {
    super(props);
    //bind selectStateDropdown
    //this.setStateValue = this.setStateValue.bind(this);
  }
  render() {
    return (
      <form className="listing-create-form">
        <div className="form-background" />
        <img className="trapezoid" src={window.trapezoid} />
        <div className="form-input-container">
          <label>
            <input
              className="create-listing-input"
              type="text"
              // value={this.state.address}
              // onChange={this.update("address")}
              placeholder="Street Address"
              id="street-address"
            />
          </label>
          <label>
            <input
              className="create-listing-input"
              type="text"
              // value={this.state.city}
              // onChange={this.update("city")}
              placeholder="City"
              id="city"
            />
          </label>
          {/* <label> */}
          {/* <input
                className="create-listing-input"
                type="text"
                value={this.state.state}
                onChange={this.update("state")}
                placeholder="State"
              />
            </label> */}
          <StateDropdown id="state-dropdown" />
          <label>
            <input
              className="create-listing-input"
              type="text"
              // value={this.state.zipcode}
              // onChange={this.update("zipcode")}
              placeholder="Zip"
              id="zip"
            />
          </label>
          {/* <label> */}
          {/* <input
                className="create-listing-input"
                type="text"
                value={this.state.beds}
                onChange={this.update("beds")}
                placeholder="Number of Beds"
              />
            </label> */}
          {/* <label> */}
          {/* <input
                className="create-listing-input"
                type="text"
                value={this.state.baths}
                onChange={this.update("baths")}
                placeholder="Number of Baths"
              />
            </label> */}
          {/* <label>
              <textarea
                className="create-listing-input"
                value={this.state.description}
                onChange={this.update("description")}
                placeholder="Description"
              />
            </label> */}
          {/* <label>
              <input
                className="create-listing-input"
                type="text"
                value={this.state.price}
                onChange={this.update("price")}
                placeholder="Listing Price"
              />
            </label> */}
          {/* <label>
              <select
                className="create-listing-input"
                value={this.state.property_type}
                onChange={this.update("property_type")}
                placeholder="Property Type"
              >
                <option placeholder="Select" />
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
                <option value="lot">Lot</option>
              </select>
            </label> */}
        </div>
      </form>
    );
  }
}

export default SaleForm;
