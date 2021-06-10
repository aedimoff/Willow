import React from 'react';
import { BsHouseDoorFill } from 'react-icons/bs';

class ListingCreate extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = this.props.listing
    }

    handleSubmit(e) {
        console.log("in handlesubmit", this.props)
        e.preventDefault()
        this.props.createListing(this.state)
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value})
    }

    render() {
        console.log("createForm", this.props)
        return(
            <div className="listing-create-container">
                <form className="listing-create-form" onSubmit={this.handleSubmit}>
                    <div className="willow-header" >
                        <BsHouseDoorFill className="willow-icon"/>
                        <h1 className="header">Willow</h1>
                    </div>
                    <label className="input">Street Address
                        <input type="text" 
                        value={this.state.address}
                        onChange={this.update('address')}/>
                    </label>
                    <label className="input">City
                        <input type="text" 
                        value={this.state.city}
                        onChange={this.update('city')}/>
                    </label>
                    <label className="input">State
                        <input type="text" 
                        value={this.state.state}
                        onChange={this.update('state')}/>
                    </label>
                    <label className="input">Zipcode
                        <input type="text" 
                        value={this.state.zipcode}
                        onChange={this.update('zipcode')}/>
                    </label>
                    <label className="input">Number of Beds
                        <input type="text" 
                        value={this.state.beds}
                        onChange={this.update('beds')}/>
                    </label>
                    <label className="input">Number of Baths
                        <input type="text" 
                        value={this.state.baths}
                        onChange={this.update('baths')}/>
                    </label>
                    <label className="input">Description
                        <textarea
                        value={this.state.description}
                        onChange={this.update('description')}
                        />
                    </label>
                    <label className="input">Listing Price
                        <input type="text" 
                        value={this.state.price}
                        onChange={this.update('price')}/>
                    </label>
                    <label className="input">Property Type
                        <select value={this.state.property_type}
                            onChange={this.update('property_type')}>
                            <option defaultValue="Select"/>
                            <option value="house">House</option>
                            <option value="apartment">Apartment</option>
                            <option value="lot">Lot</option>
                        </select>
                    </label>
                    <button className="button" type="submit">Create Listing</button>
                </form>
            </div>
        )
    }
}

export default ListingCreate;