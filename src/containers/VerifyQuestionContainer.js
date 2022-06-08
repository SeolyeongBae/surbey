import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { verifyQuestions } from "../api/getQuestion";

function VerifyQuestionContainer() {
  const { id } = useParams();

  const editQuestions = useSelector((state) => state.editReducer);

  const onClick = () => {
    console.log(id);
    const verifyingArr = editQuestions.map((question) => ({
      answerDescription: [question.answer[0].text, question.answer[1].text],
      questionContent: question.text,
      questionOrder: question.id,
      time: question.time,
    }));

    verifyQuestions(id, verifyingArr);
  };

  return (
    <>
      <button
        onClick={onClick}
        className="py-2 px-4 font-semibold rounded-lg text-white bg-blue-500 hover:bg-blue-700"
      >
        설문지 검토
      </button>
    </>
  );
}

export default VerifyQuestionContainer;
