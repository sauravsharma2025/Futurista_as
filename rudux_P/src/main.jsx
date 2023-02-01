import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { store } from "./store";
import { Provider } from "react-redux";
import { CounterA } from "./features/counter/Counter";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <CounterA />
  </Provider>
);
