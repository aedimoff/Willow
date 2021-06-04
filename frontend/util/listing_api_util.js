export const fetchAllListings = () => (
    $.ajax({
        method: "GET",
        url: "api/listings"
    })
)

export const fetchListing = listingId => (
    $.ajax({
        method: "GET",
        url:`api/listings/${listingId}`
    })
)

export const createListing = listing => (
    $.ajax({
        method: "POST",
        url: 'api/listings',
        data: { listing }
    })
)

export const updateListing = listingId => (
    $.ajax({
        method: "PATCH",
        url: `api/listings/${listingId}`,
        data: { listing }
    })
)

export const deleteListing = listingId => (
    $.ajax({
        method: "DELETE",
        url: `api/listings/${listingId}`
    })
)