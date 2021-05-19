import React, { Component } from "react";

import InputFields from "./components/InputFields";

class App extends Component {
  state = {
    regnum: "",
    ordernum: "",
    make: "nissan",
    model: "",
    year: "",
    color: "",
    mileage: ""
  };

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <>
        <button id="login">Login</button>
        <InputFields onChangeHandler={this.onChangeHandler} />
      </>
    );
  }
}

export default App;
