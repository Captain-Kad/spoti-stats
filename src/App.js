import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import HomePage from "./components/homepage";
import Login from "./components/login/login";

const App = () => {
  return (
    <div className="app">
      {/* <HomePage /> */}
      <Login />
    </div>
  );
};

export default App;
