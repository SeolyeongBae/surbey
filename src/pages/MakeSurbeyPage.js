import React, { useState } from "react";
import { Link } from "react-router-dom";
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

      <button className="py-2 px-4 my-5 font-semibold rounded-lg text-white bg-blue-500 hover:bg-blue-700">
        <Link to={`share`}> 설문 완성하기 </Link>
      </button>
    </div>
  );
}

export default MakeSurbeyPage;
