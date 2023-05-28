import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app";
import { DataProvider } from "./contexts/data";
import { BrowserRouter } from "react-router-dom";
import "./font.css";
import "./main.css";
import { AuthProvider } from "./contexts/auth";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <DataProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </DataProvider>
    </AuthProvider>
  </React.StrictMode>
);
