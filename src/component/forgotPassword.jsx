import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import "../login-signup.css";
import { FORGOT_PASSWORD_ACTION } from "../actions/type";
import { forgotPasswordReducer } from "../reducers/forgotPasswordReducer";
import {
  FormHeader,
  Input,
  FormOptions,
  Submit,
  Form,
} from "../styledComponents/formStyledComponent";

const ForgotPassword=()=> {
  const dispatch = useDispatch(forgotPasswordReducer);
  const [email, setEmail] = useState("");
  const data = { email };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: FORGOT_PASSWORD_ACTION, payload: { data } });
  };

  return (
    <div>
      <Form id="login" onSubmit={onSubmit}>
        <FormHeader>Reset Your Password</FormHeader>
        <Input
          type="email"
          value={email}
          placeholder="Enter Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormOptions>
          <div id="signup-prompt">
            <Link to="/">Go back to Login</Link>
          </div>
        </FormOptions>
        <Submit type="submit" value="Reset Password" />
      </Form>
    </div>
  );
}

export default ForgotPassword