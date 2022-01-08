import { takeEvery, put, call, all } from "redux-saga/effects";
import { getTrendFoods } from "../Types/getTypes";
import { setTrendFood } from "../Actions/FoodAction";
import { getTrendings } from "../Services/getTrending";

function* foodWorker() {
  const response = yield call(getTrendings);
  yield put(setTrendFood(response.data));
}

function* foodTrendWatch() {
  yield takeEvery(getTrendFoods, foodWorker);
}

export default function* trendingSagas() {
  yield all([foodTrendWatch()]);
}
