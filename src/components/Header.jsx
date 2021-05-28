import React from 'react';
import logo from "../images/begflow_logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h1 id="header-main">
        BegFlow
      </h1>
      <Link to="login">Login</Link>
    </div>
  )
}

export default Header;
