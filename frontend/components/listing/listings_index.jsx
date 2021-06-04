import React from 'react';
import ListingIndexItem from './listing_index_item';

class ListingsIndex extends React.Component {
    componentDidMount() {
        this.props.requestListings()
    }

    render() {
        const { listings } = this.props;
        return (
            <div>
                <ul>
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