import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import foodReducer from "../src/Reducers/foodReducer";
import createSagaMiddleware from "redux-saga";
import rootSagas from "./Sagas/rootSagas";
const sagaMiddleWare = createSagaMiddleware();
const rootReducer = combineReducers({
  trendingFood: foodReducer,
});
const Store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleWare))
);
sagaMiddleWare.run(rootSagas);
export default Store;
