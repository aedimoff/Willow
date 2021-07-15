import * as SaveAPIUtil from '../util/save_api_util';

export const RECEIVE_ALL_SAVES = "RECEIVE_ALL_SAVES";
export const CREATE_SAVE = "CREATE_SAVE";
export const REMOVE_SAVE = "REMOVE_SAVE";

const receiveAllSaves = saves => ({
    type: RECEIVE_ALL_SAVES,
    saves
});

const receiveSave = (listingId, userId) => ({
    type: CREATE_SAVE,
    listingId,
    userId
    })

const removeSave = listingId => ({
    type: REMOVE_SAVE,
    listingId
})

export const requestSaves = () => dispatch => {
    SaveAPIUtil.fetchAllSaves()
    .then(saves => dispatch(receiveAllSaves(Object.values(saves))))
}

export const createSave = (userId, listingId) => dispatch => {
    return SaveAPIUtil.createSave(userId, listingId)
    .then(_response => dispatch(receiveSave(listingId, userId)))
}

export const deleteSave = listingId => dispatch => {
    SaveAPIUtil.deleteSave(listingId) 
    .then(_response => dispatch(removeSave(listingId)))
}