import React, { useEffect, useState, useCallback } from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from 'contexts';

import Login from "./component/login";
import Signup from "./component/signup";
import ForgotPassword from "./component/forgotPassword";
import "./App.css";

const DivTitle = styled.div`
  background-color: #e8f5ff;
  padding: 10px;
`;

function App() {
  const [metaInfo, setMetaInfo] = useState('');
  return (
    <div className="App">
      <AppContext.Provider
        value={{
          metaInfo,
          setMetaInfo
        }}></AppContext.Provider>
      <DivTitle><h1>Login / Sign Up</h1></DivTitle>
      <Switch>
        <Route exact path="/signup">
          <Signup />
        </Route>

        <Route exact path="/forgot-password">
          <ForgotPassword />
        </Route>

        <Route path="/">
          <Login />
        </Route>
      </Switch>
      </AppContext.Provider>
    </div >
  );
}

export default App;
