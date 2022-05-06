import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addQuestion,
  deleteQuestion,
  editQuestion,
} from "../modules/editQuestion";
import EditQuestions from "../components/editQuestions";

function EditQuestionContainer() {
  const editQuestions = useSelector((state) => state.editReducer);
  const dispatch = useDispatch();

  const onCreate = (text) => dispatch(addQuestion(text)); //질문 생성
  const onRemove = (index) => dispatch(deleteQuestion(index)); //질문 삭제
  const onEdit = (id, text) => dispatch(editQuestion(id, text)); //질문 수정

  //최적화를 위해 useCallback를 사용할 수 있을지도?

  return (
    <EditQuestions
      questions={editQuestions}
      onCreate={onCreate}
      onRemove={onRemove}
      onEdit={onEdit}
    />
  );
}

export default EditQuestionContainer;
