import { all, fork } from "redux-saga/effects";
import { watchGetItem } from "../features/AddToCart/getItem.saga";
import { totalRequest } from "../features/learnSaga/calculator.Saga";
import { watchProducts } from "../features/learnSaga2/product.saga";
export default function* rootSaga() {
  yield all([fork(totalRequest), fork(watchProducts), fork(watchGetItem)]);
}
