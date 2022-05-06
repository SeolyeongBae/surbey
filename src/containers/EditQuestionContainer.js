import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addQuestion,
  deleteQuestion,
  editQuestion,
} from "../modules/editQuestion";
import EditQuestions from "../components/editQuestions";

function EditQuestionContainer() {
  // useSelector 에서 꼭 객체를 반환 할 필요는 없습니다.
  // 한 종류의 값만 조회하고 싶으면 그냥 원하는 값만 바로 반환하면 됩니다.

  const editQuestions = useSelector((state) => state.editReducer);
  const dispatch = useDispatch();

  const onCreate = (text) => dispatch(addQuestion(text));
  const onRemove = (index) => dispatch(deleteQuestion(index));
  const onEdit = (id, text) => dispatch(editQuestion(id, text));
  //const onToggle = useCallback(id => dispatch(toggleTodo(id)), [dispatch]); // 최적화를 위해 useCallback 사용

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
