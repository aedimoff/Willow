export const fetchAllSaves = () => (
    $.ajax({
        method: "GET",
        url: "api/saves"
    })
);

export const createSave = (saverId, listing) => (
        $.ajax({
        method: "POST",
        url: `api/saves`,
        data: {save: { user_id: saverId, listing_id: listing.id }}
    })
);

export const deleteSave = listingId => {
    return $.ajax({
        method: "DELETE",
        url: `api/saves/${listingId}`
    })
};