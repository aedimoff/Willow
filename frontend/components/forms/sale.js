import React from "react";
import SellFormStepOne from "./sell_form_1";
import SellFormStepTwo from "./sell_form_2";
import SellFormStepThree from "./sell_form_3";

class SaleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { listing: this.props.listing, currentStep: 1 };
    this.update = this.update.bind(this);
    this.setDropDownField = this.setDropDownField.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.setPosition = this.setPosition.bind(this);
  }

  update(field) {
    let input = document.getElementById(`${field}`);
    this.setState((prevState) => ({
      listing: {
        ...prevState.listing,
        [field]: input.value,
      },
      currentStep: prevState.currentStep,
    }));
  }

  setDropDownField(field) {
    let select = document.getElementById(`${field}`);
    let value = select.options[select.selectedIndex].value;
    this.setState((prevState) => ({
      listing: {
        ...prevState.listing,
        [field]: value,
      },
      currentStep: prevState.currentStep,
    }));
  }

  setPosition(lat, lng) {

  }

  toggleForm(num) {
    this.setState({ currentStep: num });
  }

  render() {
    const {
      address,
      city,
      zipcode,
      state,
      beds,
      baths,
      price,
      description,
      property_type,
    } = this.state.listing;
    return (
      <div className="sale-by-owner-page">
        {/* <SellFormStepOne
          currentStep={this.state.currentStep}
          toggleForm={this.toggleForm}
          address={address}
          city={city}
          zipcode={zipcode}
          setDropDownField={this.setDropDownField}
          update={this.update}
        />
        <SellFormStepTwo
          currentStep={this.state.currentStep}
          setDropDownField={this.setDropDownField}
          beds={beds}
          baths={baths}
          price={price}
          propertyType={property_type}
          description={description}
          toggleForm={this.toggleForm}
        /> */}
        <SellFormStepThree
          currentStep={this.state.currentStep}
          address={address}
          city={city}
          state={state}
          zipcode={zipcode}
          setPosition={this.setPosition}
        />
      </div>
    );
  }
}

export default SaleForm;
