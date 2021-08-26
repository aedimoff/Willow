import React from "react";

const ReviewAndSubmit = (props) => {
  const {
    address,
    description,
    zipcode,
    city,
    state,
    price,
    status,
    property_type,
    beds,
    baths,
    sellerId,
    lat,
    lng,
    images,
  } = props.submissionData;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("listing[address]", address);
    formData.append("listing[description]", description);
    formData.append("listing[zipcode]", zipcode);
    formData.append("listing[city]", city);
    formData.append("listing[state]", state);
    formData.append("listing[price]", price);
    formData.append("listing[status]", status);
    formData.append("listing[property_type]", property_type);
    formData.append("listing[beds]", beds);
    formData.append("listing[baths]", baths);
    formData.append("listing[seller_id", sellerId);
    formData.append("listing[lat]", lat);
    formData.append("listing[lng]", lng);


    for (let i = 0; i < images.length; i++) {
      formData.append("listing[images][]", images[i]);
    }
    props.createListing(formData);
  };

  return (
    <div>
      <button onClick={(e) => {handleSubmit(e), alert("Listing Created Successfully")}}>Submit Listing</button>
    </div>
  );
};

export default ReviewAndSubmit;


