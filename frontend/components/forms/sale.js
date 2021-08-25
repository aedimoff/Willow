import React from "react";
import SellFormStepOne from "./sell_form_1";

class SaleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { listing: this.props.listing, currentStep: 1 };
    this.update = this.update.bind(this)
    this.setStateCode = this.setStateCode.bind(this);
  }
  

  update(field) {
    let input = document.getElementById(`${field}`)
    this.setState(prevState => ({
      listing: {
        ...prevState.listing,
        [field]: input.value
      },
      currentStep: prevState.currentStep
    }))
    // console.log("input value", input.value)
    // return (e) => this.setState({listing: { [field]: e.currentTarget.value }});
  }

  setStateCode() {
    var select = document.getElementById("state-dropdown");
    var value = select.options[select.selectedIndex].value;
    this.setState(prevState => ({
      listing: {
        ...prevState.listing,
        state: value
      },
      currentStep: prevState.currentStep
    }))
  }

  toggleForm(num) {
    this.setState({ form: num });
  }

  render() {
    const { address, city, zipcode } = this.state.listing;
    console.log("state", this.state);
    return (
      <div>
        <SellFormStepOne
          currentStep={this.state.currentStep}
          toggleForm={this.toggleForm}
          address={address}
          city={city}
          zipcode={zipcode}
          setStateCode={this.setStateCode}
          update={this.update}
        />
      </div>
    );
  }
}

export default SaleForm;
