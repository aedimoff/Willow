import * as SaveAPIUtil from '../util/save_api_util';

export const RECEIVE_ALL_SAVES = "RECEIVE_ALL_SAVES";
export const CREATE_SAVE = "CREATE_SAVE";
export const REMOVE_SAVE = "REMOVE_SAVE";

const receiveAllSaves = saves => ({
    type: RECEIVE_ALL_SAVES,
    saves
});

const receiveSave = listing => ({
    type: CREATE_SAVE,
    listing
    })

const removeSave = listingId => ({
    type: REMOVE_SAVE,
    listingId
})

export const requestSaves = () => dispatch => {
    SaveAPIUtil.fetchAllSaves()
    .then(saves => dispatch(receiveAllSaves(saves)))
}

export const createSave = (userId, listing) => dispatch => {
    return SaveAPIUtil.createSave(userId, listing)
    .then(_response => dispatch(receiveSave(listing)))
}

export const deleteSave = listingId => dispatch => {
    SaveAPIUtil.deleteSave(listingId) 
    .then(_response => dispatch(removeSave(listingId)))
}