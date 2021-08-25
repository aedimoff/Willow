import { makeArray } from "jquery";
import React, { useEffect, useRef } from "react";

const SellFormStepThree = (props) => {
  //   if (props.currentStep !== 3) return null;

  const { address, city, state, zipcode } = props;
  const map = useRef();
  const lat = useRef();
  const lng = useRef();

  const initMap = () => {
    const geocoder = new google.maps.Geocoder();

    geocoder.geocode({ address: address }, (results, status) => {
      if (status == google.maps.GeocoderStatus.OK) {
        lat.current = results[0].geometry.location.lat();
        lng.current = results[0].geometry.location.lng();
        let latLng = { lat: lat.current, lng: lng.current };
        map.current = new google.maps.Map(document.getElementById("map"), {
          center: latLng,
          zoom: 19.5,
          disableDefaultUI: true,
        });

        let marker = new google.maps.Marker({
          position: latLng,
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

        google.maps.event.addListener(marker, "dragend", function (e) {
          lat.current = e.latLng.lat();
          lng.current = e.latLng.lng();
          console.log("lat", lat)
          console.log("lng", lng)
          console.log("marker moved", e.latLng);
        });

        console.log("PROPS", props)
        //update lat long using props.update(field) function
        props.updatePosition(lat.current, lng.current)
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
