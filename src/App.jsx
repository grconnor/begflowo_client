import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import InputFields from "./components/InputFields";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";
import Preferences from "./components/Preferences";

class App extends Component {
  state = {
    regnum: "",
    ordernum: "",
    make: "nissan",
    model: "",
    year: "",
    color: "",
    mileage: "",
    renderLoginForm: false,
    authenticated: false,
    message: ""
  };

  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

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
    const renderLogin = this.state.renderLoginForm ? (
      <LoginForm submitFormHandler={this.onLogin} />
    ) : (
      <button
        id="login"
        onClick={() => this.setState({ renderLoginForm: true })}
      >
        Login
      </button>
    );
    return (
      <>
        <div className="wrapper">
          <h1>Application</h1>
          {renderLogin}
          <BrowserRouter>
            <Switch>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
              <Route path="/preferences">
                <Preferences />
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
        <InputFields onChangeHandler={this.onChangeHandler} />
      </>
    );
  }
}

export default App;
