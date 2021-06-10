import React from 'react';

class ListingCreate extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = this.props.listing
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.createListing(this.props.listing)
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value})
    }

    render() {
        console.log("listingCreate", this.props)
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Street Address
                        <input type="text" 
                        value={this.state.address}
                        onChange={this.update('address')}/>
                    </label>
                    <label>Street Address
                        <input type="text" 
                        value={this.state.address}
                        onChange={this.update('address')}/>
                    </label>
                    <label>City
                        <input type="text" 
                        value={this.state.city}
                        onChange={this.update('city')}/>
                    </label>
                    <label>State
                        <input type="text" 
                        value={this.state.state}
                        onChange={this.update('state')}/>
                    </label>
                    <label>Zipcode
                        <input type="text" 
                        value={this.state.zipcode}
                        onChange={this.update('zipcode')}/>
                    </label>
                    <label>Number of Beds
                        <input type="text" 
                        value={this.state.beds}
                        onChange={this.update('beds')}/>
                    </label>
                    <label>Number of Baths
                        <input type="text" 
                        value={this.state.baths}
                        onChange={this.update('baths')}/>
                    </label>
                    <label>Description
                        <textarea
                        value={this.state.address}
                        onChange={this.update('address')}
                        />
                    </label>
                    <label>Listing Price
                        <input type="text" 
                        value={this.state.price}
                        onChange={this.update('price')}/>
                    </label>
                    <label>Property Type
                        <select value={this.state.property_type}>
                            <option value="house">House</option>
                            <option value="apartment">Apartment</option>
                            <option value="lot">Lot</option>
                        </select>
                    </label>
                </form>
            </div>
        )
    }
}

export default ListingCreate;