import React from 'react';

const UploadPhotos = (props) => {
    return (
      <div>
        <h3>Upload Photos</h3>
        <h5>Use "command + click" to select multiple photos</h5>
        <input
          className="upload-button"
          type="file"
          onChange={(e) => props.handlePhotos(e.target.files)}
          multiple
        />
      </div>
    );
};

export default UploadPhotos;