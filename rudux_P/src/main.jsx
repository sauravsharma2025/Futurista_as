import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { store } from "./store";
import { Provider } from "react-redux";
import { CounterA } from "./features/counter/Counter";
import { Calculator } from "./features/counter/Calculator";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Calculator />
  </Provider>
);
