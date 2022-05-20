import React from "react";
import EditQuestionDetail from "../components/editQuestionDetail";
import EditAnswerDetail from "../components/editAnswerDetail";

const innerStyle = {
  width: "10rem",
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

        <button name={question.id} onClick={onChange}>
          {timeCount ? "타이머 끄기" : "타이머 켜기"}
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
