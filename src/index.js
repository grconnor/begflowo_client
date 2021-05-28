import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Login from "./components/Login";
import LoginForm from "./components/LoginForm";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";
import "./index.css"

let apiUrl;
if (process.env.NODE_ENV === "production") {
  apiUrl = "https://begflow-api.herokuapp.com/api/v1";
} else {
  apiUrl = "http://localhost:3000/api/v1";
}
axios.defaults.baseURL = apiUrl;

ReactDOM.render((
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route 
        exact path="/login"
        render={(props) =>
          <div>
            <Login />
          </div>
        }
      
      />
    </Switch>
  </BrowserRouter>
), document.getElementById("root"));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
