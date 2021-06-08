import React from 'react';

class ListingShow extends React.Component {
    render() {
        const display = ({ listing }) => {
        (<div>
            <div className="image-grid">
                <div className="header-image">Hello</div>
                <div className="show-images"></div>
            </div>
            <div className="description-container">
                <h1 className="listing-header"></h1>
                <p className="listing-details"></p>
                <div className="listing-description"></div>
            </div>
        </div>)
        }

        return(
            <div className="listing-show">
                    { display }
            </div>
        )
    }
}



export default ListingShow;





