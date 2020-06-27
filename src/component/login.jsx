import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Formik, Field, Form } from 'formik';

import "../login-signup.css";
import { LOGIN_ACTION } from "../actions/type";
import { loginReducer } from "../reducers/loginReducer";
import {
  FormHeader, //will use it when needed to use
  FormOptions,
  Input,
  Submit,
  // Form,
} from "../styledComponents/formStyledComponent";

const Login = () => {
  const dispatch = useDispatch(loginReducer);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const data = { email, password };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: LOGIN_ACTION, payload: { data } });
  };

  return (
    <div>
      <h1>Login To Your Account</h1>
      <Formik
        initialValues={{ name: "", email: "" }}
        onSubmit={onSubmit}
      >
        <Form>

          <Field name="email" type="email" onChange={(e) => setEmail(e.target.value)} />
          <Field name="password" type="password" onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" value='Login' >Login</button>
        </Form>
        {/* <Input
          type="email"
          value={email}
          placeholder="Enter Email Address"
          onChange={(e) => setEmail(e.target.value)}
        /> */}
        {/* <Input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormOptions>
          <div id="signup-prompt">
            <Link to="/signup">Don't have an account?</Link>
          </div>
          <div id="forgot-password">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </FormOptions>
        <Submit type="submit" value="Login" /> */}
      </Formik>
    </div>
  );
}

export default Login