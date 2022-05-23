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
        <div> {question.answer[0].text}</div>
        <div> {question.answer[1].text}</div>
      </div>
    </>
  );
}

export default ResponseAnswerSwiper;
