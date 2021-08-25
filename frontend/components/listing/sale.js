import React from "react";
import StateDropdown from "./state_dropdown";

class SaleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.listing;
    this.setStateCode = this.setStateCode.bind(this);
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  setStateCode() {
    var select = document.getElementById('state-dropdown');
    var value = select.options[select.selectedIndex].value;
    this.setState( {["state"]: value})
  }

  render() {
      console.log("state", this.state)
    return (
      <form className="listing-create-form">
        <div className="form-background" />
        <img className="trapezoid" src={window.trapezoid} />
        <div className="form-input-field-wrapper">
          <label>
            <input
              className="create-listing-input"
              type="text"
              value={this.state.address}
              onChange={this.update("address")}
              placeholder="Street Address"
              id="street-address"
            />
          </label>
          <label>
            <input
              className="create-listing-input"
              type="text"
              value={this.state.city}
              onChange={this.update("city")}
              placeholder="City"
              id="city"
            />
          </label>
          <StateDropdown id="state-dropdown" onChange={this.setStateCode}/>
          <label>
            <input
              className="create-listing-input"
              type="text"
              value={this.state.zipcode}
              onChange={this.update("zipcode")}
              placeholder="Zip"
              id="zip"
            />
          </label>
        </div>
        <button id="continue-button">Continue</button>
      </form>
    );
  }
}

export default SaleForm;
