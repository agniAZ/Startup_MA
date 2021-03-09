import React from "react";
import ReactDOM from "react-dom";
//switch memory for browser on deploy
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import StartupLayout from "./DefaultLayout.js";

import "./assets/scss/startup-ma.scss";

ReactDOM.render(
      <BrowserRouter>
        <Switch>
          <Route path="" render={(props) => <StartupLayout {...props} />} />
          <Redirect from="/" to="/startup/icons" />
        </Switch>
      </BrowserRouter>,
  document.getElementById("root")
);
