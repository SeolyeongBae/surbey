import React from "react";

function EditQuestionPriview({ question }) {
  return (
    <>
      <div> Q{question.id} </div>
      <div> {question.title} </div>
      <button> edit </button>
    </>
  );
}

export default EditQuestionPriview;
