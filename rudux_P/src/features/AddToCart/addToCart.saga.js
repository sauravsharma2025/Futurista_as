import { put, takeLatest } from "redux-saga/effects";
function* addTocartSaga(actions) {
  try {
  } catch (err) {
    console.log("SK@", err);
  }
}
export function* watchAddToCart() {
  yield takeLatest("addToCart/addToCart", addTocartSaga);
}
