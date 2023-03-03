import { getRequest } from "../../services/http/http.service";
import { BASE_URL } from "../../services/http/http.config";
import { getItemFailure, getItemSuccess } from "./cartSummarySlice";
import { put, takeLatest } from "redux-saga/effects";
function* AddtoCarts() {
  try {
    console.log("SK@i am saga");
    const result = yield getRequest(BASE_URL);
    console.log("SK@addTocartSaga", result);
    yield put(getItemSuccess({ result: result }));
  } catch (err) {
    console.log("SK@", err);
    yield put(getItemFailure({ result: [] }));
  }
}
export function* watchGetItem() {
  yield takeLatest("cartSummarySlice/getItem", AddtoCarts);
}
