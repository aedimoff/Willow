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

export const createListing = listing => {
    return $.ajax({
        method: "POST",
        url: 'api/listings',
        data: listing,
        contentType: false,
        processData: false
    })
}

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