/* 과거 사진 api를 받을때 썼던 코드, 이후 api 받아와서 설문 보여줄 때 이 코드를 재활용할 예정이다. 리덕스 사가 연습! */

import { getQuestionsList } from "../api/getQuestion"; // api/posts 안의 함수 모두 불러오기
import {
  reducerUtils,
  handleAsyncActions,
  createPromiseSaga,
} from "../lib/asyncUtils";
import { takeEvery } from "redux-saga/effects";

//액션 타입

const GET_QUESTIONS = "get/GET_QUESTIONS";
const GET_QUESTIONS_SUCCESS = "get/GET_QUESTIONS_SUCCESS";
const GET_QUESTIONS_ERROR = "get/GET_QUESTIONS_ERROR";

//saga
export const getQuestions = (url) => ({
  type: GET_QUESTIONS,
  payload: url,
  meta: url,
});

//const getQuestionSaga = createPromiseSagaById(GET_QUESTION, getQuestionById);
const getQuestionsSaga = createPromiseSaga(GET_QUESTIONS, getQuestionsList);

// 사가들을 합치기
export function* postsSaga() {
  //yield takeEvery(GET_QUESTION, getQuestionSaga);
  yield takeEvery(GET_QUESTIONS, getQuestionsSaga);
}

// initialState 쪽도 반복되는 코드를 initial() 함수를 사용해서 리팩토링 했습니다.
const initialState = {
  question: reducerUtils.initial(),
};

//posts로 인해 state.posts...
//리네이밍
export default function responseReducer(state = initialState, action) {
  switch (action.type) {
    case GET_QUESTIONS:
    case GET_QUESTIONS_SUCCESS:
    case GET_QUESTIONS_ERROR:
      return handleAsyncActions(GET_QUESTIONS, "question", true)(state, action);
    default:
      return state;
  }
}
