/* eslint-disable default-case */
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import InputFields from "./components/InputFields";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";
import Preferences from "./components/Preferences";
import SideBar  from "./components/SideBar";
import { authenticate } from "./modules/auth";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
    message: "",
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
    const { renderLoginForm, authenticated, message } = this.state;
    let renderLogin;
    switch (true) {
      case renderLoginForm && !authenticated:
        renderLogin = <LoginForm submitFormHandler={this.onLogin} />;
        break;
      case !renderLoginForm && !authenticated:
        renderLogin = (
          <>
            <button
              id="login"
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
            You are logged in as {JSON.parse(sessionStorage.getItem("credentials")).uid}.
          </p>
        );
        break;
    }

    return (
      <>
        <div className="wrapper">
          {/* <h1 id="main-logo">BegFlow</h1> */}
          {renderLogin}
          <BrowserRouter>
            <Switch>
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/preferences" component={Preferences} />
            </Switch>
          </BrowserRouter>
        </div>
        <Header />
        <InputFields onChangeHandler={this.onChangeHandler} />
        <SideBar />
        <Footer />
      </>
    );
  }
}

export default App;
