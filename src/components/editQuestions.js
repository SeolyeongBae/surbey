import React from "react";
import EditQuestionDetail from "../components/editQuestionDetail";

// 컴포넌트 최적화를 위하여 React.memo를 사용합니다
const Question = React.memo(function Question({ question, onRemove, index }) {
  return (
    <>
      <button> editMode </button>
      <button onClick={() => onRemove(question.id)}> remove </button>
    </>
  );
});

const QuestionList = React.memo(function QuestionList({
  questions,
  onRemove,
  onEdit,
}) {
  return (
    <ul>
      {questions &&
        questions.map((question, index) => (
          <div key={question.id}>
            <div> Q{index} </div>
            <EditQuestionDetail
              question={question}
              onEdit={onEdit}
              id={question.id}
            />
            <Question question={question} index={index} onRemove={onRemove} />
          </div>
        ))}
    </ul>
  );
});

function EditQuestions({ questions, onCreate, onRemove, onEdit }) {
  return (
    <div>
      <QuestionList questions={questions} onRemove={onRemove} onEdit={onEdit} />
      <button onClick={() => onCreate("질문을 입력해 주세요")}>등록</button>
    </div>
  );
}

export default EditQuestions;
