import { delay, put, takeLatest } from "redux-saga/effects";
import { addNumbersSuccess, minusNumberSuccess } from "./calculatorSlice";

function* onAddNumber(actions) {
  try {
    const result = +actions.payload.num1 + +actions.payload.num2;
    console.log("SK@", result);
    yield delay(3000);
    yield put(addNumbersSuccess(result));
  } catch (err) {
    console.log("SK@", err);
  }
}
function* onMinusNumbers(action) {
  try {
    const result = action.payload.num1 - action.payload.num2;
    yield delay(3000);
    yield put(minusNumberSuccess(result));
  } catch (err) {
    console.log("SK@", err);
  }
}
export function* totalRequest() {
  yield takeLatest("calculator/addNumbers", onAddNumber);
  yield takeLatest("calculator/minusNumbers", onMinusNumbers);
}
