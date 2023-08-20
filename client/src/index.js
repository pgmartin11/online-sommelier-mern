import React from "react";
import ReactDOM from "react-dom/client";
import Wrapped from "./Wrapped";
import 'bootstrap/dist/css/bootstrap.css';
import "./scss/index.scss";

window.React = React;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Wrapped />
  </React.StrictMode>
);