import React, { useState } from "react";
import { Link, BrowserRouter } from "react-router-dom";
import {
  Button,
  Form,
  Container,
  Message,
  MenuItem,
} from "semantic-ui-react";

const LoginForm = ({ submitFormHandler }) => {
  const [message, setMessage] = useState();
  return (
    <>
      <Container>
        <Form onSubmit={submitFormHandler} id="login-form">
          <Form.Input
            icon="user"
            iconPosition="left"
            placeholder="email"
            label="Email:"
            type="email"
            name="email"
            id="login-email"
          />

          <Form.Input
            icon="lock"
            iconPosition="left"
            placeholder="password"
            label="Password:"
            type="password"
            name="password"
            id="login-password"
          />
          <Button id="login-submit" content="Submit" primary />
        </Form>
      </Container>

      <Container>
        <div>
          <BrowserRouter>
            <Link to="/register" id="register">
              Don't have an account yet? Sign up now!
            </Link>
          </BrowserRouter>
        </div>
        {/* <MenuItem as={Link} to="/register" id="register">
          Don't have an account yet? Sign up now!
        </MenuItem> */}

        {message && (
          <Message id="login-message" color="red">
            {message}
          </Message>
        )}
      </Container>
    </>
    // <form onSubmit={submitFormHandler} id="login-form">
    //   <label>Email</label>
    //   <input name="email" type="email" id="email"></input>

    //   <label>Password</label>
    //   <input name="password" type="password" id="password"></input>

    //   <button id="submit">Sumbit</button>
    // </form>
  );
};

export default LoginForm;
