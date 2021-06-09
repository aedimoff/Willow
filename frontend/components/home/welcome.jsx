import React from 'react';
import banner from '../../../app/assets/images/banner.jpg'

const Welcome = () => {
    return (
        <div className="welcome-page">
            <img className="welcome-banner" src={window.banner} />
            <div className="welcome-page-header">Change Starts Here</div>
            <div className="welcome-cards">
                <div className="welcome-card">
                    <img className="welcome-card-image" src={window.park}/>
                    <div className="welcome-options">
                        <button className="secondary-button">Buy</button>
                    </div>
                </div>
                <div className="welcome-card">
                    <img id="heart-card" src={window.city}/>
                    <div className="welcome-options">
                        <button className="secondary-button">Sell</button>
                    </div>
                </div>
                <div className="welcome-card">
                    <img className="welcome-card-image" src={window.room}/>
                    <div className="welcome-options">
                        <button className="secondary-button">Rent</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome;

