import React from "react";
import { IoMegaphoneOutline, IoHomeOutline } from "react-icons/io5";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const SellFormFooter = () => {
  return (
    <div className="sell-form-footer">
      <h1>Why sell on Willow?</h1>
      <div className="sell-form-footer-icon-container">
        <div id="footer-item">
          <IoHomeOutline className="sell-form-icon" />
          <p>List your home for free, including high quality photos.</p>
        </div>
        <div id="footer-item">
          <IoMegaphoneOutline className="sell-form-icon" />
          <p>Listings on Willow are viewed by home buyers around the world.</p>
        </div>
        <div id="footer-item">
          <IoIosCheckmarkCircleOutline className="sell-form-icon" />
          <p>Home buyers recieve daily emails about new listings.</p>
        </div>
      </div>
    </div>
  );
};

export default SellFormFooter;
