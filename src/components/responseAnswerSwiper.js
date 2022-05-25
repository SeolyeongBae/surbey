import React from "react";

const innerStyle = {
  width: "10rem",
  border: "1px solid teal",
  borderRadius: ".25rem",
  margin: "0 auto",
};

function ResponseAnswerSwiper({ index, question }) {
  return (
    <>
      <div style={innerStyle}>
        <div> Q{index} </div>
        <div> {question.text}</div>
        <button> {question.answer[0].text}</button>
        <button> {question.answer[1].text}</button>
      </div>
    </>
  );
}

export default ResponseAnswerSwiper;
