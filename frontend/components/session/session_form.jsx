import React from 'react'

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };

        this.demoUser = {
            email: "demo@gmail.com",
            password: "123456"
        };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginDemoUser = this.loginDemoUser.bind(this);
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state).then(this.props.closeModal);

    }

    loginDemoUser(e) {
        e.preventDefault();
        this.props.processForm(this.demoUser).then(this.props.closeModal);
    }

    renderErrors() {
        return(
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    buttonName(formType) {
        return formType === "Log In" ? "Create New Account" : "Log In"
    }

    render() {
        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-input-box">
                    <h1 className="modal-header">Welcome to Willow!</h1> 
                    <br />
                    {/* <div onClick={this.props.closeModal} className="close-x">X</div> */}
                    {this.renderErrors()}
                    <div className="login-form">
                        <div className="modal-input">
                            <label>Email:</label>
                                <input type="text" 
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    className="login-input"
                            />
                        </div>
                        <div className="modal-input">
                            <label>Password:</label>
                                <input type="password" 
                                    value={this.state.password} 
                                    onChange={this.update('password')}
                                    className="login-input"
                            />
                        </div>
                    </div>
                    <input className="button" type="submit" value={this.props.formType} />
                </form>
                    <div>
                        <button className="button" 
                                onClick={this.props.openModal}>
                                {this.buttonName(this.props.formType)}
                        </button>
                        <button className="demo-login" onClick={this.loginDemoUser}>Demo User</button>

                    </div>
            </div>
        );
    }
}

export default SessionForm;