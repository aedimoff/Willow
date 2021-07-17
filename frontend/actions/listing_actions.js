import * as ListingAPIUtil from '../util/listing_api_util';


export const RECEIVE_ALL_LISTINGS = "RECEIVE_ALL_LISTINGS";
export const RECEIVE_LISTING = "RECEIVE_LISTING";
export const REMOVE_LISTING = "REMOVE_LISTING";
export const SET_SELECTED_LISTING_ID = "SET_SELECTED_LISTING_ID";

const receiveAllListings = listings => ({
    type: RECEIVE_ALL_LISTINGS,
    listings
});

const receiveListing = listing => ({
    type: RECEIVE_LISTING,
    listing
})

const setListing = selectedListingId => ({
    type: SET_SELECTED_LISTING_ID,
    selectedListingId
})

const removeListing = listingId => ({
    type: REMOVE_LISTING,
    listingId
})

export const setSelectedListingId = (selectedListingId) => dispatch => (
    dispatch(setListing(selectedListingId))
)

export const requestListings = filters => dispatch => {
    ListingAPIUtil.fetchAllListings(filters)
    .then(listings => dispatch(receiveAllListings(listings)))
}

export const requestListing = (listingId) => dispatch => (
    ListingAPIUtil.fetchListing(listingId)
    .then(listing => dispatch(receiveListing(listing)))
)
export const createListing = (listing) => dispatch => {
    return (ListingAPIUtil.createListing(listing)
    .then(listing => dispatch(receiveListing(listing))))
}
export const updateListing = (listing) => dispatch => (
    ListingAPIUtil.updateListing(listing)
    .then(listing => dispatch(receiveListing(listing)))
)
export const deleteListing = (listingId) => dispatch => (
    ListingAPIUtil.deleteListing(listingId) 
    .then(() => dispatch(removeListing(listingId)))
)