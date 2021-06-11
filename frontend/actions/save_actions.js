import * as SaveAPIUtil from '../util/save_api_util';

export const RECEIVE_ALL_SAVES = "RECEIVE_ALL_SAVES";
export const CREATE_SAVE = "CREATE_SAVE";
export const REMOVE_SAVE = "REMOVE_SAVE";

const receiveAllSaves = saves => ({
    type: RECEIVE_ALL_SAVES,
    saves
});

const receiveSave = save => ({
    type: CREATE_SAVE,
    save
})

const removeSave = saveId => ({
    type: REMOVE_SAVE,
    saveId
})

export const requestSaves = () => dispatch => {
    SaveAPIUtil.fetchAllSaves()
    .then(saves => dispatch(receiveAllSaves(saves)))
}

export const createSave = (userId, listingId) => dispatch => {
    return SaveAPIUtil.createSave(userId, listingId)
    .then(save => dispatch(receiveSave(save)))
}

export const deleteSave = saveId => dispatch => {
    SaveAPIUtil.deleteSave(saveId) 
    .then(saveId => dispatch(removeSave(saveId)))
}