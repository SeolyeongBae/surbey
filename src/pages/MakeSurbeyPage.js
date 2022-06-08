import React, { useState } from "react";
import EditQuestionContainer from "../containers/EditQuestionContainer";
import VerifyQuestionContainer from "../containers/VerifyQuestionContainer";

function MakeSurbeyPage() {
  const [isPressed, setIsPressed] = useState(false);
  //테스트로 둘 다 넣어놓음.
  return (
    <div className="flex flex-col px-10 py-10">
      <div className="py-1 rounded-lg text-2xl font-bold">설문 제작</div>
      <EditQuestionContainer isPressed={isPressed} />
      <VerifyQuestionContainer press={setIsPressed} />
    </div>
  );
}

export default MakeSurbeyPage;
