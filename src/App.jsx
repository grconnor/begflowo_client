/* eslint-disable default-case */
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Component Imports
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";
import Preferences from "./components/Preferences";
import DisplayWizard from "./components/DisplayWizard";
// import InputFields from "./components/InputFields";

// Module Imports
import { authenticate } from "./modules/auth";

// Icon Imports
import AppsIcon from "@material-ui/icons/Apps";
import HomeIcon from "@material-ui/icons/Home";
import StoreIcon from "@material-ui/icons/Store";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import HistoryIcon from "@material-ui/icons/History";
import SettingsIcon from "@material-ui/icons/Settings";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import BusinessIcon from "@material-ui/icons/Business";
import LocalParkingIcon from "@material-ui/icons/LocalParking";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";

function onClick(e, item) {
  window.alert(JSON.stringify(item, null, 2));
}

// Menu List Items
const items = [
  { name: "home", label: "Home", Icon: HomeIcon },
  "divider",
  {
    name: "manage",
    label: "Manage",
    Icon: AppsIcon,
    items: [
      { name: "my cars", label: "My Cars", Icon: DriveEtaIcon, onClick },
      { name: "inventory", label: "Inventory", Icon: StoreIcon, onClick },
      { name: "past orders", label: "Past Orders", Icon: HistoryIcon, onClick },
      {
        name: "parking spots",
        label: "Parking Spots",
        Icon: LocalParkingIcon,
        onClick,
      },
    ],
  },
  "divider",
  { name: "reports", label: "Reports", Icon: MenuBookIcon },
  "divider",
  {
    name: "stages",
    label: "Stages",
    Icon: FormatListBulletedIcon,
    items: [
      { name: "workshop", label: "Workshop", onClick },
      { name: "panelshop", label: "Panelshop", onClick },
    ],
  },
  "divider",
  {
    name: "admin",
    label: "Admin",
    Icon: SupervisorAccountIcon,
    items: [
      {
        name: "create new login",
        label: "Create new login",
        Icon: VpnKeyIcon,
        onClick,
      },
      {
        name: "set company/dealership",
        label: "Set Company/Dealership",
        Icon: BusinessIcon,
        onClick,
      },
      { name: "edit flow", label: "Edit Flow", Icon: CreateIcon, onClick },
      {
        name: "delete previous order",
        label: "Delete Previous Order",
        Icon: DeleteIcon,
        onClick,
      },
      {
        name: "set default options",
        label: "Set Default Options",
        Icon: CreateIcon,
        onClick,
      },
    ],
  },
  "divider",
  {
    name: "settings",
    label: "Settings",
    Icon: SettingsIcon,
    items: [
      { name: "profile", label: "Profile", onClick },
      { name: "preferences", label: "Preferences", onClick },
    ],
  },
];



class App extends Component {
  state = {
    regnum: "",
    ordernum: "",
    make: "nissan",
    model: "",
    year: "",
    color: "",
    mileage: "",
    // renderLoginForm: false,
    // authenticated: false,
    // message: "",
  };
    
  render() {
    return (
      <>
        <div className="App" id="">
          <div className="wrapper">
            {/* {renderLogin} */}
          </div>
          <Header />
          <DisplayWizard onChangeHandler={this.onChangeHandler} />
          <SideBar items={items} />
          <Footer />
        </div>
      </>
    );
  }
}

export default App;

//<BrowserRouter>
//<Switch>
//  <Route exact path="/dashboard" component={Dashboard} />
//  <Route exact path="/preferences" component={Preferences} />
//  {/* <Route exact path="/login" component={LoginForm} /> */}
//</Switch>
//</BrowserRouter>