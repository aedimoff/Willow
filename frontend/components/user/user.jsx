import React from 'react';

class User extends React.Component {
    render() {
        const { openModal } = this.props;
        console.log("user props", this.props)
        return(
            <div>
                <button className="button large-button" 
                    onClick={() => openModal("Create Listing", { size: "large" })}>Create Listing
                </button>
            </div>
        )
    }
}

export default User;