import React from "react";
import ReactDOM from "react-dom";
//switch memory for browser on deploy
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import AdminLayout from "./DefaultLayout.js";

import "./assets/scss/startup-ma.scss";

// import ThemeContextWrapper from "./components/Theme/ThemeWrapper";
// import BackgroundColorWrapper from "./components/Theme/BackgroundColorWrapper";

ReactDOM.render(
      <BrowserRouter>
        <Switch>
          <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
          <Redirect from="/" to="/admin/icons" />
        </Switch>
      </BrowserRouter>,
  document.getElementById("root")
);
