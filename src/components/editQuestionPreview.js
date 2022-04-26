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
      title: { value },
    } = event;
    setNewQuestion(value);
  };

  return (
    <div>
      {isEditMode ? (
        <>
          <form onSubmit={onSubmit}>
            <input
              type="question"
              placeholder="Edit your Question"
              value={newQuestion}
              required
              onChange={onChange}
            />
            <input type="submit" value="Update Question" />
          </form>
        </>
      ) : (
        <>
          <div> Q{question.id} </div>
          <div> {question.title} </div>
          <button onClick={() => changeEditMode(elementIndex)}> edit </button>
        </>
      )}
    </div>
  );
}

export default EditQuestionPriview;
