import React, { useState } from "react";

// 컴포넌트 최적화를 위하여 React.memo를 사용합니다
const Question = React.memo(function Question({ question, onRemove, index }) {
  return (
    <>
      <div> Q{index} </div>
      <div> {question.text} </div>
      <button> edit </button>
      <button onClick={() => onRemove(question.id)}> remove </button>
    </>
  );
});

// 컴포넌트 최적화를 위하여 React.memo를 사용합니다
const QuestionList = React.memo(function QuestionList({ questions, onRemove }) {
  return (
    <ul>
      {questions &&
        questions.map((question, index) => (
          <Question
            key={question.id}
            question={question}
            index={index}
            onRemove={onRemove}
          />
        ))}
    </ul>
  );
});

function EditQuestions({ questions, onCreate, onRemove }) {
  const [text, setText] = useState("");

  return (
    <div>
      <QuestionList questions={questions} onRemove={onRemove} />

      <button onClick={() => onCreate("질문을 입력해 주세요")}>등록</button>
    </div>
  );
}

export default EditQuestions;
