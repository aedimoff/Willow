import React from "react";
import RenderErrors from "./render_form_errors";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };

    this.demoUser = {
      email: "demo@gmail.com",
      password: "123456",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginDemoUser = this.loginDemoUser.bind(this);
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state).then(this.props.closeModal);
  }

  loginDemoUser(e) {
    e.preventDefault();
    this.props.processForm(this.demoUser).then(this.props.closeModal);
  }

  toggleForm(formType) {
    return formType === "Log In"
      ? "Not on Willow? Create Account!"
      : "Already have an account? Log In!";
  }

  render() {
    return (
      <div className="login-form-container">
        <h1 className="modal-header">Welcome to Willow!</h1>
        <form className="login-form" onSubmit={this.handleSubmit}>
          <RenderErrors errors={this.props.errors} />
          <div className="modal-input">
            <input
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
              className="login-input"
              placeholder="Email"
            />
          </div>
          <div className="modal-input">
            <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              className="login-input"
              placeholder="Password"
            />
          </div>
          <div className="form-submit-button">
            <button className="button" type="submit">
              {this.props.formType}
            </button>
            <p>or</p>
            <button className="secondary-button" onClick={this.loginDemoUser}>
              Log In as Demo User
            </button>
          </div>
        </form>
        <button className="form-type-toggle" onClick={this.props.openModal}>
          {this.toggleForm(this.props.formType)}
        </button>
      </div>
    );
  }
}

export default SessionForm;
