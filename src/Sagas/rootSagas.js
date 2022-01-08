import { all } from "redux-saga/effects";
import trendingSagas from "./trendingSagas";

function* rootSaga() {
  yield all([trendingSagas()]);
}

export default rootSaga;
