import React, { useState } from "react";

const innerStyle = {
  width: "18rem",
  borderRadius: "2rem",
  margin: "0 auto",
  padding: "1em",
};

function SubmitAnswerSurvey({}) {
  const [isSubmited, setIsSubmited] = useState(false);

  const onClick = () => {
    setIsSubmited(() => true);
  };

  return (
    <>
      <div
        style={innerStyle}
        className={"flex justify-center items-center flex-col bg-gray-50"}
      >
        {isSubmited ? (
          <>
            {" "}
            <div className="py-1 px-2 rounded-lg text-sky-600  text-2xl font-bold">
              응답이 완료되었습니다.
            </div>
            <div> 참여해주셔서 감사합니다.</div>
          </>
        ) : (
          <>
            <div className="py-1 px-2 rounded-lg text-sky-600  text-2xl font-bold">
              응답이 완료되었습니다.
            </div>
            <div> 제출하러 가볼까요?</div>
            <div className="button-container my-5 flex flex-col">
              <button
                onClick={onClick}
                className="py-5 px-5 my-2 font-semibold rounded-lg text-sky-600 bg-blue-100 hover:bg-blue-300 rounded-md  "
              >
                제출하기
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default SubmitAnswerSurvey;
