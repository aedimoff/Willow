import React from 'react';
import SellFormSubheader from "./sell_form_subheader";


const UploadPhotos = (props) => {
    return (
      <div className="photo-upload-form">
        <SellFormSubheader listing={props.listing} />
        <h3>Upload Photos</h3>
        <h4>Use "command + click" to select multiple photos</h4>
        <input
          className="photo-uploader"
          type="file"
          onChange={(e) => props.handlePhotos(e.target.files)}
          multiple
        />
        <button className="button" onClick={() => props.toggleForm(6)}>
          Save and Continue
        </button>
      </div>
    );
};

export default UploadPhotos;