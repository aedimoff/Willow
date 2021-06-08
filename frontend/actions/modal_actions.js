export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const openModal = (modal, params={}) => ({
    type: OPEN_MODAL,
    modal,
    params
});

export const closeModal = () => ({
    type: CLOSE_MODAL
});