import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import responseReducer, { postsSaga } from "./albums";
import editReducer from "./editQuestion";

const rootReducer = combineReducers({ responseReducer, editReducer });

export function* rootSaga() {
  yield all([postsSaga()]); // all 은 배열 안의 여러 사가를 동시에 실행시켜줍니다.
}

export default rootReducer;
