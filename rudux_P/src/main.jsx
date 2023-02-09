import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { CounterA } from "./features/counter/Counter";
import { Calculator } from "./features/counter/Calculator";

import { AddToCartFeature } from "./features/AddToCart/AddToCartFeature";
import { CalculatorLayout } from "./features/learnSaga/Calculator.layout";
import { ProductLayout } from "./features/learnSaga2/product.layout";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AddToCartFeature />
  </Provider>
);
