import React from "react";
import EditQuestionContainer from "../containers/EditQuestionContainer";

function MakeSurbeyPage() {
  //테스트로 둘 다 넣어놓음.
  return (
    <div className="flex flex-col px-10 py-10">
      <div className="py-1 rounded-lg text-2xl font-bold">설문 제작</div>
      <EditQuestionContainer />
      <button className="py-2 px-4 font-semibold rounded-lg text-white bg-blue-500 hover:bg-blue-700">
        설문지 검토
      </button>
    </div>
  );
}

export default MakeSurbeyPage;
