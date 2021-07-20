import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../app/assets/images/logo.png";




const NavBar = ({ currentUser, logout, openModal }) => {
    const loggedOut = () => (
        <nav className="login-signup">
            <button className="secondary-button" onClick={() => openModal('Log In')}>Log In</button>
        </nav>
    );

    const loggedIn = () => (
        <nav className="login-status">
            <Link to={`users/${currentUser.id}`} className="nav-bar-greeting">My Saves</Link>
            <button className="secondary-button nav-button" onClick={logout}>Log Out</button>
        </nav>  
    )

    const sellLink = () => (
        currentUser ? 
        <Link to={`users/${currentUser.id}`} className="nav-bar-link" 
            onClick={() => openModal("Create Listing", { size: "large" })}>Sell</Link> :
            ""
    )

    return (
      <header className="nav-bar">
        <div className="nav-bar-options">
          <div className="nav-bar-link">Buy</div>
          <div className="nav-bar-link">Rent</div>
          <div>{sellLink()}</div>
        </div>
          <img className="main-logo" src={window.logo} alt="willow logo" />
        <div className="nav-menu">{currentUser ? loggedIn() : loggedOut()}</div>
      </header>
    );
};

export default NavBar;