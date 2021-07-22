import React from "react";
import Markers from "../../util/markers";
class ListingMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      center: { lat: 37.77, lng: -122.4 },
      boundaryObj: {
        northEast: { lat: 39.77782736161393, lng: -120.88160734400154 },
        southWest: { lat: 35.706138683584875, lng: -123.91839265599847 },
      },
    };

    this.mapRefs = React.createRef();
  }

  componentDidMount() {
    this.map = new google.maps.Map(this.mapRefs.current, {
      center: new google.maps.LatLng(37.77, -122.4),
      zoom: 8,
    });

    this.mapListener = google.maps.event.addListener(this.map, "idle", () => {
      this.getBounds();
      this.updateMarkers()
    });
  }

  componentDidUpdate() {
    this.updateMarkers()
    const { position } = this.props;
    if (Object.keys(position).length && this.state.center !== position) {
      this.state.center = position;
      let lat = position.lat
      let lng = position.lng
      this.map.setCenter(lat, lng, 12);
    }
  }

  getBounds() {
    const boundaryObj = {};

    let bounds = this.map.getBounds();

    let north = bounds.getNorthEast().lat(); //39.77782736161393
    let east = bounds.getNorthEast().lng(); //-120.88160734400154
    let south = bounds.getSouthWest().lat(); //35.706138683584875
    let west = bounds.getSouthWest().lng(); // -123.91839265599847

    boundaryObj["northEast"] = { lat: north, lng: east };
    boundaryObj["southWest"] = { lat: south, lng: west };
    this.props.updateFilter("bounds", boundaryObj);
  }

  updateMarkers() {
    if(!this.props.listings.length) {
    } 
      this.Markers = new Markers(this.map, this.handleMarkerClick.bind(this));
      this.Markers.updateMarkers(this.props.listings);
  }

  handleMarkerClick(listing) {
    const { setSelectedListingId, openModal } = this.props;
    setSelectedListingId(listing.id);
    openModal("Listing Show", { size: "large" });
  }

  componentWillUnmount() {
    google.maps.event.removeListener(this.mapListener);
  }

  render() {
    return (
      <div
        id="map-container"
        ref={this.mapRefs}
      />
    );
  }
}

export default ListingMap;
