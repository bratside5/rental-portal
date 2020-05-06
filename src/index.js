import React from "react";
import ReactDOM from "react-dom";
import "tailwindcss/dist/base.css";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { PropertyProvider } from "./context/PropertyContext";
import { BlogProvider } from "./context/BlogContext";

ReactDOM.render(
  <React.StrictMode>
    <BlogProvider>
      <PropertyProvider>
        <App />
      </PropertyProvider>
    </BlogProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
