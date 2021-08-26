import React, { useEffect, useRef } from "react";
import SellFormSubheader from "./sell_form_subheader";

const SellFormStepThree = (props) => {
  // if (props.currentStep !== 3) return null;

  const { address, city, state, zipcode } = props;
  const map = useRef();

  const initMap = () => {
    const geocoder = new google.maps.Geocoder();

    geocoder.geocode({ address: address }, (results, status) => {
      if (status == google.maps.GeocoderStatus.OK) {
        let geoCodeLat = results[0].geometry.location.lat();
        let geoCodeLng = results[0].geometry.location.lng();

        const center = { lat: "", lng: "" };

        //if a real lat/lng in state, use them
        //otherwise use the geocode ones
        center.lat = props.lat === 0 ? geoCodeLat : props.lat;
        center.lng = props.lng === 0 ? geoCodeLng : props.lng;

        props.setPosition(center.lat, center.lng);

        map.current = new google.maps.Map(document.getElementById("map"), {
          center: center,
          zoom: 18,
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

  useEffect(() => {
    initMap();
  });

  return (
    <div className="form-three">
      <SellFormSubheader listing={props}/>
      <h4>Is this the correct location of your home?</h4>
      <div id="map" width="95vw" height="40vh" />
      <button className="button" onClick={() => props.toggleForm(5)}>
        Yes, it's the correct location
      </button>
      <button className="secondary-button" onClick={() => props.toggleForm(4)}>
        No, let me change it
      </button>
    </div>
  );
};

export default SellFormStepThree;
