import { connect } from 'react-redux';
import ListingsIndex from './listings_index'
import { requestListings } from '../../actions/listing_actions';

const mapStateToProps = state => ({
    listings: Object.values(state.entities.listings)
})

const mapDispatchToProps = dispatch => ({
    requestListings: () => dispatch(requestListings())
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingsIndex)