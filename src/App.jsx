import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RouterPage  from "./router/RouterPage";

function App() {
  return (
    <BrowserRouter>
      <RouterPage />
    </BrowserRouter>
  );
}

export default App;
