import React from "react";
import { Link } from "react-router-dom";
import EditQuestionDetail from "../components/editQuestionDetail";

/* 해당 질문에 대한 수정/삭제 버튼을 띄운다.*/
const Question = React.memo(function Question({ index }) {
  const focusState = { focusIndex: index };
  return (
    <>
      <Link to="detail" state={focusState}>
        <button className="py-1  px-2 border border-gray-300 rounded-md hover:bg-blue-100 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#4a90e2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
            <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
          </svg>
        </button>
      </Link>
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
    <>
      {questions &&
        questions.map((question, index) => (
          <div
            key={question.id}
            className="bg-gray-50 rounded-md my-10  px-10 "
          >
            <div className="flex py-2 flex-row justify-between ">
              <div className="py-1 rounded-lg text-sky-600  text-2xl font-bold">
                {" "}
                Q{index}.{" "}
              </div>
              <button
                onClick={() => onRemove(question.id)}
                type="button"
                className=" w-10 h-10 text-blue-700 hover:bg-blue-500 bg-white hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
              >
                X
              </button>
            </div>
            <EditQuestionDetail
              question={question}
              onEdit={onEdit}
              id={question.id}
            />
            <div className=" flex justify-end  pb-5 ">
              <Question index={index} />
            </div>
          </div>
        ))}
    </>
  );
});

function EditQuestions({ questions, onCreate, onRemove, onEdit }) {
  return (
    <div>
      <QuestionList questions={questions} onRemove={onRemove} onEdit={onEdit} />
      <div className="buttons my-5 flex flex-row justify-between ">
        <button
          className="py-2 px-4 font-semibold rounded-lg text-sky-600 bg-blue-100 hover:bg-blue-300"
          onClick={() => onCreate("질문을 입력해 주세요")}
        >
          질문 추가
        </button>

        <Link to="detail" state={{ focusIndex: 0 }}>
          <button className="py-2 px-4 font-semibold rounded-lg text-sky-600 bg-blue-100 hover:bg-blue-300">
            편집 모드
          </button>
        </Link>
      </div>
    </div>
  );
}

export default EditQuestions;
