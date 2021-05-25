/* eslint-disable default-case */
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import InputFields from "./components/InputFields";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";
import Preferences from "./components/Preferences";
import { authenticate } from "./modules/auth";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import SettingsIcon from "@material-ui/icons/Settings";
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import StoreIcon from '@material-ui/icons/Store';
import HistoryIcon from '@material-ui/icons/History';
import LocalParkingIcon from '@material-ui/icons/LocalParking';
// import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
// import NotificationsIcon from "@material-ui/icons/Notifications";
// import ReceiptIcon from "@material-ui/icons/Receipt";
// import HomeIcon from "@material-ui/icons/Home";
// import AssessmentIcon from '@material-ui/icons/Assessment';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import AppsIcon from '@material-ui/icons/Apps';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import BusinessIcon from '@material-ui/icons/Business';
import HomeIcon from '@material-ui/icons/Home';

function onClick(e, item) {
  window.alert(JSON.stringify(item, null, 2));
}

const items = [
  { name: "home", label: "Home", Icon: HomeIcon },
  "divider",
  { name: "manage", label: "Manage", Icon: AppsIcon, items: [
    { name: "my cars", label: "My Cars", Icon: DriveEtaIcon, onClick },
    { name: "inventory", label: "Inventory", Icon: StoreIcon, onClick },
    { name: "past orders", label: "Past Orders", Icon: HistoryIcon, onClick },
    { name: "parking spots", label: "Parking Spots", Icon: LocalParkingIcon, onClick }
  ] },
  "divider",
  { name: "reports", label: "Reports", Icon: MenuBookIcon },
  "divider",
  { name: "stages", label: "Stages", Icon: FormatListBulletedIcon, items: [
    { name: "workshop", label: "Workshop", onClick },
    { name: "panelshop", label: "Panelshop", onClick }
  ] },
  "divider",
  {
    name: "admin",
    label: "Admin",
    Icon: SupervisorAccountIcon,
    items: [
      { name: "create new login", label: "Create new login", Icon: VpnKeyIcon, onClick },
      { name: "set company/dealership", label: "Set Company/Dealership", Icon: BusinessIcon, onClick },
      { name: "edit flow", label: "Edit Flow", Icon: CreateIcon, onClick },
      { name: "delete previous order", label: "Delete Previous Order", Icon: DeleteIcon, onClick },
      { name: "set default options", label: "Set Default Options", Icon: CreateIcon, onClick }
    ]
  },
  "divider",
  { name: "settings", label: "Settings", Icon: SettingsIcon, items: [
    { name: "profile", label: "Profile", onClick },
    { name: "preferences", label: "Preferences", onClick }
  ]}
]

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
        <div className="App">
          <div className="wrapper">
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
          {/* <SideBar /> */}
          <SideBar items={items}/>
          <Footer />
        </div>
      </>
    );
  }
}

export default App;
