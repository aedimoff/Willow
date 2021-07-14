export const fetchAllSaves = () => (
    $.ajax({
        method: "GET",
        url: "api/saves"
    })
);

export const createSave = (userId, listingId) => (
        $.ajax({
        method: "POST",
        url: `api/saves`,
        data: {save: { user_id: userId, listing_id: listingId }}
    })
);

export const deleteSave = listingId => {
    return $.ajax({
        method: "DELETE",
        url: `api/saves/${listingId}`
    })
};