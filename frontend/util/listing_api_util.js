export const fetchAllListings = (data) =>
  $.ajax({
    method: "GET",
    url: "api/listings",
    data: data,
  });

export const fetchListing = (listingId) =>
  $.ajax({
    method: "GET",
    url: `api/listings/${listingId}`,
  });

export const fetchUsersListings = userId => (
  $.ajax({
    method: "GET",
    url: `api/users/${userId}/listings`,
  })
);

export const fetchSavedListings = () =>
  $.ajax({
    method: "GET",
    url: `api/saved_listings`,
  });

export const createListing = listing => (
  $.ajax({
    method: "POST",
    url: "api/listings",
    data: listing,
    contentType: false,
    processData: false,
  })
);

export const updateListing = (listing, listingId) =>
  $.ajax({
    method: "PATCH",
    url: `api/listings/${listingId}`,
    data: { listing: listing },
  });

export const deleteListing = (listingId) =>
  $.ajax({
    method: "DELETE",
    url: `api/listings/${listingId}`,
  });
