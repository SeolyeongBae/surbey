import React, { useEffect, useRef, useState } from "react";

const innerStyle = {
  width: "10rem",
  border: "1px solid teal",
  borderRadius: ".25rem",
  margin: "0 auto",
};

function ResponseAnswerSwiper({
  index,
  question,
  goNext,
  selectAnswer,
  isCurrent,
}) {
  const ansClick = (e) => {
    selectAnswer(index, e.target.name);
    goNext();
  };

  const [sec, setSec] = useState(5);

  const timerId = useRef(null);
  const [isTimeOut, setIsTimeOut] = useState(false);

  useEffect(() => {
    if (isCurrent && question.time === 1) {
      timerId.current = setInterval(() => {
        setSec(() => sec - 1);
      }, 1000);
      return () => clearInterval(timerId.current);
    }
  }, [isCurrent]);

  useEffect(() => {
    if (sec === 0) {
      clearInterval(timerId.current);
      setIsTimeOut(() => true);
      goNext();
    }
  }, [sec]);

  return (
    <>
      <div style={innerStyle}>
        <div> Q{index} </div>
        <div> {question.text}</div>
        {isTimeOut ? (
          <>
            <div>더이상 응답하지 못하는 질문이에요!</div>
          </>
        ) : (
          <>
            {" "}
            {question.time === 1 && (
              <div>
                제한 시간이 있어요!
                <div className="timer">{sec} 초</div>
              </div>
            )}
            <button onClick={ansClick} name={question.answer[0].ansId}>
              {question.answer[0].text}
            </button>
            <button onClick={ansClick} name={question.answer[1].ansId}>
              {question.answer[1].text}
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default ResponseAnswerSwiper;
