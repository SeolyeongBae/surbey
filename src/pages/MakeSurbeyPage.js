import React from "react";
import { useParams } from "react-router-dom";
import EditQuestionContainer from "../containers/EditQuestionContainer";
import VerifyQuestionContainer from "../containers/VerifyQuestionContainer";

function MakeSurbeyPage() {
  const { id } = useParams();

  //테스트로 둘 다 넣어놓음.
  return (
    <div className="flex flex-col px-10 py-10">
      <div className="py-1 rounded-lg text-2xl font-bold">설문 제작</div>
      <EditQuestionContainer />
      <VerifyQuestionContainer />
    </div>
  );
}

export default MakeSurbeyPage;
