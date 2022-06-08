import React from "react";

const innerStyle = {
  width: "18rem",
  borderRadius: "2rem",
  margin: "0 auto",
  padding: "1em",
  height: "100vh",
  fontSize: "1rem",
  lineHeight: 1.5,
  display: "flex",
};

function ResponseInfoSurvey({ onClick }) {
  return (
    <>
      <div
        style={innerStyle}
        className={"flex justify-center items-center flex-col bg-gray-50"}
      >
        <div className="py-1 px-1 rounded-lg text-sky-600 text-xl font-bold">
          2021 교과만족도 설문조사
        </div>

        <div className="my-5 rounded-md bg-white px-4 py-5">
          <div> 설문 기간 : 22/06/08-22/06/10</div>
          <div> 설문 목적 : 교과만족도 평가를 위함 </div>
          <div> 설문 대상 : GIST 학생들</div>
        </div>

        <div className="button-container my-5 flex flex-col">
          <button
            onClick={onClick}
            className="py-5 px-5 my-2 font-semibold rounded-lg text-sky-600 bg-blue-100 hover:bg-blue-300 rounded-md  "
          >
            시작하기
          </button>
        </div>
      </div>
    </>
  );
}

export default ResponseInfoSurvey;
