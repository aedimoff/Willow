import React from 'react';

class User extends React.Component {
    render() {
        const { openModal } = this.props;
        return(
            <div>
                <img className="welcome-banner" src={window.profile} />
                <div id="sell-header-container">
                    <h2 id="sell-header">Sell Your Home on Willow!</h2>
                </div>
                <div id="create-listing-button-box">
                    <button className="button large-button" 
                        id="user-listing-create"
                        onClick={() => openModal("Create Listing", { size: "large" })}>Create Listing
                    </button>
                </div>
            </div>
        )
    }
}

export default User;