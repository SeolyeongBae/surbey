import React from "react";

const innerStyle = {
  width: "10rem",
  border: "1px solid teal",
  borderRadius: ".25rem",
  margin: "0 auto",
};

function ResponseAnswerSwiper({ index, question, goNext }) {
  return (
    <>
      <div style={innerStyle}>
        <div> Q{index} </div>
        <div> {question.text}</div>
        <button onClick={goNext}> {question.answer[0].text}</button>
        <button onClick={goNext}> {question.answer[1].text}</button>
      </div>
    </>
  );
}

export default ResponseAnswerSwiper;
