// Dependencies
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios"

// Import store
import store from "@redux/index";

// Components
import AppRoutes from "@route/";

axios.defaults.baseURL = process.env.HOSTS;

console.log("Attempt")

render(
    <Provider store={store}>
      <Router>
        <AppRoutes />
      </Router>
    </Provider>,
    document.getElementById("root")
  );