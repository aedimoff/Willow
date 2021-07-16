import React from 'react';
import Markers from '../../util/markers';

class ListingMap extends React.Component {
    componentDidMount() {
        const mapOptions = {
            center: { lat: 37.77, lng: -122.4 },
            zoom: 10
        };

        this.map = new google.maps.Map(this.mapNode, mapOptions)
        this.Markers = new Markers(this.map)
        this.Markers.updateMarkers(this.props.listings)
    }

    componentDidUpdate() {
        this.Markers.updateMarkers(this.props.listings)
    }
    render() {
       return(
        <div id='map-container' ref={ map => this.mapNode = map }>
            
        </div>
       )
    }
}

export default ListingMap;