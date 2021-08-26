import React, { useEffect, useRef } from "react";

class MovePin extends React.Component {
  constructor(props) {
    super(props)
    this.state = { lat: this.props.lat, lng: this.props.lng };
    this.initMap = this.initMap.bind(this);
  }
  // if (props.currentStep !== 4) return null;

  componentDidMount() {
    this.initMap();
  }

  initMap = () => {
    const center = { lat: this.props.lat, lng: this.props.lng };

    map.current = new google.maps.Map(document.getElementById("map"), {
      center: center,
      zoom: 19.5,
      disableDefaultUI: true,
    });

    let marker = new google.maps.Marker({
      position: center,
      draggable: true,
      animation: google.maps.Animation.DROP,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 8.5,
        fillColor: "#000000",
        fillOpacity: 0.4,
        strokeWeight: 0.4,
      },
    });

    marker.setMap(map.current);

    google.maps.event.addListener(marker, "dragend", (e) => {
      this.setState({ lat: e.latLng.lat(), lng: e.latLng.lng()});      
    });
  };

  render() {
    const { lat, lng } = this.state;
    return (
      <div>
        <h3>
          Drag the pin to the correct location and your home will be placed
          there
        </h3>
        <h4>
          Currently selected: {lat.toFixed(4)},{" "}
          {lng.toFixed(4)}
        </h4>
        <div id="map" width="95vw" height="40vh" />
        <button className="button" onClick={() => {this.props.setPosition(lat, lng)}}>Save and Continue</button>
      </div>
    );
  }
}

export default MovePin;
