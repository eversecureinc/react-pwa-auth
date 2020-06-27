import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { signupReducer } from "../reducers/signupReducer";
import { SIGNUP_ACTION } from "../actions/type";
import {
  FormHeader,
  FormOptions,
  Input,
  Submit,
  Form,
} from "../styledComponents/formStyledComponent";
import "../login-signup.css";

const Signup =()=> {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch(signupReducer);
  const data = { email, password, confirmPassword };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      dispatch({ type: SIGNUP_ACTION, payload: { data } });
    } else {
      alert("Passwords dont match");
    }
  };

  return (
    <div>
      <Form id="signup" onSubmit={onSubmit}>
        <FormHeader>Make A New Account</FormHeader>
        <Input
          type="email"
          value={email}
          placeholder="Enter Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          value={password}
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          type="password"
          value={confirmPassword}
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <FormOptions>
          <div id="signup-prompt">
            <Link to="/">Already have an account?</Link>
          </div>
        </FormOptions>
        <Submit type="submit" value="Sign Up" />
      </Form>
    </div>
  );
}

export default Signup;