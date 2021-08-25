import React from "react";
import StateDropdown from "./state_dropdown";

class SaleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {listing: this.props.listing, form: 1};
    this.setStateCode = this.setStateCode.bind(this);
  }

  update(field) {
    return (e) => this.setState({listing: { [field]: e.currentTarget.value }});
  }

  setStateCode() {
    var select = document.getElementById('state-dropdown');
    var value = select.options[select.selectedIndex].value;
    this.setState( {listing: {["state"]: value}})
  }

  showForm(num) {
      if(num === 1) {
          return (
            <form className="listing-create-form">
                <div className="form-background" />
                <img className="trapezoid" src={window.trapezoid} />
                <div className="form-input-field-wrapper">
                    <label>
                        <input
                            className="create-listing-input"
                            type="text"
                            value={this.state.listing.address}
                            onChange={this.update("address")}
                            placeholder="Street Address"
                            id="street-address"
                        />
                    </label>
                    <label>
                        <input
                            className="create-listing-input"
                            type="text"
                            value={this.state.listing.city}
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
                            value={this.state.listing.zipcode}
                            onChange={this.update("zipcode")}
                            placeholder="Zip"
                            id="zip"
                        />
                    </label>
                </div>
                <button id="continue-button" onClick={() => this.setState({form: 2})}>Continue</button>
            </form>
          );
      } else {
          return (
            <div>FORM 2</div>
          );
      }
  }

  render() {
      console.log("state", this.state)
    return (
        <div>
            {this.showForm(this.state.form)}
        </div>
    );
  }
}

export default SaleForm;
