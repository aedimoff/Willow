import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session_actions';
import Signup from './signup';

const mapDispatchToProps = dispatch => ({
    createNewUser: user => dispatch(createNewUser(user))
})

export default connect(null, mapDispatchToProps)(Signup)