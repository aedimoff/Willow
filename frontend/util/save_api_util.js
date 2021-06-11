export const fetchAllSaves = () => (
    $.ajax({
        method: "GET",
        url: "api/saves"
    })
);

export const createSave = (saverId, listingId) => (
        $.ajax({
        method: "POST",
        url: `api/saves`,
        data: {save: { saver_id: saverId, listing_id: listingId }}
    })
);

export const deleteSave = saveId => (
    $.ajax({
        method: "DELETE",
        url: `api/saves/${saveId}`
    })
);