/* eslint-disable default-case */
import React, { Component } from 'react'
import FormBasicInfo from "./FormBasicInfo";

class UserForm extends Component {
  state = {
    step: 1,
    regnum: "",
    ordernum: "",
    transmission: "",
    fuelage: "",
    mileage: "",
    make: "nissan",
    model: "",
    year: "",
    color: "",
    tireScanning: "",
    currentTires: "",
    extraTires: "",
    tireReplacement: "",
    storeTires: "",
    tireToStore: "",
    flTread: "",
    frTread: "",
    blTread: "",
    brTread: "",
    lugNut: "",
  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  }

  previousStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    })
  }

  handleChange = input => e => {
    this.setState({[input]: e.target.value});
  }

  render() {
    const { step } = this.state;
    const { regnum, ordernum, transmission, fuelage, mileage, make, model, year, color, tireScanning, currentTires, extraTires, tireReplacement, storeTires, tireToStore, flTread, frTread, blTread, brTread } = this.state;
    const values = { regnum, ordernum, transmission, fuelage, mileage, make, model, year, color, tireScanning, currentTires, extraTires, tireReplacement, storeTires, tireToStore, flTread, frTread, blTread, brTread }

    switch(step) {
      case 1:
        return (
          <FormBasicInfo 
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 2:
        return <h1>FormWheels</h1>
      case 3:
        return <h1>FormPictures</h1>
      case 4:
        return <h1>FormConfirmation</h1>
      case 5:
        return <h1>FormSuccess</h1>
    }
  }
}

export default UserForm
