import { connect } from 'react-redux';
import SavesIndex from './saves_index'
import { requestSaves, createSave, deleteSave } from '../../actions/save_actions';

const mapStateToProps = state => ({
    saves: state.entites.saves
})

const mapDispatchToProps = dispatch => ({
    requestSaves: () => dispatch(requestSaves()),
    createSave: save => dispatch(createSave(save)),
    deleteSave: saveId => dispatch(deleteSave(saveId)) 
})
