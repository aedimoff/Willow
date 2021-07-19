import { connect } from 'react-redux';
import Search from "./search";
import { setPosition } from '../../actions/filter_actions';

// const mapStateToProps = state => ({
//     listings: Object.values(state.entities.listings),
//     userId: state.session.id,
//     saves: Object.values(state.entities.saves),
// })

const mapDispatchToProps = dispatch => ({
    setPosition: position => dispatch(setPosition(position)),
});

export default connect(null, mapDispatchToProps)(Search);