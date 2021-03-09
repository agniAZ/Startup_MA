import React from "react";
import ReactDOM from "react-dom";
//switch memory for browser on deploy
import { MemoryRouter, Route, Switch, Redirect } from "react-router-dom";

import AdminLayout from "./DefaultLayout.js";

import "./assets/scss/startup-ma.scss";

import ThemeContextWrapper from "./components/Theme/ThemeWrapper";
import BackgroundColorWrapper from "./components/Theme/BackgroundColorWrapper";

ReactDOM.render(
  <ThemeContextWrapper>
    <BackgroundColorWrapper>
      <MemoryRouter>
        <Switch>
          <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
          <Redirect from="/" to="/admin/icons" />
        </Switch>
      </MemoryRouter>
    </BackgroundColorWrapper>
  </ThemeContextWrapper>,
  document.getElementById("root")
);
