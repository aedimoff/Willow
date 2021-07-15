import React from 'react';
import SavesContainer from './saves_container'

class User extends React.Component {
    render() {
        const { openModal } = this.props;
        return(
            <div>
                <img className="welcome-banner" src={window.profile} />
                    <h2 className="user-header">My Saved Homes</h2>
                <SavesContainer />
            </div>
        )
    }
}

export default User;