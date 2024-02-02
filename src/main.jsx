import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AddProductProvide } from "./context/productContest.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AddProductProvide>
        <App />
      </AddProductProvide>
    </BrowserRouter>
  </React.StrictMode>
);
