import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/styles/ThemeProvider';
import AppBar from "@material-ui/core/AppBar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export class FormBasicInfo extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider id="basic-info">
        <React.Fragment>
          {/* <div id="basic-info"> */}
            <AppBar title="Vehicle Basic Info" />
            <TextField
              hintText="Regnum"
              floatingLabelText="Regnumber"
              onChange={handleChange('regnum')}
              defaultValue={values.regnum}
            />
            <br/>
            <TextField
              hintText="Transmission"
              floatingLabelText="Transmission"
              onChange={handleChange('transmission')}
              defaultValue={values.transmission}
            />
            <br/>
            <TextField
              hintText="Fuelage"
              floatingLabelText="Fuelage"
              onChange={handleChange('fuelage')}
              defaultValue={values.fuelage}
            />
            <br/>
            <TextField
              hintText="Mileage"
              floatingLabelText="Mileage"
              onChange={handleChange('mileage')}
              defaultValue={values.mileage}
            />
            <br/>
            <TextField
              hintText="Make"
              floatingLabelText="Make"
              onChange={handleChange('make')}
              defaultValue={values.make}
            />
            <br/>
            <TextField
              hintText="Model"
              floatingLabelText="Model"
              onChange={handleChange('model')}
              defaultValue={values.model}
            />
            <br/>
            <TextField
              hintText="Year"
              floatingLabelText="Year"
              onChange={handleChange('year')}
              defaultValue={values.year}
            />
            <br/>
            <TextField
              hintText="Color"
              floatingLabelText="Color"
              onChange={handleChange('color')}
              defaultValue={values.color}
            />
            <br/>
            <Button
              id="continue-button"
              label="Continue"
              variant="contained"
              primary={true}
              onClick={this.continue}
            />
          {/* </div> */}
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

export default FormBasicInfo
