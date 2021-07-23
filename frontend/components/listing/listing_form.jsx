import React from "react";
import { MdClose } from "react-icons/md";

class ListingForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = this.props.listing;
  }

  handleSubmit(e) {
    if (this.props.formType === "Create Listing") {
      e.preventDefault();
      const formData = new FormData();
      formData.append("listing[address]", this.state.address);
      formData.append("listing[description]", this.state.description);
      formData.append("listing[zipcode]", this.state.zipcode);
      formData.append("listing[city]", this.state.city);
      formData.append("listing[state]", this.state.state);
      formData.append("listing[price]", this.state.price);
      formData.append("listing[status]", this.state.status);
      formData.append("listing[property_type]", this.state.property_type);
      formData.append("listing[beds]", this.state.beds);
      formData.append("listing[baths]", this.state.baths);
      formData.append("listing[seller_id", this.props.sellerId);
      formData.append("listing[lat]", this.state.lat);
      formData.append("listing[lng]", this.state.lng);

      const { images } = this.state;
      for (let i = 0; i < images.length; i++) {
        formData.append("listing[images][]", images[i]);
      }
      this.props.action(formData);
    } else {
      this.props.action(this.state, this.props.listing.id);
    }
  }

  handleClick(listingId) {
    this.props.deleteListing(listingId);
  }

  handleFile(e) {
    this.setState({ images: e.currentTarget.files });
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    return (
      <div className="listing-create-container">
        <div className="close-x" onClick={() => this.props.closeModal()}>
          <MdClose id="close-x" size={40} />
        </div>

        <img className="form-logo" src={window.logo} alt="willow logo" />

        <h3 className="listing-header">Sell Your Home on Willow!</h3>
        <form className="listing-create-form">
          <label>
            <input
              className="create-listing-input"
              type="text"
              value={this.state.address}
              onChange={this.update("address")}
              placeholder="Street Address"
            />
          </label>
          <label>
            <input
              className="create-listing-input"
              type="text"
              value={this.state.city}
              onChange={this.update("city")}
              placeholder="City"
            />
          </label>
          <label>
            <input
              className="create-listing-input"
              type="text"
              value={this.state.state}
              onChange={this.update("state")}
              placeholder="State"
            />
          </label>
          <label>
            <input
              className="create-listing-input"
              type="text"
              value={this.state.zipcode}
              onChange={this.update("zipcode")}
              placeholder="Zipcode"
            />
          </label>
          <label>
            <input
              className="create-listing-input"
              type="text"
              value={this.state.beds}
              onChange={this.update("beds")}
              placeholder="Number of Beds"
            />
          </label>
          <label>
            <input
              className="create-listing-input"
              type="text"
              value={this.state.baths}
              onChange={this.update("baths")}
              placeholder="Number of Baths"
            />
          </label>
          <label>
            <textarea
              className="create-listing-input"
              value={this.state.description}
              onChange={this.update("description")}
              placeholder="Description"
            />
          </label>
          <label>
            <input
              className="create-listing-input"
              type="text"
              value={this.state.price}
              onChange={this.update("price")}
              placeholder="Listing Price"
            />
          </label>
          <label>
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
          </label>
          <div className="upload-button-container">
            <input
              className="upload-button"
              type="file"
              onChange={(e) => this.setState({ images: e.target.files })}
              multiple
            />
          </div>
          <button
            className="button"
            id="create-listing-button"
            type="submit"
            onClick={(e) => {
              this.handleSubmit(e), this.props.closeModal();
            }}
          >
            {this.props.formType}
          </button>
        </form>
        {this.props.formType === "Edit Listing" ? 
          <button
            id="delete-listing-button"
            onClick={this.props.deleteListing(this.props.listing.id)}
          >
            No longer selling? Delete this listing
          </button> : ""}
      </div>
    );
  }
}

export default ListingForm;
