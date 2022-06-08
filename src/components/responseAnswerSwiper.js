import React, { useEffect, useRef, useState } from "react";

const innerStyle = {
  width: "18rem",
  borderRadius: "2rem",
  margin: "0 auto",
  padding: "1em",
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
    if (question.time === 1) {
      setIsTimeOut(() => true);
    }
  };

  const [sec, setSec] = useState(5);
  const time = useRef(5);

  const timerId = useRef(null);
  const [isTimeOut, setIsTimeOut] = useState(false);
  useEffect(() => {
    if (isCurrent && question.time === 1) {
      timerId.current = setInterval(() => {
        setSec(time.current % 60);
        time.current -= 1;
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
      <div style={innerStyle} className={"flex flex-col bg-gray-50"}>
        <div className="py-2 px-2 rounded-lg text-sky-600 text-2xl font-bold">
          Q{index}.
        </div>
        <div className="py-3 px-2"> {question.text}</div>
        {isTimeOut ? (
          <>
            <div
              className={"grow flex justify-center items-center text-gray-400 "}
            >
              더이상 응답하지 못하는 질문이에요!
            </div>
          </>
        ) : (
          <>
            {" "}
            {question.time === 1 && (
              <>
                <div
                  className={
                    "inline-flex flex-shrink-0 items-center justify-center text-gray-400 "
                  }
                >
                  제한 시간이 있어요!
                </div>
                <div className=" inline-flex flex-shrink-0 timer items-center justify-center text-gray-500">
                  {sec} 초
                </div>
              </>
            )}
            <div className="button-container my-5 flex flex-col grow justify-center">
              <button
                onClick={ansClick}
                name={question.answer[0].answerId}
                className={`py-5 px-5 my-2 font-semibold rounded-lg text-sky-600 bg-blue-100 hover:bg-blue-300 rounded-md `}
              >
                {question.answer[0].answerQuestion}
              </button>
              <button
                onClick={ansClick}
                name={question.answer[1].answerId}
                className="py-5 px-5 my-2 font-semibold rounded-lg text-sky-600 bg-blue-100 hover:bg-blue-300 rounded-md  "
              >
                {question.answer[1].answerQuestion}
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default ResponseAnswerSwiper;
