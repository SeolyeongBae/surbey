import React, { useState } from "react";

// 컴포넌트 최적화를 위하여 React.memo를 사용합니다
const Question = React.memo(function Question({ question }) {
  return (
    <>
      <div> Q{question.id} </div>
      <div> {question.text} </div>
      <button> edit </button>
    </>
  );
});

// 컴포넌트 최적화를 위하여 React.memo를 사용합니다
const QuestionList = React.memo(function QuestionList({ questions }) {
  return (
    <ul>
      {questions &&
        questions.map((question) => (
          <Question key={question.id} question={question} />
        ))}
    </ul>
  );
});

function EditQuestions({ questions, onCreate }) {
  const [text, setText] = useState("");
  const onChange = (e) => setText(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault(); // Submit 이벤트 발생했을 때 새로고침 방지
    onCreate(text);
    setText(""); // 인풋 초기화
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={text}
          placeholder="할 일을 입력하세요.."
          onChange={onChange}
        />
        <button type="submit">등록</button>
      </form>

      <QuestionList questions={questions} />
    </div>
  );
}

export default EditQuestions;
