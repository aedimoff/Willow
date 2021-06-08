import React from 'react';
import ListingIndexItem from './listing_index_item';
import Spinner from '../spinner/spinner';

class ListingsIndex extends React.Component {
    componentDidMount() {
        this.props.requestListings()
    }

    render() {
        const { listings, openModal, requestListing } = this.props;
        console.log("listings in listings index", listings)
        const display = listings[listings.length - 1] ? 
            (<ul className="listing-index-container">
                    {
                        listings.map(listing => (
                            <ListingIndexItem 
                                key={listing.id}
                                listing={listing}
                                openModal={openModal}
                                requestListing={requestListing}
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