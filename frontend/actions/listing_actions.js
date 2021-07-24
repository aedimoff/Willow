import * as ListingAPIUtil from "../util/listing_api_util";

export const RECEIVE_ALL_LISTINGS = "RECEIVE_ALL_LISTINGS";
export const RECEIVE_LISTING = "RECEIVE_LISTING";
export const REMOVE_LISTING = "REMOVE_LISTING";
export const SET_SELECTED_LISTING_ID = "SET_SELECTED_LISTING_ID";

const receiveAllListings = (listings) => {
  return { type: RECEIVE_ALL_LISTINGS, listings };
};

const receiveListing = (listing) => ({
  type: RECEIVE_LISTING,
  listing,
});

const removeListing = (listingId) => ({
  type: REMOVE_LISTING,
  listingId,
});

const setListing = (selectedListingId) => ({
  type: SET_SELECTED_LISTING_ID,
  selectedListingId,
});



//Modal specific action
export const setSelectedListingId = (selectedListingId) => (dispatch) =>
  dispatch(setListing(selectedListingId));




//GET listing actions
export const requestListings = (filters) => (dispatch) => {
  ListingAPIUtil.fetchAllListings(filters).then((listings) =>
    dispatch(receiveAllListings(listings))
  );
};

export const requestSavedListings = () => (dispatch) => {
  ListingAPIUtil.fetchSavedListings().then((listings) =>
    dispatch(receiveAllListings(listings))
  );
};

export const requestListing = (listingId) => (dispatch) =>
  ListingAPIUtil.fetchListing(listingId).then((listing) =>
    dispatch(receiveListing(listing))
  );

export const requestUsersListings = (userId) => (dispatch) =>
  ListingAPIUtil.fetchUsersListings(userId).then((listings) =>
    dispatch(receiveAllListings(listings))
  );



//CRUD actions
export const createListing = (listing) => (dispatch) =>
  ListingAPIUtil.createListing(listing).then((listing) =>
    dispatch(receiveListing(listing))
  );
export const updateListing = (listing, listingId) => (dispatch) =>
  ListingAPIUtil.updateListing(listing, listingId).then((listing) =>
    dispatch(receiveListing(listing))
  );
export const deleteListing = (listingId) => (dispatch) =>
  ListingAPIUtil.deleteListing(listingId).then((_response) =>
    dispatch(removeListing(listingId))
  );
