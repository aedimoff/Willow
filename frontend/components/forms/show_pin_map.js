import React from "react";
import SellFormSubheader from "./sell_form_subheader";

class ShowPinMap extends React.Component {
  componentDidMount() {
    this.initMap()
  }
  initMap = () => {
    console.log("initMap");
    const geocoder = new google.maps.Geocoder();

    geocoder.geocode({ address: this.props.address }, (results, status) => {
      if (status == google.maps.GeocoderStatus.OK) {
        let geoCodeLat = results[0].geometry.location.lat();
        let geoCodeLng = results[0].geometry.location.lng();

        const center = { lat: "", lng: "" };

        //if lat/lng in state, use them otherwise use the geocode ones
        center.lat = this.props.lat === 0 ? geoCodeLat : this.props.lat;
        center.lng = this.props.lng === 0 ? geoCodeLng : this.props.lng;


        this.props.setPosition(center.lat, center.lng);

        map.current = new google.maps.Map(document.getElementById("map"), {
          center: center,
          zoom: 18.5,
          disableDefaultUI: true,
        });

        let marker = new google.maps.Marker({
          position: center,
          icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 8.5,
            fillColor: "#000000",
            fillOpacity: 0.4,
            strokeWeight: 0.4,
          },
        });

        marker.setMap(map.current);
      }
    });
  };

  render() {
    return (
      <div className="form-three">
        {console.log("rendered", this.state)}
        <SellFormSubheader listing={this.props} />
        <h4>Is this the correct location of your home?</h4>
        <div id="map" width="95vw" height="40vh">
        </div>
        <button className="button" onClick={() => this.props.toggleForm(4)}>
          Yes, it's the correct location
        </button>
        <button
          className="secondary-button"
          onClick={() => this.props.toggleForm(3)}
        >
          No, let me change it
        </button>
      </div>
    );
  }
}

export default ShowPinMap;
