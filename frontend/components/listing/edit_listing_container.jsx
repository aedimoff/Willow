import React from "react";
import { connect } from "react-redux";
import { requestListing, updateListing, deleteListing } from "../../actions/listing_actions";
import { closeModal } from "../../actions/modal_actions";
import ListingForm from "./listing_form";

class EditListing extends React.Component {

  render() {
    const { action, formType, listing, closeModal } = this.props;

    if (!listing) return null;
    return (
      <ListingForm
        action={action}
        formType={formType}
        listing={listing}
        closeModal={closeModal}
        deleteListing={deleteListing}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  listing: state.entities.listings[state.ui.listingId.selectedListingId],
  formType: "Edit Listing",
});

const mapDispatchToProps = (dispatch) => ({
  //   requestListing: (listingId) => dispatch(requestListing(listingId)),
  action: (listing, listingId) => dispatch(updateListing(listing, listingId)),
  closeModal: () => dispatch(closeModal()),
  deleteListing: listingId => dispatch(deleteListing(listingId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditListing);
