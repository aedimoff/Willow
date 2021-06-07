import React from 'react';
import ListingIndexItem from './listing_index_item';

class ListingsIndex extends React.Component {
    componentDidMount() {
        console.log(this.props)
        this.props.requestListings()
    }

    render() {
        const { listings } = this.props;
        return (
            <div className="listing-grid-container">
                {/* <h1 className="listing-header">Real Estate & Homes for Sale</h1> */}
                <ul className="listing-index-container">
                    {
                        listings.map(listing => (
                            <ListingIndexItem 
                                key={listing.id}
                                listing={listing}
                            />
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default ListingsIndex;