import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import axios from "axios";

//axios.defaults.baseURL = "http://localhost:3000/rickandmorty";
axios.defaults.baseURL =
  "https://back-rick-morty-production.up.railway.app/rickandmorty";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
