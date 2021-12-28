import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header";

import { StoreProvider } from "store/store";

import "./index.scss";

const App = () => (
  <StoreProvider>
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <Header />
      <div>Name: nav</div>
    </div>
  </StoreProvider>
);
ReactDOM.render(<App />, document.getElementById("app"));
