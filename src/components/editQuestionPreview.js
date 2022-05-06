import React, { useState } from "react";

function EditQuestionPriview({
  question,
  changeEditMode,
  isEditMode,
  elementIndex,
}) {
  const [newQuestion, setNewQuestion] = useState(question.text);

  const onSubmit = async (event) => {
    event.preventDefault();
    changeEditMode(elementIndex);
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewQuestion(value);
  };

  return (
    <div>
      <div> Q{question.id} </div>
      {isEditMode ? (
        <>
          <form onSubmit={onSubmit}>
            <input
              type="question"
              placeholder="바꿀 질문을 입력해주세요"
              value={newQuestion}
              required
              onChange={onChange}
            />
            <input type="submit" value="Update Question" />
          </form>
          <div> 선택지 1 </div>
          <div> 선택지 2 </div>
        </>
      ) : (
        <>
          <div> {newQuestion} </div>
          <button onClick={() => changeEditMode(elementIndex)}> edit </button>
        </>
      )}
    </div>
  );
}

export default EditQuestionPriview;
