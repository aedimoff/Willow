import { connect } from 'react-redux';
import Search from './search';
import { receiveAllListings } from '../../actions/listing_actions';

const mapStateToProps = state => ({
    listings: Object.values(state.entities.listings)
})

const mapDispatchToProps = dispatch => ({
    receiveAllListings: () => dispatch(receiveAllListings())
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)