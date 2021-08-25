import { makeArray } from "jquery";
import React, { useEffect, useRef } from "react";

const SellFormStepThree = (props) => {
  //   if (props.currentStep !== 3) return null;

  const { address, city, state, zipcode } = props;
  const map = useRef();

  const initMap = () => {
    const geocoder = new google.maps.Geocoder();

    geocoder.geocode({ address: address }, (results, status) => {
      if (status == google.maps.GeocoderStatus.OK) {
        var latitude = results[0].geometry.location.lat();
        var longitude = results[0].geometry.location.lng();
        let latLng = { lat: latitude, lng: longitude };
        map.current = new google.maps.Map(document.getElementById("map"), {
          center: latLng,
          zoom: 19.5,
          disableDefaultUI: true,
          
        });

        let marker = new google.maps.Marker({
          position: latLng,
          icon: {
            draggable: true,
            animation: google.maps.Animation.DROP,
            path: google.maps.SymbolPath.CIRCLE,
            scale: 8.5,
            fillColor: "#000000",
            fillOpacity: 0.4,
            strokeWeight: 0.4,
          },
        });

        marker.setMap(map.current)

        //update lat long using props.update(field) function
      }
    });
  };

  useEffect(() => {
    initMap();
  });

  return (
    <div className="form-three">
      <div className="form-three-header">
        <h1>For Sale By Owner Listing</h1>
        <h3>
          {address}, {city}, {state} {zipcode}
        </h3>
      </div>
      <h4>Is this the correct location of your home?</h4>
      <div id="map" width="95vw" height="40vh" />
    </div>
  );
};

export default SellFormStepThree;
