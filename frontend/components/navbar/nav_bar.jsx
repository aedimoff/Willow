import React from 'react';
import { BsHouseDoorFill } from 'react-icons/bs';



const NavBar = ({ currentUser, logout, openModal }) => {

    const loggedOut = () => (
        <nav className="login-signup">
            <button className="secondary-button" onClick={() => openModal('Log In')}>Log In</button>
        </nav>
    );

    const loggedIn = () => (
        <nav className="login-status">
            <h2 className="nav-bar-greeting">Welcome, {currentUser.email}!</h2>
            <button className="secondary-button" onClick={logout}>Log Out</button>
        </nav>  
    )

    return (
        <header className="nav-bar">
            <div className="nav-bar-options">
                <p className="nav-bar-link">Buy</p>
                <p className="nav-bar-link">Rent</p>
                <p className="nav-bar-link">Sell</p>
            </div>
            <div className="logo">
                <BsHouseDoorFill className="willow-icon"/>
                <h1 className="logo-title">Willow</h1>
            </div>
            <div className="nav-menu">
                {currentUser ? loggedIn() : loggedOut()}
            </div>
        </header>
    );
};

export default NavBar;