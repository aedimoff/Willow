import React from "react";

const SellFormSubheader = (props) => {
  const { address, city, state, zipcode } = props.listing;
  return (
    <div className="form-subheader">
      <h1>For Sale By Owner Listing</h1>
      <h3>
        {address}, {city}, {state} {zipcode}
      </h3>
    </div>
  );
};

export default SellFormSubheader;
