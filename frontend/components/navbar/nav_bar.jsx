import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ currentUser, logout, openModal }) => {
  const loggedOut = () => (
    <nav className="login-signup">
      <button className="secondary-button" onClick={() => openModal("Log In")}>
        Log In
      </button>
    </nav>
  );

  const loggedIn = () => (
    <nav className="login-status">
      <Link
        to={`/users/${currentUser.id}/listings`}
        className="my-listings-link"
      >
        My Listings
      </Link>
      <Link to={`/users/${currentUser.id}`} className="my-saves-link">
        My Saves
      </Link>
      <button className="logout-button" onClick={logout}>
        Log Out
      </button>
    </nav>
  );

  const sellLink = () =>
    currentUser ? (
      <Link
        to={`/users/for-sale-by-owner`}
        className="nav-bar-link"
      >
        Sell
      </Link>
    ) : (
      ""
    );

  return (
    <header className="nav-bar">
      <div className="nav-bar-options">
        <div className="nav-bar-link">Buy</div>
        {/* <div className="nav-bar-link">Rent</div> */}
        <div>{sellLink()}</div>
      </div>
      <img className="main-logo" src={window.logo} alt="willow logo" />
      <div className="nav-menu">{currentUser ? loggedIn() : loggedOut()}</div>
    </header>
  );
};

export default NavBar;


