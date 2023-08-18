import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { StudentDataProvider } from "./StudentDataContext";
import { BrowserRouter } from "react-router-dom";
import { UsnProvider } from "./UsnContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UsnProvider>
        <StudentDataProvider>
          <App />
        </StudentDataProvider>
      </UsnProvider>
    </BrowserRouter>
  </React.StrictMode>
);
