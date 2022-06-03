import React from "react";
import EditQuestionDetail from "../components/editQuestionDetail";
import EditAnswerDetail from "../components/editAnswerDetail";
import { Switch } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const innerStyle = {
  width: "15rem",
  border: "1px solid teal",
  borderRadius: ".25rem",
  margin: "0 auto",
};

function EditQuestionSwiper({
  index,
  question,
  onEdit,
  onChange,
  onEditAnswer,
  timeCount,
}) {
  return (
    <>
      <div style={innerStyle}>
        <div> Q{index} </div>
        <EditQuestionDetail
          question={question}
          onEdit={onEdit}
          id={question.id}
        />

        <button
          name={question.id}
          onClick={onChange}
          className={"inline-flex flex-shrink-0 "}
        >
          타이머 설정
          <Switch
            checked={timeCount}
            onChange={() => {}}
            className={classNames(
              timeCount ? "bg-indigo-600" : "bg-gray-200",
              "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            )}
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className={classNames(
                timeCount ? "translate-x-5" : "translate-x-0",
                "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
              )}
            />
          </Switch>
        </button>

        <EditAnswerDetail
          answer={question.answer[0].text}
          onEdit={onEditAnswer}
          questionId={question.id}
          answerId={0}
        />

        <EditAnswerDetail
          answer={question.answer[1].text}
          onEdit={onEditAnswer}
          questionId={question.id}
          answerId={1}
        />
      </div>
    </>
  );
}

export default EditQuestionSwiper;
