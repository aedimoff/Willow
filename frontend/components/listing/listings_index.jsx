import React from 'react';
import ListingIndexItem from './listing_index_item';
import Spinner from '../spinner/spinner';

class ListingsIndex extends React.Component {
    componentDidMount() {
        console.log(this.props)
        this.props.requestListings()
    }

    render() {
        const { listings } = this.props;
        const display = listings[listings.length - 1] ? 
            (<ul className="listing-index-container">
                    {
                        listings.map(listing => (
                            <ListingIndexItem 
                                key={listing.id}
                                listing={listing}
                            />
                        ))
                    }
                </ul>) : <Spinner /> 

        return (
            <div className="listing-grid-container">
                {display}
                {/* <h1 className="listing-header">Real Estate & Homes for Sale</h1> */}
            </div>
        )
    }
}

export default ListingsIndex;