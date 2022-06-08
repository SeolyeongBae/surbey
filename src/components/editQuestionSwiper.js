import React from "react";
import EditQuestionDetail from "../components/editQuestionDetail";
import EditAnswerDetail from "../components/editAnswerDetail";
import { Switch } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const innerStyle = {
  width: "18rem",
  borderRadius: "2rem",
  margin: "0 auto",
  padding: "1em",
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
      <div style={innerStyle} className={"flex flex-col bg-gray-50"}>
        <div className="py-1 px-2 rounded-lg text-sky-600  text-2xl font-bold">
          Q{index}.
        </div>
        <EditQuestionDetail
          question={question}
          onEdit={onEdit}
          id={question.id}
        />

        <button
          name={question.id}
          onClick={onChange}
          className={"inline-flex flex-shrink-0 items-center justify-center"}
        >
          Timer
          <Switch
            checked={timeCount}
            onChange={() => {}}
            className={classNames(
              timeCount ? "bg-blue-600" : "bg-gray-200",
              "mx-2 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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
        <div className="button-container my-5">
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
      </div>
    </>
  );
}

export default EditQuestionSwiper;
