import { connect } from 'react-redux';
import Search from "./search";
import { setPosition } from '../../actions/filter_actions';

const mapDispatchToProps = dispatch => ({
    setPosition: position => dispatch(setPosition(position)),
});

export default connect(null, mapDispatchToProps)(Search);