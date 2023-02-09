import { put, takeLatest } from "redux-saga/effects";
import { BASE_URL } from "../../services/http/http.config";
import { getRequest } from "../../services/http/http.service";
import { getProductsSuccess, getProductsFailed } from "./product.slice";

function* getProducts() {
  try {
    const result = yield getRequest(BASE_URL);
    console.log("SK@prodcutSaga", result);
    yield put(getProductsSuccess({ result: result }));
  } catch {
    console.log("SK@", err);
    yield put(getProductsFailed({ result: [] }));
  }
}
export function* watchProducts() {
  yield takeLatest("products/getProducts", getProducts);
}
