import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppContextProvider from "./context/AppContext";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./context/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </ThemeProvider>
  </BrowserRouter>
);
