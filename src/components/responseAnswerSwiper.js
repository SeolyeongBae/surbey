import React from "react";

const innerStyle = {
  width: "10rem",
  border: "1px solid teal",
  borderRadius: ".25rem",
  margin: "0 auto",
};

function ResponseAnswerSwiper({ index, question, goNext, selectAnswer }) {
  const ansClick = (e) => {
    selectAnswer(index, e.target.name);
    goNext();
  };

  return (
    <>
      <div style={innerStyle}>
        <div> Q{index} </div>
        <div> {question.text}</div>
        <button onClick={ansClick} name={question.answer[0].ansId}>
          {question.answer[0].text}
        </button>
        <button onClick={ansClick} name={question.answer[1].ansId}>
          {question.answer[1].text}
        </button>
      </div>
    </>
  );
}

export default ResponseAnswerSwiper;
