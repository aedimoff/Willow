import React from 'react';
import Markers from '../../util/markers';

const mapOptions = {
    center: { lat: 37.77, lng: -122.4 },
    zoom: 10
};
class ListingMap extends React.Component {

    setMap() {
        const map = this.refs.map;
        this.map = new google.maps.Map(map, mapOptions);
        return this.map;
    }

    componentDidMount() {
        this.map = this.setMap();
        this.getBounds()
        
        this.Markers = new Markers(this.map, this.handleMarkerClick.bind(this));
        this.Markers.updateMarkers(this.props.listings);
    }

    componentDidUpdate() {
        this.Markers.updateMarkers(this.props.listings)
    }

    handleMarkerClick(listing) {
        const { setSelectedListingId, openModal } = this.props;
        setSelectedListingId(listing.id)
        openModal("Listing Show", { size: "large" });
    }

    getBounds() {
        this.map = this.setMap()
        const boundaryObj = {}
        google.maps.event.addListener(this.map, "idle", () => {
            let bounds = this.map.getBounds()
            let west = bounds.Eb.g
            let east = bounds.Eb.i
            let south = bounds.lc.g
            let north = bounds.lc.i
            boundaryObj["northEast"] = { lat: north, lng: east }
            boundaryObj["southWest"] = { lat: south, lng: west }
            this.props.updateFilter("bounds", boundaryObj);            
        })
    }

    render() {
       return(
        <div id='map-container' ref='map'>
            
        </div>
       )
    }
}

export default ListingMap;