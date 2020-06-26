// Dependencies
import React from "react";
import { Route, Switch } from "react-router-dom";

// Components
import App from "@pages/index";
import Home from "@pages/Home/";

const AppRoutes = () => (
  <App>
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  </App>
);

export default AppRoutes;