import React from 'react';
import { BsHouseDoorFill } from 'react-icons/bs';



const NavBar = ({ currentUser, logout, openModal }) => {

    const loggedOut = () => (
        <nav className="login-signup">
            <button className="button toggle-login-logout" onClick={() => openModal('Log In')}>Log In</button>
        </nav>
    );

    const loggedIn = () => (
        <nav className="login-status">
            <h2 >Welcome, {currentUser.email}!</h2>
            <button className="button toggle-login-logout" onClick={logout}>Log Out</button>
        </nav>  
    )

    return (
        <header className="nav-bar">
            <div className="place-holder"></div>
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