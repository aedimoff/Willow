import React from "react";
import SavesContainer from "./saves_container";
import UserListingsContainer from "./user_listings_container";

class User extends React.Component {
  render() {
    const { openModal } = this.props;
    return (
      <div className="user-page">
        {/* <img className="welcome-banner" src={window.profile} />
        <h2 className="user-header">My Saved Homes</h2>
        <SavesContainer /> */}
        <UserListingsContainer />
      </div>
    );
  }
}

export default User;
