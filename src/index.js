import React from "react";
import ReactDOM from "react-dom";
//switch memory for browser on deploy
import { MemoryRouter, Route, Switch, Redirect } from "react-router-dom";

import StartupLayout from "./DefaultLayout.js";

import "./assets/scss/startup-ma.scss";

ReactDOM.render(
      <MemoryRouter>
        <Switch>
          <Route path="" render={(props) => <StartupLayout {...props} />} />
          <Redirect from="/" to="/startup/icons" />
        </Switch>
      </MemoryRouter>,
  document.getElementById("root")
);
