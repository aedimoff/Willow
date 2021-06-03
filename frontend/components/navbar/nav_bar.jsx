import React from 'react';
// import GreetingContainer from './greeting/greeting_container';


const NavBar = ({ currentUser, logout, openModal }) => {

    const loggedOut = () => (
        <nav className="login-signup">
            <button onClick={() => openModal('Log In')}>Log In</button>
        </nav>
    );

    const loggedIn = () => (
        <nav className="nav-greeting">
            <h2 >Welcome {currentUser.email}</h2>
            <button onClick={logout}>Log Out</button>
        </nav>  
    )

    return (
        <header className="nav-bar">
            <h1 className="logo">Willow</h1>
            <div>
                {currentUser ? loggedIn() : loggedOut()}
            </div>
        </header>
    );
};

export default NavBar;