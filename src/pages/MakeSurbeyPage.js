import React from "react";
import EditQuestionContainer from "../containers/EditQuestionContainer";

function MakeSurbeyPage() {
  //테스트로 둘 다 넣어놓음.
  return (
    <div className={"flex flex-col"}>
      <EditQuestionContainer />
      <button className="py-2 px-4 font-semibold rounded-lg text-white bg-blue-500 hover:bg-blue-700">
        설문지 검토
      </button>
    </div>
  );
}

export default MakeSurbeyPage;
