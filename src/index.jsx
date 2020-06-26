// Dependencies
import React from "react";
import axios from "axios";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import "regenerator-runtime/runtime";

// Import store
import store from "@redux/index";

// Components
import AppRoutes from "@route/";

// Assets
import "@styles/global.scss";

axios.defaults.baseURL = process.env.HOSTS;

render(
  <Provider store={store}>
    <Router>
      <AppRoutes />
    </Router>
  </Provider>,
  document.getElementById("root")
);
