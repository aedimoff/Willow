import { connect } from 'react-redux';
import Welcome from './welcome';
import { openModal } from '../../actions/modal_actions'


const mapDispatchToProps = dispatch => ({
  openModal: (modal) => dispatch(openModal(modal))
});

export default connect(null, mapDispatchToProps)(Welcome);
