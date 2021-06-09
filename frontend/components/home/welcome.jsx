import React from 'react';

const Welcome = (props) => {
    const { openModal } = props;
    return (
        <div className="welcome-page">
            <img className="welcome-banner" src={window.banner} />
            <div className="welcome-page-header">Change Starts Here</div>
            <div className="welcome-cards">
                <div className="welcome-card">
                    <img className="welcome-card-image" src={window.park}/>
                    <div className="welcome-options">
                        <button className="secondary-button large-button" onClick={() => openModal("Buy")}>Buy</button>
                    </div>
                </div>
                <div className="welcome-card">
                    <img id="heart-card" src={window.city}/>
                    <div className="welcome-options">
                        <button className="secondary-button large-button" onClick={() => openModal("Sell")}>Sell</button>
                    </div>
                </div>
                <div className="welcome-card">
                    <img className="welcome-card-image" src={window.room}/>
                    <div className="welcome-options">
                        <button className="secondary-button large-button" onClick={() => openModal("Rent")}>Rent</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome;

