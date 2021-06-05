import React from 'react';

class ListingMap extends React.Component {
    componentDidMount() {
        const mapOptions = {
            center: { lat: 37.77, lng: -122.4 },
            zoom: 10
        };

        this.map = new google.maps.Map(this.mapNode, mapOptions)
    }
    render() {
       return(
        <div id='map-container' ref={ map => this.mapNode = map }>
            
        </div>
       )
    }
}

export default ListingMap;