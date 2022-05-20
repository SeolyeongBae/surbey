/* 과거 사진 api를 받을때 썼던 코드, 이후 api 받아와서 설문 보여줄 때 이 코드를 재활용할 예정이다. 리덕스 사가 연습! */

import { getPhotoById } from "../api/getPhotos"; // api/posts 안의 함수 모두 불러오기
import {
  reducerUtils,
  createPromiseSagaById,
  handleAsyncActionsById,
} from "../lib/asyncUtils";
import { takeEvery } from "redux-saga/effects";

//액션 타입

const GET_PHOTO = "GET_PHOTO";
const GET_PHOTO_SUCCESS = "GET_PHOTO_SUCCESS";
const GET_PHOTO_ERROR = "GET_PHOTO_ERROR";

//saga

// const getPhotosSaga = createPromiseSaga(GET_PHOTOS, postsAPI.getPhotos);

export const getPost = (id) => ({ type: GET_PHOTO, payload: id, meta: id });
const getPhotoSaga = createPromiseSagaById(GET_PHOTO, getPhotoById);

// 사가들을 합치기
export function* postsSaga() {
  yield takeEvery(GET_PHOTO, getPhotoSaga);
  //yield takeEvery(GET_POST, getPostSaga);
}

// initialState 쪽도 반복되는 코드를 initial() 함수를 사용해서 리팩토링 했습니다.
const initialState = {
  photo: reducerUtils.initial(),
};

//posts로 인해 state.posts...
//리네이밍
export default function photoReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PHOTO:
    case GET_PHOTO_SUCCESS:
    case GET_PHOTO_ERROR:
      return handleAsyncActionsById(GET_PHOTO, "photo", true)(state, action);
    default:
      return state;
  }
}
