// Dependencies
import React from "react";
import { Route, Switch } from "react-router-dom";

// Components
import App from "@pages/";
import Home from "@pages/Home/";
import Reviews from "@pages/Reviews/";

const AppRoutes = () => (
  <App>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/reviews" exact component={Reviews} />
    </Switch>
  </App>
);

export default AppRoutes;
