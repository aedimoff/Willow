import React from "react";

const SellFormHeader = () => {
  return (
    <div className="sell-form-header">
      <img className="sell-form-house" src={window.sell_form_house} />
      <div className="form-background" />
      <img className="trapezoid" src={window.trapezoid} />
      <h3>For Sale by Owner</h3>
    </div>
  );
};

export default SellFormHeader;


