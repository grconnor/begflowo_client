import React, { Component } from 'react';
import { authenticate } from '../modules/auth';
import LoginForm from "./LoginForm";

class Login extends Component {
  state = {
    renderLoginForm: false,
    authenticated: false,
    message: ""
  };

  // onChangeHandler = (e) => {
  //   this.setState({ [e.target.name]: e.target.value });
  // }

  onLogin = async (e) => {
    e.preventDefault();
    const response = await authenticate(
      e.target.email.value,
      e.target.password.value
    );
    if (response.authenticated) {
      this.setState({ authenticated: true });
    } else {
      this.setState({ message: response.message, renderLoginForm: false });
    }
  };

  render() {
    const { renderLoginForm, authenticated, message } = this.state;
    let renderLogin;
    // eslint-disable-next-line default-case
    switch (true) {
      case renderLoginForm && !authenticated:
        renderLogin = <LoginForm submitFormHandler={this.onLogin} />;
        break;
      case !renderLoginForm && !authenticated:
        renderLogin = (
          <>
            <button
              id="login-button"
              onClick={() => this.setState({ renderLoginForm: true })}
            >
              Login
            </button>
            <p id="message">{message}</p>
          </>
        );
        break;
      case authenticated:
        renderLogin = (
          <p id="welcome-message">
            You are logged in as{" "}
            {JSON.parse(sessionStorage.getItem("credentials")).uid}.
          </p>
        );
        break;
    }

    return (
      <>
        {renderLogin}
      </>
    )
  }
}

export default Login;
