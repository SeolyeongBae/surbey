import React from "react";
import { Link } from "react-router-dom";
import EditQuestionDetail from "../components/editQuestionDetail";

/* 해당 질문에 대한 수정/삭제 버튼을 띄운다.*/
const Question = React.memo(function Question({ question, onRemove, index }) {
  const focusState = { focusIndex: index };
  return (
    <>
      <button>
        <Link to="detail" state={focusState}>
          검색하기
        </Link>
      </button>

      <button onClick={() => onRemove(question.id)}> remove </button>
    </>
  );
});

/* question을 받아 질문과 수정/삭제 버튼을 띄운다.*/
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
