import React, { useState } from "react";
import { Link, BrowserRouter } from "react-router-dom";
import { Button, Form, Container, Message, MenuItem } from "semantic-ui-react";

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
            required
          />

          <Form.Input
            icon="lock"
            iconPosition="left"
            placeholder="password"
            label="Password:"
            type="password"
            name="password"
            id="login-password"
            required
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

        {message && (
          <Message id="onlogin-message" color="red">
            {message}
          </Message>
        )}
      </Container>
    </>
  );
};

export default LoginForm;
