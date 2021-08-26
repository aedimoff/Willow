import React from "react";
import SellFormStepOne from "./sell_form_1";
import SellFormStepTwo from "./sell_form_2";
import SellFormStepThree from "./sell_form_3";
import MovePin from "./move_pin";
import ReviewAndSubmit from "./review_and_submit";
import UploadPhotos from "./upload_photos";

class SaleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { listing: this.props.listing, currentStep: 1 };
    this.update = this.update.bind(this);
    this.setDropDownField = this.setDropDownField.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.setPosition = this.setPosition.bind(this);
    this.handlePhotos = this.handlePhotos.bind(this);
  };

  update(field) {
    let input = document.getElementById(`${field}`);
    this.setState((prevState) => ({
      listing: {
        ...prevState.listing,
        [field]: input.value,
      },
      currentStep: prevState.currentStep,
    }));
  };

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
  };

  handlePhotos(files) {
    this.setState((prevState) => ({
      listing: {...prevState.listing,
        ["images"]: files
      },
      currentStep: prevState.currentStep,
    }));
  };

  setPosition(lat, lng) {
    this.setState((prevState) => ({
      listing: {
        ...prevState.listing,
        ["lat"]: lat,
        ["lng"]: lng,
      },
      currentStep: prevState.currentStep,
    }));
  };

  toggleForm(num) {
    this.setState({ currentStep: num });
  };

  formComponents(currentStep) {
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
      lat,
      lng,
    } = this.state.listing;

    switch (currentStep) {
      case 1:
        return (
          <SellFormStepOne
            toggleForm={this.toggleForm}
            address={address}
            city={city}
            zipcode={zipcode}
            setDropDownField={this.setDropDownField}
            update={this.update}
          />
        );
      case 2:
        return (
          <SellFormStepTwo
            setDropDownField={this.setDropDownField}
            beds={beds}
            baths={baths}
            price={price}
            propertyType={property_type}
            description={description}
            toggleForm={this.toggleForm}
            update={this.update}
          />
        );
      case 3:
        return (
          <SellFormStepThree
            address={address}
            city={city}
            state={state}
            zipcode={zipcode}
            lat={lat}
            lng={lng}
            setPosition={this.setPosition}
            toggleForm={this.toggleForm}
          />
        );
      case 4:
        return (
          <MovePin
            lat={lat}
            lng={lng}
            listing={this.state.listing}
            setPosition={this.setPosition}
            toggleForm={this.toggleForm}
          />
        );
      case 5:
        return (
          <UploadPhotos
            handlePhotos={this.handlePhotos}
            toggleForm={this.toggleForm}
          />
        );
      case 6:
        return (
          <ReviewAndSubmit
            submissionData={this.state.listing}
            createListing={this.props.createListing}
           
          />
        );
    }
  };

  render() {
    console.log("state", this.state);

    return <div className="sale-by-owner-page">{this.formComponents(4)}</div>;
    // return <div className="sale-by-owner-page">{this.formComponents(this.state.currentStep)}</div>;
  }
};

export default SaleForm;
